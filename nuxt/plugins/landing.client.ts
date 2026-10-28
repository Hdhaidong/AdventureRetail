// 官网行为层：双语切换 / 客户专区 / 注册验证 / 咨询与报告提交
// 迁移自静态版 legacy 脚本；注册、咨询、报告三个动作已接入 server API（打通业务平台）
export default defineNuxtPlugin((nuxtApp) => {
  const LS = 'ar_client'
  const LANG_KEY = 'ar_lang'
  let lang = 'zh'
  let pendingClient: any = null
  let pendingPlatform: string | null = null

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

  // ---- ROI 计算器（滑杆单位 $100K → ×1e5）----
  const fmtM = (v: number) => {
    if (v < 1e6) return '$' + Math.round(v / 1e3) + 'K'
    const m = v / 1e6
    const s = m.toFixed(1)
    return '$' + (s.endsWith('.0') && m >= 10 ? s.slice(0, -2) : s) + 'M'
  }
  const calcRoi = () => {
    const rev = parseFloat($('roiRev')?.value || '120') * 1e5
    const mar = parseFloat($('roiMar')?.value || '14') / 100
    const rOut = $('roiRevOut'), mOut = $('roiMarOut')
    if (rOut) rOut.textContent = fmtM(rev)
    if (mOut) mOut.textContent = Math.round(mar * 100) + '%'
    const mAdj = Math.max(.5, Math.min(2, mar / .14))
    const span = (id: string, lo: number, hi: number) => {
      const el = $(id); if (el) el.textContent = fmtM(lo) + ' – ' + fmtM(hi)
    }
    span('roiA', rev * .085 * mAdj, rev * .137 * mAdj)
    span('roiB', rev * .045, rev * .065)
    span('roiC', rev * .18, rev * .28)
    const pts = Math.round(.085 * mAdj * 1000) / 10
    const a2 = $('roiA2')
    if (a2) a2.textContent = lang === 'zh' ? '利润率扩张 +' + pts + 'pt 起' : 'margin expansion +' + pts + 'pt floor'
  }

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
      ? 'Adventure Retail · 库存变现 × 品牌兑现 × 渠道加速'
      : 'Adventure Retail · Inventory, Brands & Channel Acceleration'
    calcRoi()
    if (!silent) toast(l === 'zh' ? '已切换为中文' : 'Switched to English')
  }

  // ---- 注册弹窗 ----
  const openReg = () => { $('regModal')?.classList.add('open'); backToStep1() }
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
    pendingClient = { name, mail, co, typeZh: type?.dataset.zh, typeEn: type?.dataset.en }
    try {
      const r: any = await $fetch('/api/register/send-code', {
        method: 'POST',
        body: { name, email: mail, company: co, type: type?.dataset.en || '' }
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
        body: { name: pendingClient.name, email: pendingClient.mail, company: pendingClient.co, type: pendingClient.typeEn || '' }
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
      if (pendingPlatform) {
        const p = pendingPlatform; pendingPlatform = null
        prefillPlatformConsult(p)
      }
      $('portal')?.scrollIntoView({ behavior: 'smooth' })
    } catch {
      toast(lang === 'zh' ? '验证失败，请稍后重试' : 'Verify failed, please try again')
    }
  }

  // ---- 客户专区 ----
  const showPane = (p: string) => {
    $('pane-consult')?.classList.toggle('on', p === 'consult')
    $('pane-insight')?.classList.toggle('on', p === 'insight')
    $('tabConsult')?.classList.toggle('on', p === 'consult')
    $('tabInsight')?.classList.toggle('on', p === 'insight')
  }

  // ---- 平台卡 CTA：带产品上下文进咨询 ----
  const prefillPlatformConsult = (p: string) => {
    showPane('consult')
    const ta = $('consultMsg')
    if (ta && !ta.value.trim()) {
      ta.value = lang === 'zh' ? `我想了解 Sell on ${p} 这款产品：` : `I'd like to know more about Sell on ${p}: `
    }
    $('portal')?.scrollIntoView({ behavior: 'smooth' })
  }

  const pickPlatform = (p: string) => {
    if (!getClient()) {
      pendingPlatform = p
      openReg()
      toast(lang === 'zh' ? `注册验证后即可咨询 Sell on ${p}` : `Register & verify to ask about Sell on ${p}`, true)
      return
    }
    prefillPlatformConsult(p)
  }

  const sendConsult = async () => {
    const c = getClient(); if (!c) return
    const topic = document.querySelector('#topicRow .topic.on') as any
    const topicLabel = lang === 'zh' ? topic?.dataset.t : topic?.dataset.en
    const msg = $('consultMsg')?.value.trim()
    try {
      await $fetch('/api/consult', {
        method: 'POST',
        body: { name: c.name, email: c.mail, company: c.co, type: c.typeEn, topic: topicLabel, message: msg }
      })
      if ($('consultMsg')) $('consultMsg').value = ''
      toast(lang === 'zh' ? '咨询已提交，48 小时内回复' : 'Inquiry sent — we reply within 48 hours', true)
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

  // 暴露给 raw HTML 的 inline onclick
  Object.assign(window as any, {
    setLang, openReg, closeReg, backToStep1, sendCode, resendCode, verifyCode,
    showPane, sendConsult, sendReport, logout, pickPlatform
  })

  nuxtApp.hook('app:mounted', () => {
    // 恢复语言偏好
    let saved = 'zh'
    try { saved = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'zh' } catch {}
    setLang(saved, true)

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

    // Solutions 支柱 tabs
    document.querySelectorAll('.caps .tab').forEach((b: any) => b.addEventListener('click', () => {
      const idx = b.dataset.panel
      b.parentElement.querySelectorAll('.tab').forEach((x: any) => {
        x.classList.toggle('on', x === b)
        x.setAttribute('aria-selected', x === b ? 'true' : 'false')
      })
      b.closest('.caps')?.querySelectorAll('.panel').forEach((p: any, i: number) => p.classList.toggle('active', String(i) === idx))
    }))

    // ROI 计算器滑杆（初始值已由 setLang → calcRoi 计算）
    $('roiRev')?.addEventListener('input', calcRoi)
    $('roiMar')?.addEventListener('input', calcRoi)

    // 品牌墙无缝滚动
    const t = $('wallTrack')
    if (t) t.innerHTML += t.innerHTML

    // 导航滚动态
    const nav = $('nav')
    if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), { passive: true })

    // reveal 动效
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    renderPortal()
  })
})
