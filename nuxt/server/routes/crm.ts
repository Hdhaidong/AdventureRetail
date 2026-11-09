// CRM 管理台（站点所有者用）：访问 /crm 查看全部线索并推进阶段
// 配置 runtimeConfig.crmAdminToken 后需输入密钥；未配置时直接可用（仅限可信环境）
const STAGES = [
  { v: 'lead', zh: '线索', en: 'Lead' },
  { v: 'assess', zh: '评估', en: 'Assess' },
  { v: 'pilot', zh: '试点', en: 'Pilot' },
  { v: 'scale', zh: '放大', en: 'Scale' }
]

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/html; charset=utf-8')
  const SEL = STAGES.map(s => `<option value="${s.v}">${s.zh} ${s.en}</option>`).join('')
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Adventure Retail · CRM</title>
<meta name="robots" content="noindex,nofollow">
<style>
  :root{--bg:#06070C;--bg2:#0A0C13;--line:rgba(255,255,255,.08);--txt:#F3F5F9;--sub:#A8B0BF;--dim:#667085;--orange:#F97316;--ok:#34D399}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--txt);font:14px/1.6 'Space Grotesk','Noto Sans SC',system-ui,sans-serif}
  .wrap{max-width:1100px;margin:0 auto;padding:40px 20px}
  h1{font-size:19px;letter-spacing:.04em;margin:0 0 4px}p.tip{margin:0 0 22px;color:var(--dim);font-size:12.5px}
  .bar{display:flex;gap:10px;margin-bottom:18px}
  input,select,button{background:var(--bg2);border:1px solid var(--line);color:var(--txt);border-radius:8px;padding:8px 12px;font:inherit}
  button{cursor:pointer}button.p{background:var(--orange);border-color:var(--orange);color:#fff}
  table{width:100%;border-collapse:collapse}
  th,td{text-align:left;padding:10px 10px;border-bottom:1px solid var(--line);font-size:13px;vertical-align:top}
  th{color:var(--dim);font-weight:600;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
  .id{font-family:ui-monospace,monospace;font-size:12px;color:var(--orange)}
  .msg{color:var(--sub);max-width:340px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
  .tl{color:var(--dim);font-size:11.5px;margin-top:4px}
  .st-lead{color:var(--sub)}.st-assess{color:var(--orange)}.st-pilot{color:#60A5FA}.st-scale{color:var(--ok)}
  .empty{color:var(--dim);padding:30px 0;text-align:center}
</style>
</head>
<body><div class="wrap">
  <h1>Adventure Retail · CRM 管理台</h1>
  <p class="tip">全部线索实时读取自站点存储；推进阶段后客户专区「CRM」页签同步可见。</p>
  <div class="bar">
    <input id="key" placeholder="管理密钥（已配置 crmAdminToken 时必填）" size="34">
    <button class="p" onclick="load()">加载线索</button>
    <span id="count" style="align-self:center;color:var(--dim);font-size:12.5px"></span>
  </div>
  <table><thead><tr><th>线索</th><th>客户</th><th>需求</th><th>阶段 / 推进</th><th>时间线</th></tr></thead><tbody id="rows"></tbody></table>
  <div class="empty" id="empty">尚无线索 —— 在官网提交业务咨询后，这里会出现第一条。</div>
</div>
<script>
  const STAGE = { lead:'线索', assess:'评估', pilot:'试点', scale:'放大' };
  const DAYS = ts => { const d = Math.floor((Date.now()-ts)/864e5); return d<=0 ? '今天' : 'D+'+d; };
  const esc = s => String(s||'').replace(/[&<>"']/g, m => ({'&':'&','<':'<','>':'>','"':'"',"'":'&#39;'}[m]));
  const key = () => sessionStorage.getItem('crmKey') || '';
  const hdr = () => ({ 'content-type':'application/json', 'x-crm-key': key() });
  async function load(){
    sessionStorage.setItem('crmKey', document.getElementById('key').value.trim());
    const r = await fetch('/api/crm/leads', { headers: hdr() });
    if (r.status === 401) { document.getElementById('count').textContent = '密钥不正确'; return }
    const d = await r.json();
    const leads = d.leads || [];
    document.getElementById('count').textContent = '共 ' + leads.length + ' 条';
    document.getElementById('empty').style.display = leads.length ? 'none' : '';
    document.getElementById('rows').innerHTML = leads.map(l => {
      const tl = (l.timeline||[]).slice(-3).map(e => STAGE[e.stage] + ' · ' + DAYS(e.ts) + (e.note ? '（' + esc(e.note) + '）' : '')).join('<br>');
      return '<tr>' +
        '<td><span class="id">' + esc(l.id) + '</span><br><span style="color:var(--dim);font-size:11.5px">' + new Date(l.createdAt).toLocaleString('zh-CN') + '</span></td>' +
        '<td>' + esc(l.name) + '<br><span class="msg" style="font-size:12px">' + esc(l.email) + (l.company ? ' · ' + esc(l.company) : '') + '</span></td>' +
        '<td><div class="msg">' + esc(l.type ? '[' + l.type + '] ' : '') + esc(l.topic || l.message) + '</div><div class="msg tl">' + esc(l.message) + '</div></td>' +
        '<td><span class="st-' + esc(l.stage) + '">' + (STAGE[l.stage]||l.stage) + '</span><br><select data-id="' + esc(l.id) + '">' + '${SEL}' + '</select><br>' +
          '<button data-id="' + esc(l.id) + '" onclick="apply(this)">推进</button></td>' +
        '<td class="tl">' + tl + '</td></tr>';
    }).join('');
    document.querySelectorAll('select[data-id]').forEach(s => {
      const l = leads.find(x => x.id === s.dataset.id);
      if (l) s.value = l.stage;
    });
  }
  async function apply(btn){
    const id = btn.dataset.id;
    const sel = document.querySelector('select[data-id="' + id + '"]');
    const r = await fetch('/api/crm/stage', { method:'POST', headers: hdr(), body: JSON.stringify({ id, stage: sel.value }) });
    if (!r.ok) { alert('推进失败：' + r.status); return }
    load();
  }
</script>
</body></html>`
})
