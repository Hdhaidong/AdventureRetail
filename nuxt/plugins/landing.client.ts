// 官网行为层：双语切换 / 客户专区 / 注册验证 / 咨询与报告提交
// 迁移自静态版 legacy 脚本；注册、咨询、报告三个动作已接入 server API（打通业务平台）
export default defineNuxtPlugin((nuxtApp) => {
  const LS = 'ar_client'
  const LANG_KEY = 'ar_lang'
  let lang = 'zh'
  let pendingClient: any = null

  const $ = (id: string): any => document.getElementById(id)

  const toast = (msg: string, long?: boolean) => {
    const t = $('toast')
    if (!t) return
    t.textContent = msg
    t.style.opacity = '1'
    t.style.transform = 'translateX(-50%) translateY(0)'
    clearTimeout(t._tm)
    t._tm = setTimeout(() => {
      t.style.opacity = '0'
      t.style.transform = 'translateX(-50%) translateY(80px)'
    }, long ? 5200 : 1800)
  }

  const getClient = () => {
    try { return JSON.parse(localStorage.getItem(LS) || 'null') } catch { return null }
  }

  const validMail = (m: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)

  const renderPortal = () => {
    const c = getClient()
    const locked = $('portalLocked'), open = $('portalOpen')
    if (!locked || !open) return
    if (!c) { locked.style.display = ''; open.style.display = 'none'; return }
    locked.style.display = 'none'; open.style.display = ''
    const t = lang === 'zh' ? c.typeZh : c.typeEn
    const who = $('portalWho')
    if (who) who.innerHTML = (lang === 'zh' ? '已登录：' : 'Signed in: ') + '<b>' + c.name + '</b> · ' + t + ' · ' + c.co
    const cw = $('consultWho')
    if (cw) cw.innerHTML = (lang === 'zh' ? '咨询将以 <b>' + c.mail + '</b> 为回复邮箱发出，48 小时内回复。' : 'We reply to <b>' + c.mail + '</b> within 48 hours.')
    // 我的真实线索（本站 CRM）：登录后拉取，提交咨询即出现
    const mine = $('crmMine')
    if (mine) {
      mine.innerHTML = ''
      fetch('/api/crm/leads?mail=' + encodeURIComponent(c.mail || ''), { cache: 'no-store' })
        .then(r => r.json())
        .then((d: any) => {
          const leads: any[] = d?.leads || []
          if (!leads.length) return
          const stageZh: Record<string, string> = { lead: '线索', assess: '评估', pilot: '试点', scale: '放大' }
          const day = (ts: number) => { const n = Math.floor((Date.now() - ts) / 864e5); return n <= 0 ? '今天' : 'D+' + n }
          const esc = (s: any) => String(s || '').replace(/[&<>"']/g, (m: string) => ({ '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' } as Record<string, string>)[m] || m)
          const rows = leads.slice(0, 5).map((l: any) => {
            const txt = (l.topic || l.message || '业务咨询').slice(0, 26)
            return '<div class="cap-ui-row ' + (l.stage === 'scale' ? 'ok' : 'run') + '"><span class="st"></span><span style="flex:1">' + (stageZh[l.stage] || '线索') + ' · ' + esc(txt) + '</span><span>' + day(l.createdAt) + '</span></div>'
          }).join('')
          mine.innerHTML = '<div class="cap-ui"><div class="cap-ui-t" data-zh="我的线索 · 实时" data-en="MY LEADS · LIVE">我的线索 · 实时</div>'
            + rows
            + '<div class="cap-ui-ft"><span data-zh="共 ' + leads.length + ' 条 · 与业务平台同步" data-en="' + leads.length + ' leads · synced with the platform">共 ' + leads.length + ' 条 · 与业务平台同步</span><span>LIVE</span></div></div>'
        })
        .catch(() => { mine.innerHTML = '' })
    }
  }

  const setLang = (l: string, silent = false) => {
    lang = l
    try { localStorage.setItem(LANG_KEY, l) } catch {}
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en'
    $('btnZh')?.classList.toggle('on', l === 'zh')
    $('btnEn')?.classList.toggle('on', l === 'en')
    document.querySelectorAll('[data-zh]').forEach((el: any) => {
      const v = l === 'zh' ? el.dataset.zh : el.dataset.en
      if (v === undefined) return
      el.innerHTML = v
    })
    document.querySelectorAll('[data-zh-placeholder]').forEach((el: any) => {
      const v = l === 'zh' ? el.dataset.zhPlaceholder : (el.dataset.enPlaceholder || el.dataset.zhPlaceholder)
      if (v !== undefined) el.placeholder = v
    })
    renderPortal()
    document.title = l === 'zh'
      ? 'Adventure Retail · 把产品接进 AI 时代的货架'
      : 'Adventure Retail · Plug Your Products into the AI-era Shelf'
    if (!silent) toast(l === 'zh' ? '已切换为中文' : 'Switched to English')
  }

  // ---- 注册弹窗 ----
  const openReg = (type?: string) => {
    $('regModal')?.classList.add('open'); backToStep1()
    if (type) document.querySelectorAll('#typeRow .ttype').forEach((b: any) => {
      b.classList.toggle('on', b.dataset.val === type)
    })
  }
  const closeReg = () => { $('regModal')?.classList.remove('open') }
  const backToStep1 = () => {
    if ($('regStep1')) $('regStep1').style.display = ''
    if ($('regStep2')) $('regStep2').style.display = 'none'
  }

  const readRegForm = () => {
    const name = $('regName')?.value.trim()
    const mail = $('regMail')?.value.trim()
    const co = $('regCo')?.value.trim()
    const type = document.querySelector('#typeRow .ttype.on') as any
    return { name, mail, co, type }
  }

  const sendCode = async () => {
    const { name, mail, co, type } = readRegForm()
    if (!name || !mail || !co) { toast(lang === 'zh' ? '请填写称呼、邮箱与公司' : 'Name, email and company required'); return }
    if (!validMail(mail)) { toast(lang === 'zh' ? '邮箱格式不正确' : 'Invalid email address'); return }
    pendingClient = { name, mail, co, typeZh: type?.dataset.zh, typeEn: type?.dataset.en, typeVal: type?.dataset.val }
    try {
      const r: any = await $fetch('/api/register/send-code', {
        method: 'POST',
        body: { name, email: mail, company: co, type: type?.dataset.val || '' }
      })
      $('regStep1').style.display = 'none'
      $('regStep2').style.display = ''
      if ($('regCode')) $('regCode').value = ''
      if (r?.devCode) {
        toast((lang === 'zh' ? '演示验证码（正式环境将邮件送达）：' : 'Demo code (email delivery in production): ') + r.devCode, true)
      } else {
        toast(lang === 'zh' ? '验证码已发送，请查收邮箱' : 'Code sent — check your inbox', true)
      }
    } catch {
      toast(lang === 'zh' ? '发送失败，请稍后重试' : 'Send failed, please try again')
    }
  }

  const resendCode = async () => {
    if (!pendingClient) { backToStep1(); return }
    try {
      const r: any = await $fetch('/api/register/send-code', {
        method: 'POST',
        body: { name: pendingClient.name, email: pendingClient.mail, company: pendingClient.co, type: pendingClient.typeVal || '' }
      })
      if (r?.devCode) toast((lang === 'zh' ? '新验证码：' : 'New code: ') + r.devCode, true)
      else toast(lang === 'zh' ? '验证码已重新发送' : 'Code resent', true)
    } catch {
      toast(lang === 'zh' ? '发送失败，请稍后重试' : 'Send failed, please try again')
    }
  }

  const verifyCode = async () => {
    const v = $('regCode')?.value.trim()
    if (!pendingClient) { backToStep1(); return }
    try {
      const r: any = await $fetch('/api/register/verify', {
        method: 'POST',
        body: { email: pendingClient.mail, code: v, profile: pendingClient }
      })
      if (!r?.ok) { toast(lang === 'zh' ? '验证码不正确，请重试' : 'Incorrect code, try again'); return }
      const client = { ...pendingClient, ts: Date.now(), verified: true }
      localStorage.setItem(LS, JSON.stringify(client))
      pendingClient = null
      closeReg(); renderPortal()
      toast(lang === 'zh' ? '验证成功，已进入客户专区' : 'Verified — welcome to the portal')
      $('portal')?.scrollIntoView({ behavior: 'smooth' })
    } catch {
      toast(lang === 'zh' ? '验证失败，请稍后重试' : 'Verify failed, please try again')
    }
  }

  // ---- 客户专区 ----
  const consultModel = () => {
    const c = getClient()
    if (!c) {
      openReg()
      toast(lang === 'zh' ? '注册并验证后即可一对一咨询' : 'Register & verify to start the consultation')
      return
    }
    showPane('consult')
    $('portal')?.scrollIntoView({ behavior: 'smooth' })
  }

  const showPane = (p: string) => {
    $('pane-consult')?.classList.toggle('on', p === 'consult')
    $('pane-insight')?.classList.toggle('on', p === 'insight')
    $('pane-podcast')?.classList.toggle('on', p === 'podcast')
    $('pane-crm')?.classList.toggle('on', p === 'crm')
    $('pane-models')?.classList.toggle('on', p === 'models')
    $('pane-b2b')?.classList.toggle('on', p === 'b2b')
    $('pane-samples')?.classList.toggle('on', p === 'samples')
    $('tabConsult')?.classList.toggle('on', p === 'consult')
    $('tabInsight')?.classList.toggle('on', p === 'insight')
    $('tabPodcast')?.classList.toggle('on', p === 'podcast')
    $('tabCrm')?.classList.toggle('on', p === 'crm')
    $('tabModels')?.classList.toggle('on', p === 'models')
    $('tabB2b')?.classList.toggle('on', p === 'b2b')
    $('tabSamples')?.classList.toggle('on', p === 'samples')
  }

  const sendConsult = async () => {
    const c = getClient(); if (!c) return
    const topic = document.querySelector('#topicRow .topic.on') as any
    const topicLabel = lang === 'zh' ? topic?.dataset.t : topic?.dataset.en
    const msg = $('consultMsg')?.value.trim()
    try {
      await $fetch('/api/consult', {
        method: 'POST',
        body: { name: c.name, email: c.mail, company: c.co, type: c.typeVal, topic: topicLabel, message: msg }
      })
      if ($('consultMsg')) $('consultMsg').value = ''
      toast(lang === 'zh' ? '咨询已提交，48 小时内回复' : 'Inquiry sent — we reply within 48 hours', true)
      renderPortal()
    } catch {
      toast(lang === 'zh' ? '提交失败，请稍后重试' : 'Submit failed, please try again')
    }
  }

  const sendReport = async () => {
    const name = $('repName')?.value.trim()
    const mail = $('repMail')?.value.trim()
    const cat = $('repCat')?.value.trim()
    const revSel = $('repRev')
    const revOpt = revSel?.value ? revSel.options[revSel.selectedIndex] : null
    const revLabel = revOpt ? (lang === 'zh' ? revOpt.dataset.zh : (revOpt.dataset.en || revOpt.dataset.zh)) : ''
    const mkt = document.querySelector('#repMkts .mchip.on') as any
    const mktLabel = lang === 'zh' ? mkt?.dataset.zh : mkt?.dataset.en
    if (!name || !mail) { toast(lang === 'zh' ? '请填写称呼与邮箱' : 'Name and email required'); return }
    if (!validMail(mail)) { toast(lang === 'zh' ? '邮箱格式不正确' : 'Invalid email address'); return }
    try {
      await $fetch('/api/report', {
        method: 'POST',
        body: { name, email: mail, category: [cat, revLabel].filter(Boolean).join(' · '), market: mktLabel || '' }
      })
      toast(lang === 'zh' ? '已提交，报告将在 48 小时内送达邮箱' : 'Submitted — report arrives within 48 hours', true)
    } catch {
      toast(lang === 'zh' ? '提交失败，请稍后重试' : 'Submit failed, please try again')
    }
  }

  const logout = () => {
    localStorage.removeItem(LS)
    renderPortal()
    toast(lang === 'zh' ? '已退出登录' : 'Signed out')
  }

  // B2B 对接：公开目录渲染 + 询单提交（询单直接落本站 CRM 管线）
  let b2bLoaded = false
  const escHtml = (s: any) => String(s || '').replace(/[&<>"']/g, (m: string) => ({ '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' } as Record<string, string>)[m] || m)
  const renderB2b = async (force = false) => {
    const tbl = $('b2bTable'); if (!tbl) return
    if (b2bLoaded && !force) return
    try {
      const d: any = await $fetch('/api/b2b/catalog')
      const items: any[] = d?.items || []
      if (!items.length) return
      const sel = $('b2bSku')
      const opts = items.map((it) => {
        const title = lang === 'zh' ? (it.titleZh || it.titleEn) : (it.titleEn || it.titleZh)
        return '<option value="' + escHtml(it.sku) + '">' + escHtml(it.sku) + ' · ' + escHtml(title) + (it.status === 'matching' ? (lang === 'zh' ? '（匹配中）' : ' (matching)') : '') + '</option>'
      }).join('')
      if (sel && !sel.options.length) sel.innerHTML = opts
      const rows = items.map((it) => {
        const title = lang === 'zh' ? (it.titleZh || it.titleEn) : (it.titleEn || it.titleZh)
        const st = it.status === 'open'
          ? (lang === 'zh' ? '开放询单' : 'open')
          : (lang === 'zh' ? '渠道匹配中' : 'matching')
        return '<div class="cap-ui-row ' + (it.status === 'open' ? 'ok' : 'run') + '"><span class="st"></span>'
          + '<span style="flex:1"><b>' + escHtml(it.sku) + '</b> · ' + escHtml(title)
          + '<br><span style="opacity:.72">' + escHtml(it.category || '') + ' · MOQ ' + escHtml(it.moq || '—') + ' · ' + escHtml(it.price || '—') + ' · ' + escHtml(it.lead || '') + ' · ' + escHtml(it.markets || '') + '</span></span>'
          + '<span style="white-space:nowrap">' + st + '</span></div>'
      }).join('')
      tbl.innerHTML = '<div class="cap-ui"><div class="cap-ui-t" data-zh="B2B 目录 · 每次刷新带稳定 SKU" data-en="B2B CATALOG · STABLE SKUS EVERY REFRESH">B2B 目录 · 每次刷新带稳定 SKU</div>'
        + rows
        + '<div class="cap-ui-ft"><span data-zh="' + items.length + ' 个 SKU · /api/b2b/catalog 同步开放给系统与 Agent" data-en="' + items.length + ' SKUs · /api/b2b/catalog also open to systems & agents">' + items.length + ' 个 SKU · /api/b2b/catalog 同步开放给系统与 Agent</span><span>PULL & GO</span></div></div>'
      b2bLoaded = true
    } catch { tbl.innerHTML = '' }
  }

  const sendQuote = async () => {
    const name = $('b2bName')?.value.trim()
    const mail = $('b2bEmail')?.value.trim()
    const sku = $('b2bSku')?.value
    const qty = $('b2bQty')?.value.trim()
    const market = $('b2bMarket')?.value.trim()
    const msg = $('b2bMsg')?.value.trim()
    if (!name || !mail) { toast(lang === 'zh' ? '请填写联系人与邮箱' : 'Contact name and email required'); return }
    if (!validMail(mail)) { toast(lang === 'zh' ? '邮箱格式不正确' : 'Invalid email address'); return }
    if (!sku) { toast(lang === 'zh' ? '请选择 SKU' : 'Pick a SKU'); return }
    try {
      await $fetch('/api/b2b/quote', { method: 'POST', body: { name, email: mail, sku, qty, market, message: msg } })
      if ($('b2bQty')) $('b2bQty').value = ''
      if ($('b2bMarket')) $('b2bMarket').value = ''
      if ($('b2bMsg')) $('b2bMsg').value = ''
      toast(lang === 'zh' ? '询单已提交，已进入 CRM 管线，48 小时内首份报价评估' : 'RFQ sent — in the CRM pipeline, first quote assessment within 48 hours', true)
    } catch {
      toast(lang === 'zh' ? '提交失败，请稍后重试' : 'Submit failed, please try again')
    }
  }

  // 样品计划：目录渲染 + 预定落 CRM
  let samplesLoaded = false
  const renderSamples = async (force = false) => {
    const tbl = $('sampleTable'); if (!tbl) return
    if (samplesLoaded && !force) return
    try {
      const d: any = await $fetch('/api/samples/catalog')
      const items: any[] = d?.items || []
      if (!items.length) return
      const sel = $('sampleSku')
      if (sel && !sel.options.length) sel.innerHTML = items.map((it: any) => '<option value="' + escHtml(it.sku) + '">' + escHtml(it.sku) + ' · ' + escHtml(lang === 'zh' ? it.titleZh : it.titleEn) + '</option>').join('')
      const stMap: Record<string, [string, string]> = { available: ['可预定', 'Open'], limited: ['名额有限', 'Limited'], full: ['已约满', 'Full'] }
      const rows = items.map((it: any) => {
        const title = lang === 'zh' ? it.titleZh : it.titleEn
        const st = stMap[it.status] || stMap.available
        return '<div class="cap-ui-row ' + (it.status === 'full' ? '' : 'ok') + '"><span class="st"></span>'
          + '<span style="flex:1"><b>' + escHtml(it.sku) + '</b> · ' + escHtml(title)
          + '<br><span style="opacity:.72">' + escHtml(lang === 'zh' ? '余量 ' : 'Left ') + escHtml(it.sampleQty) + ' · ' + escHtml(lang === 'zh' ? it.reviewReqZh : it.reviewReqEn) + (it.markets ? ' · ' + escHtml(it.markets) : '') + '</span></span>'
          + '<span style="white-space:nowrap">' + (lang === 'zh' ? st[0] : st[1]) + '</span></div>'
      }).join('')
      tbl.innerHTML = '<div class="cap-ui"><div class="cap-ui-t" data-zh="样品目录 · 额度实时" data-en="SAMPLE CATALOG · LIVE QUOTAS">样品目录 · 额度实时</div>' + rows
        + '<div class="cap-ui-ft"><span data-zh="预定即进 CRM 管线 · 每单附测评交付要求" data-en="Every reservation enters the CRM pipeline with review deliverables">预定即进 CRM 管线 · 每单附测评交付要求</span><span>LIVE</span></div></div>'
      samplesLoaded = true
    } catch { tbl.innerHTML = '' }
  }

  const sendSampleReserve = async () => {
    const name = $('sampleName')?.value.trim()
    const mail = $('sampleEmail')?.value.trim()
    const sku = $('sampleSku')?.value
    const qty = parseInt($('sampleQty')?.value.trim() || '1', 10)
    const plan = $('samplePlan')?.value.trim()
    if (!name || !mail) { toast(lang === 'zh' ? '请填写联系人与邮箱' : 'Contact name and email required'); return }
    if (!validMail(mail)) { toast(lang === 'zh' ? '邮箱格式不正确' : 'Invalid email address'); return }
    if (!sku) { toast(lang === 'zh' ? '请选择样品 SKU' : 'Pick a sample SKU'); return }
    try {
      await $fetch('/api/samples/reserve', { method: 'POST', body: { name, email: mail, sku, qty: qty || 1, plan } })
      if ($('sampleQty')) $('sampleQty').value = ''
      if ($('samplePlan')) $('samplePlan').value = ''
      toast(lang === 'zh' ? '样品位已锁定，已进入 CRM 管线，备样进度邮件与专区同步' : 'Sample locked — in the CRM pipeline; prep progress syncs by email and in the portal', true)
      renderSamples(true)
    } catch {
      toast(lang === 'zh' ? '预定失败，请稍后重试' : 'Reservation failed, please try again')
    }
  }

  // 暴露给 raw HTML 的 inline onclick
  Object.assign(window as any, {
    setLang, openReg, closeReg, backToStep1, sendCode, resendCode, verifyCode,
    showPane, consultModel, sendConsult, sendReport, logout, sendQuote, sendSampleReserve
  })

  nuxtApp.hook('app:mounted', () => {
    // 恢复语言偏好
    let saved = 'zh'
    try { saved = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'zh' } catch {}
    setLang(saved, true)

    // B2B 目录预取（页签打开即有数据）
    renderB2b()
    // 样品目录预取
    renderSamples()

    // 选项行点击
    $('typeRow')?.addEventListener('click', (e: any) => {
      const b = e.target.closest('.ttype'); if (!b) return
      document.querySelectorAll('#typeRow .ttype').forEach(x => x.classList.remove('on')); b.classList.add('on')
    })
    $('topicRow')?.addEventListener('click', (e: any) => {
      const b = e.target.closest('.topic'); if (!b) return
      document.querySelectorAll('#topicRow .topic').forEach(x => x.classList.remove('on')); b.classList.add('on')
    })
    $('repMkts')?.addEventListener('click', (e: any) => {
      const b = e.target.closest('.mchip'); if (!b) return
      document.querySelectorAll('#repMkts .mchip').forEach(x => x.classList.remove('on')); b.classList.add('on')
    })



    // 品牌墙无缝滚动 + 导航滚动态 + reveal 动效
    // 自愈：水合或 HMR 重建节点后，新出现的 .reveal / #wallTrack 会在此补挂
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    const initAnim = () => {
      const t = $('wallTrack')
      if (t && !t.dataset.doubled) { t.innerHTML += t.innerHTML; t.dataset.doubled = '1' }
      document.querySelectorAll('.reveal:not([data-observed])').forEach(el => {
        el.dataset.observed = '1'
        io.observe(el)
      })
    }
    initAnim()
    new MutationObserver(initAnim).observe(document.body, { childList: true, subtree: true })

    addEventListener('scroll', () => {
      const n = $('nav')
      if (n) n.classList.toggle('scrolled', scrollY > 40)
    }, { passive: true })

    // 播客播放器：单实例播放 / 进度 / 点击定位（公开区 #podcast 与客户专区通用）
    const wirePlayer = (root: Element) => {
      let audio: HTMLAudioElement | null = null
      let curEp: HTMLElement | null = null
      const fmt = (t: number) => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0')
      const setIcon = (ep: HTMLElement, playing: boolean) => {
        const b = ep.querySelector<HTMLElement>('.sf-play')
        if (b) b.textContent = playing ? '❚❚' : '▶'
      }
      const tick = () => {
        if (!audio || !curEp) return
        const bar = curEp.querySelector<HTMLElement>('.sf-track i')
        const lab = curEp.querySelector<HTMLElement>('.sf-time')
        if (bar && audio.duration) bar.style.width = (audio.currentTime / audio.duration) * 100 + '%'
        if (lab) lab.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration || 0)
      }
      const reset = (ep: HTMLElement) => {
        setIcon(ep, false)
        const bar = ep.querySelector<HTMLElement>('.sf-track i')
        if (bar) bar.style.width = '0%'
      }
      root.addEventListener('click', (e) => {
        const t = e.target as HTMLElement
        const ep = t.closest('.sf-ep') as HTMLElement | null
        if (!ep || !ep.dataset.audio) return
        const onTrack = !!t.closest('.sf-track')
        const onBtn = !!t.closest('.sf-play')
        if (!onTrack && !onBtn) return
        if (!audio) {
          audio = new Audio()
          audio.preload = 'metadata'
          audio.addEventListener('timeupdate', tick)
          audio.addEventListener('loadedmetadata', tick)
          audio.addEventListener('ended', () => {
            if (curEp) { reset(curEp); const lab = curEp.querySelector<HTMLElement>('.sf-time'); if (lab && audio) lab.textContent = '0:00 / ' + fmt(audio.duration || 0) }
          })
        }
        if (curEp && curEp !== ep) { audio.pause(); reset(curEp) }
        curEp = ep
        const src = ep.dataset.audio
        if (audio.getAttribute('src') !== src) { audio.src = src; audio.currentTime = 0 }
        const doSeek = () => {
          if (!onTrack || !audio || !audio.duration) return
          const r = (t.closest('.sf-track') as HTMLElement).getBoundingClientRect()
          const ratio = Math.min(1, Math.max(0, ((e as MouseEvent).clientX - r.left) / r.width))
          audio.currentTime = ratio * audio.duration
        }
        if (audio.paused) { doSeek(); audio.play().then(() => setIcon(ep, true)).catch(() => setIcon(ep, false)) }
        else { if (onTrack) doSeek(); else { audio.pause(); setIcon(ep, false) } }
      })
    }
    document.querySelectorAll('[data-podcast]').forEach(wirePlayer)

    renderPortal()
  })
})
