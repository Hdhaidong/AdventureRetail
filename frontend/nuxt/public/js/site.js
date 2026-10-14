// ---- language toggle ----
let lang='zh';
function setLang(l){
  lang=l;
  document.documentElement.lang = l==='zh'?'zh-CN':'en';
  document.getElementById('btnZh').classList.toggle('on',l==='zh');
  document.getElementById('btnEn').classList.toggle('on',l==='en');
  document.querySelectorAll('[data-zh]').forEach(el=>{
    const v = l==='zh'?el.dataset.zh:el.dataset.en;
    if(v===undefined)return;
    el.innerHTML=v;
  });
  document.querySelectorAll('[data-zh-placeholder]').forEach(el=>{const v=l==='zh'?el.dataset.zhPlaceholder:(el.dataset.enPlaceholder||el.dataset.zhPlaceholder);if(v!==undefined)el.placeholder=v;});
  renderPortal();
  document.title = l==='zh'?'Adventure Retail · 从工厂车间到全球货架':'Adventure Retail · From Factory Floor to Global Shelves';
  toast(l==='zh'?'已切换为中文':'Switched to English');
}
function toast(msg){
  const t=document.getElementById('toast');t.textContent=msg;
  t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';
  clearTimeout(t._tm);t._tm=setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(80px)';},1600);
}
// ---- client portal ----
const LS='ar_client';
function getClient(){try{return JSON.parse(localStorage.getItem(LS))}catch(e){return null}}
function openReg(){document.getElementById('regModal').classList.add('open')}
function closeReg(){document.getElementById('regModal').classList.remove('open')}
document.getElementById('typeRow').addEventListener('click',e=>{
  const b=e.target.closest('.ttype');if(!b)return;
  document.querySelectorAll('#typeRow .ttype').forEach(x=>x.classList.remove('on'));b.classList.add('on');
});
document.getElementById('topicRow').addEventListener('click',e=>{
  const b=e.target.closest('.topic');if(!b)return;
  document.querySelectorAll('#topicRow .topic').forEach(x=>x.classList.remove('on'));b.classList.add('on');
});
function submitReg(){
  const name=document.getElementById('regName').value.trim();
  const mail=document.getElementById('regMail').value.trim();
  const co=document.getElementById('regCo').value.trim();
  const type=document.querySelector('#typeRow .ttype.on');
  if(!name||!mail||!co){toast(lang==='zh'?'请填写称呼、邮箱与公司':'Name, email and company required');return}
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)){toast(lang==='zh'?'邮箱格式不正确':'Invalid email address');return}
  localStorage.setItem(LS,JSON.stringify({name,mail,co,typeZh:type.dataset.zh,typeEn:type.dataset.en,ts:Date.now()}));
  closeReg();renderPortal();
  toast(lang==='zh'?'注册成功，已进入客户专区':'Registered — welcome to the portal');
  document.getElementById('portal').scrollIntoView({behavior:'smooth'});
}
function renderPortal(){
  const c=getClient();
  const locked=document.getElementById('portalLocked'),open=document.getElementById('portalOpen');
  if(!locked||!open)return;
  if(!c){locked.style.display='';open.style.display='none';return}
  locked.style.display='none';open.style.display='';
  const t=lang==='zh'?c.typeZh:c.typeEn;
  document.getElementById('portalWho').innerHTML=(lang==='zh'?'已登录：':'Signed in: ')+'<b>'+c.name+'</b> · '+t+' · '+c.co;
  document.getElementById('consultWho').innerHTML=(lang==='zh'?'咨询将以 <b>'+c.mail+'</b> 为回复邮箱发出，48 小时内回复。':'We reply to <b>'+c.mail+'</b> within 48 hours.');
}
function showPane(p){
  document.getElementById('pane-consult').classList.toggle('on',p==='consult');
  document.getElementById('pane-insight').classList.toggle('on',p==='insight');
  document.getElementById('tabConsult').classList.toggle('on',p==='consult');
  document.getElementById('tabInsight').classList.toggle('on',p==='insight');
}
function sendConsult(){
  const c=getClient();if(!c)return;
  const topic=document.querySelector('#topicRow .topic.on');
  const topicLabel=lang==='zh'?topic.dataset.t:topic.dataset.en;
  const msg=document.getElementById('consultMsg').value.trim();
  const subject=encodeURIComponent('['+topicLabel+'] '+c.co+' — '+(lang==='zh'?'官网业务咨询':'Website inquiry'));
  const body=encodeURIComponent((lang==='zh'?'称呼: ':'Name: ')+c.name+'\n'+(lang==='zh'?'公司: ':'Company: ')+c.co+'\n'+(lang==='zh'?'类型: ':'Type: ')+(lang==='zh'?c.typeZh:c.typeEn)+'\n'+(lang==='zh'?'邮箱: ':'Email: ')+c.mail+'\n'+(lang==='zh'?'主题: ':'Topic: ')+topicLabel+'\n\n'+msg);
  location.href='mailto:Info@adventureretail.com?subject='+subject+'&body='+body;
}
function logout(){localStorage.removeItem(LS);renderPortal();toast(lang==='zh'?'已退出登录':'Signed out')}
renderPortal();
// ---- nav scroll ----
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
// ---- reveal on scroll ----
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
