/* =====================================================
   BARDAĞI BUL — tek dosyalık bardak-top oyunu
   ===================================================== */

/* ---------- Skinler ---------- */
const CUP_SKINS = [
  {id:'red',    name:'Kırmızı Klasik', price:0,   css:'linear-gradient(180deg,#F0705C,#D94F3D 50%,#A93425)', rim:'#8E2A1D'},
  {id:'ice',    name:'Mavi Buz',       price:150, css:'linear-gradient(180deg,#9FD8F5,#4FA7D8 55%,#2C6E9E)', rim:'#1F5578'},
  {id:'gold',   name:'Altın',          price:400, css:'linear-gradient(180deg,#FBE08A,#F2C14E 50%,#C08A1E)', rim:'#8F6510'},
  {id:'neon',   name:'Neon',           price:600, css:'linear-gradient(180deg,#B9FF5C,#39E06A 55%,#0FA35A)', rim:'#0B7A42'},
  {id:'galaxy', name:'Galaksi',        price:900, css:'linear-gradient(160deg,#6D5BD0,#3B2E86 45%,#1B1440 90%)', rim:'#141032'}
];
const BALL_SKINS = [
  {id:'orange', name:'Turuncu Top',  price:0,   css:'radial-gradient(circle at 32% 28%,#FFC078,#F2812E 55%,#B4520E)'},
  {id:'soccer', name:'Futbol',       price:100, css:'radial-gradient(circle at 32% 28%,#fff,#d8d8d8 55%,#8a8a8a)'},
  {id:'disco',  name:'Disko',        price:300, css:'conic-gradient(#ff5c8a,#ffd25c,#5cff8a,#5cc8ff,#b45cff,#ff5c8a)'},
  {id:'emerald',name:'Zümrüt',       price:500, css:'radial-gradient(circle at 32% 28%,#8affc9,#20c97a 55%,#0a7a48)'},
  {id:'fire',   name:'Ateş',         price:800, css:'radial-gradient(circle at 32% 28%,#ffe38a,#ff8a3d 45%,#d0301a 80%)'}
];

/* ---------- Kalıcı kayıt (window.storage → localStorage → bellek) ---------- */
const memStore = {};
const store = {
  async get(k){
    try{ if(window.storage){ const r = await window.storage.get(k); return r ? r.value : null; } }catch(e){ return null; }
    try{ return window.localStorage.getItem(k); }catch(e){}
    return (k in memStore) ? memStore[k] : null;
  },
  async set(k,v){
    try{ if(window.storage){ await window.storage.set(k,v); return; } }catch(e){}
    try{ window.localStorage.setItem(k,v); return; }catch(e){}
    memStore[k]=v;
  }
};

/* ---------- Oyun durumu ---------- */
const S = {
  coins:0, bestLevel:0, bestEndless:0,
  ownedCups:['red'], ownedBalls:['orange'],
  cupSkin:'red', ballSkin:'orange',
  lastDaily:'', muted:false
};
async function saveState(){ await store.set('bardagibul-save', JSON.stringify(S)); }
async function loadState(){
  const raw = await store.get('bardagibul-save');
  if(raw){ try{ Object.assign(S, JSON.parse(raw)); }catch(e){} }
}

/* ---------- Ses ---------- */
let audioCtx=null;
function beep(freq,dur=0.09,type='sine',vol=0.16){
  if(S.muted) return;
  try{
    audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    const o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.type=type;o.frequency.value=freq;g.gain.value=vol;
    g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+dur);
    o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+dur);
  }catch(e){}
}
const sndSwap=()=>beep(300+Math.random()*120,0.05,'triangle',0.07);
const sndWin =()=>{beep(660,.12);setTimeout(()=>beep(880,.14),110);setTimeout(()=>beep(1100,.2),240);};
const sndLose=()=>{beep(220,.2,'sawtooth',0.12);setTimeout(()=>beep(150,.3,'sawtooth',0.12),180);};
const sndCoin=()=>beep(1200,.08,'square',0.08);

/* ---------- Yardımcılar ---------- */
const $=id=>document.getElementById(id);
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const easeInOut=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
const rand=n=>Math.floor(Math.random()*n);

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  $(id).classList.add('active');
  $('topbar').classList.toggle('show', id==='screen-game');
}
function modal(id,show=true){ $(id).classList.toggle('show',show); }
function msgModal(emoji,title,body){
  $('msg-emoji').textContent=emoji; $('msg-title').textContent=title; $('msg-body').textContent=body;
  modal('modal-msg');
}
function floatCoin(text,x,y){
  const d=document.createElement('div');d.className='coin-float';d.textContent=text;
  d.style.left=x+'px';d.style.top=y+'px';document.body.appendChild(d);
  setTimeout(()=>d.remove(),1200);
}
function confetti(){
  const colors=['#F2C14E','#D94F3D','#4FA7D8','#39E06A','#B45CFF'];
  for(let i=0;i<28;i++){
    const c=document.createElement('div');c.className='confetti';
    c.style.left=Math.random()*100+'vw';
    c.style.background=colors[rand(colors.length)];
    c.style.animationDuration=(0.9+Math.random()*0.9)+'s';
    c.style.borderRadius=Math.random()>.5?'50%':'2px';
    document.body.appendChild(c);setTimeout(()=>c.remove(),2000);
  }
}

/* ---------- Oyun değişkenleri ---------- */
let mode='classic';       // classic | endless
let level=1, lives=3, roundCoins=0, adUsedThisRun=false;
let cups=[], ballCup=null, guessing=false, hintUsedThisRound=false, busy=false;

function levelSettings(lv){
  return {
    cupCount: Math.min(3 + Math.floor((lv-1)/3), 7),
    swaps:    Math.min(6 + lv*2, 34),
    dur:      Math.max(430 - lv*20, 120),
    feints:   lv>=4,
    colors:   lv>=6,
    invis:    lv>=8
  };
}
const rewardFor=lv=>10+lv*5;

function updateHUD(){
  $('coins-label').textContent=S.coins;
  $('lives-pill').innerHTML='❤️'.repeat(lives)+'<span style="opacity:.25">'+'❤️'.repeat(Math.max(0,3-lives))+'</span>';
  const set=levelSettings(level);
  const extras=[];
  if(set.feints)extras.push('sahte hamle');
  if(set.colors)extras.push('renk değişimi');
  if(set.invis)extras.push('görünmezlik');
  $('level-info').textContent=(mode==='endless'?'♾️ Sonsuz • Tur ':'Seviye ')+level+' • '+set.cupCount+' bardak'+(extras.length?' • ⚠️ '+extras.join(', '):'');
}

/* ---------- Bardak oluşturma / konumlama ---------- */
function buildCups(count){
  const table=$('table');
  cups.forEach(c=>c.el.remove()); cups=[];
  const W=table.clientWidth;
  const gap=10;
  const cw=Math.min(Math.floor((W-20)/count)-gap, 108);
  const ch=Math.round(cw*1.18);
  const totalW=count*cw+(count-1)*gap;
  const startX=(W-totalW)/2;
  const skin=CUP_SKINS.find(s=>s.id===S.cupSkin)||CUP_SKINS[0];
  for(let i=0;i<count;i++){
    const el=document.createElement('div');
    el.className='cup';
    el.style.width=cw+'px';el.style.height=ch+'px';
    el.innerHTML='<div class="body" style="background:'+skin.css+'"></div><div class="rim" style="background:'+skin.rim+'"></div>';
    table.appendChild(el);
    const cup={el, x:startX+i*(cw+gap), slot:i, w:cw, h:ch};
    setCupPos(cup,0);
    el.addEventListener('pointerdown',()=>onCupTap(cup));
    cups.push(cup);
  }
  const ball=$('ball');
  const bs=BALL_SKINS.find(s=>s.id===S.ballSkin)||BALL_SKINS[0];
  ball.style.background=bs.css;
}
function setCupPos(cup,y,scale=1){
  cup.el.style.transform='translate('+cup.x+'px,'+y+'px) scale('+scale+')';
}
function placeBallAt(cup){
  const ball=$('ball');
  ball.style.left=(cup.x+cup.w/2-19)+'px';
  ball.style.display='block';
}
function hideBall(){ $('ball').style.display='none'; }

/* ---------- Animasyonlar ---------- */
function liftCup(cup,up=true,dur=320){
  return new Promise(res=>{
    const t0=performance.now();
    function step(t){
      let p=Math.min((t-t0)/dur,1);const e=easeInOut(p);
      const y=up? -85*e : -85*(1-e);
      setCupPos(cup,y);
      if(p<1)requestAnimationFrame(step);else res();
    }
    requestAnimationFrame(step);
  });
}
function swapCups(a,b,dur,feint=false){
  return new Promise(res=>{
    const xa=a.x,xb=b.x,t0=performance.now();
    a.el.style.zIndex=6;b.el.style.zIndex=2;
    sndSwap();
    function step(t){
      let p=Math.min((t-t0)/dur,1);
      let e=easeInOut(p);
      if(feint){ e = e<.5 ? e : (1-e); }      // yarıya kadar gidip geri dön
      const arc=Math.sin(p*Math.PI);
      a.x=xa+(xb-xa)*e; b.x=xb+(xa-xb)*e;
      setCupPos(a,-26*arc,1.04); setCupPos(b,16*arc,0.97);
      if(p<1){requestAnimationFrame(step);}
      else{
        if(!feint){ [a.slot,b.slot]=[b.slot,a.slot]; }
        else { a.x=xa; b.x=xb; }
        setCupPos(a,0);setCupPos(b,0);
        res();
      }
    }
    requestAnimationFrame(step);
  });
}
function randomHue(cup){
  cup.el.style.filter='hue-rotate('+rand(360)+'deg)';
}
function clearFx(){
  cups.forEach(c=>{c.el.style.filter='';c.el.classList.remove('ghost','hintglow','liftable');});
}

/* ---------- Tur akışı ---------- */
async function startRound(){
  busy=true; guessing=false; hintUsedThisRound=false;
  updateHUD();
  const set=levelSettings(level);
  buildCups(set.cupCount);
  ballCup=cups[rand(cups.length)];
  $('status-msg').textContent='👀 Topu izle!';
  $('btn-hint').disabled=true;

  await wait(500);
  placeBallAt(ballCup);
  await liftCup(ballCup,true);
  await wait(650);
  await liftCup(ballCup,false);
  hideBall();
  await wait(280);

  $('status-msg').textContent='🔀 Karışıyor…';
  for(let k=0;k<set.swaps;k++){
    let i=rand(cups.length), j=rand(cups.length);
    while(j===i) j=rand(cups.length);
    const feint = set.feints && Math.random()<0.18;
    if(set.invis && Math.random()<0.25){
      cups[i].el.classList.add('ghost');cups[j].el.classList.add('ghost');
    }
    if(set.colors && Math.random()<0.3){ randomHue(cups[rand(cups.length)]); }
    await swapCups(cups[i],cups[j],set.dur,feint);
    cups[i].el.classList.remove('ghost');cups[j].el.classList.remove('ghost');
  }
  cups.forEach(c=>c.el.style.filter='');

  $('status-msg').textContent='❓ Top nerede?';
  cups.forEach(c=>c.el.classList.add('liftable'));
  $('btn-hint').disabled = S.coins<30;
  guessing=true; busy=false;
}

async function onCupTap(cup){
  if(!guessing||busy)return;
  guessing=false;busy=true;
  $('btn-hint').disabled=true;
  clearFx();

  if(cup===ballCup){
    placeBallAt(cup);
    await liftCup(cup,true);
    const reward=rewardFor(level);
    S.coins+=reward;
    if(mode==='classic') S.bestLevel=Math.max(S.bestLevel,level);
    else S.bestEndless=Math.max(S.bestEndless,level);
    await saveState();
    sndWin();confetti();sndCoin();
    const r=cup.el.getBoundingClientRect();
    floatCoin('+'+reward+' 🪙', r.left+r.width/2-30, r.top-10);
    $('status-msg').textContent='🎉 Doğru! +'+reward+' 🪙';
    updateHUD();
    await wait(1300);
    level++;
    startRound();
  }else{
    await liftCup(cup,true);          // boş bardak
    sndLose();
    $('status-msg').textContent='😵 Yanlış bardak!';
    await wait(500);
    placeBallAt(ballCup);
    await liftCup(ballCup,true);      // doğrusunu göster
    lives--;
    updateHUD();
    await wait(1100);
    if(lives<=0){ gameOver(); }
    else{
      await liftCup(cup,false);
      await liftCup(ballCup,false);
      hideBall();
      startRound();
    }
  }
}

function gameOver(){
  busy=false;
  const label = mode==='endless' ? 'Sonsuz modda '+(level-1)+' tur dayandın!' : 'Seviye '+level+"'e ulaştın!";
  $('gameover-stats').innerHTML=label+'<br>Toplam altın: '+S.coins+' 🪙';
  $('btn-ad-revive').style.display = adUsedThisRun ? 'none' : 'inline-block';
  modal('modal-gameover');
}

function startGame(m){
  mode=m; level=1; lives=3; adUsedThisRun=false;
  showScreen('screen-game');
  startRound();
}

/* ---------- İpucu ---------- */
$('btn-hint').addEventListener('click',async ()=>{
  if(!guessing||S.coins<30||hintUsedThisRound)return;
  S.coins-=30;hintUsedThisRound=true;await saveState();
  updateHUD();
  $('btn-hint').disabled=true;
  ballCup.el.classList.add('hintglow');
  await wait(900);
  ballCup.el.classList.remove('hintglow');
});

/* ---------- Reklam simülasyonu ---------- */
function playAd(){
  return new Promise(res=>{
    modal('modal-ad');
    let n=5;$('ad-count').textContent=n;
    const iv=setInterval(()=>{
      n--;$('ad-count').textContent=n;
      if(n<=0){clearInterval(iv);modal('modal-ad',false);res();}
    },1000);
  });
}
$('btn-ad-revive').addEventListener('click',async ()=>{
  modal('modal-gameover',false);
  await playAd();
  adUsedThisRun=true; lives=1;
  updateHUD();
  msgModal('❤️','Can kazandın!','+1 can ile devam ediyorsun. Bol şans!');
  startRound();
});

/* ---------- Günlük ödül ---------- */
function todayStr(){ const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
async function checkDaily(){
  if(S.lastDaily!==todayStr()) modal('modal-daily');
}
$('btn-claim-daily').addEventListener('click',async ()=>{
  S.lastDaily=todayStr(); S.coins+=100; await saveState();
  modal('modal-daily',false); sndCoin();
  refreshMenu();
  floatCoin('+100 🪙', window.innerWidth/2-40, window.innerHeight/2);
});

/* ---------- Market ---------- */
let shopTab='cup';
function renderShop(){
  const grid=$('shop-grid');grid.innerHTML='';
  const list = shopTab==='cup'?CUP_SKINS:BALL_SKINS;
  const owned = shopTab==='cup'?S.ownedCups:S.ownedBalls;
  const selected = shopTab==='cup'?S.cupSkin:S.ballSkin;
  list.forEach(sk=>{
    const card=document.createElement('div');
    card.className='skin-card'+(selected===sk.id?' selected':'');
    const prev = shopTab==='cup'
      ? '<div class="skin-preview-cup" style="background:'+sk.css+'"></div>'
      : '<div class="skin-preview-ball" style="background:'+sk.css+'"></div>';
    const isOwned=owned.includes(sk.id);
    let btn;
    if(selected===sk.id) btn='<button class="btn skin-btn" disabled>✔ Seçili</button>';
    else if(isOwned) btn='<button class="btn skin-btn secondary" data-act="select" data-id="'+sk.id+'">Seç</button>';
    else btn='<button class="btn skin-btn" data-act="buy" data-id="'+sk.id+'">'+sk.price+' 🪙</button>';
    card.innerHTML=prev+'<div class="skin-name">'+sk.name+'</div>'+btn;
    grid.appendChild(card);
  });
}
$('shop-grid').addEventListener('click',async e=>{
  const b=e.target.closest('button[data-act]');if(!b)return;
  const id=b.dataset.id, act=b.dataset.act;
  const list = shopTab==='cup'?CUP_SKINS:BALL_SKINS;
  const sk=list.find(s=>s.id===id);
  if(act==='buy'){
    if(S.coins<sk.price){ msgModal('🪙','Yetersiz altın','Bu skin için '+sk.price+' altın gerekiyor. Oyna ve kazan!'); return; }
    S.coins-=sk.price;
    (shopTab==='cup'?S.ownedCups:S.ownedBalls).push(id);
    sndCoin();
  }
  if(shopTab==='cup') S.cupSkin=id; else S.ballSkin=id;
  await saveState();refreshMenu();renderShop();
});
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');shopTab=t.dataset.tab;renderShop();
}));

/* ---------- Menü / navigasyon ---------- */
function refreshMenu(){
  $('menu-coins').textContent=S.coins;
  $('best-level').textContent=S.bestLevel||'–';
  $('best-endless').textContent=S.bestEndless||'–';
}
$('btn-classic').addEventListener('click',()=>startGame('classic'));
$('btn-endless').addEventListener('click',()=>startGame('endless'));
$('btn-shop').addEventListener('click',()=>{showScreen('screen-shop');renderShop();});
$('btn-shop-back').addEventListener('click',()=>{refreshMenu();showScreen('screen-menu');});
$('btn-quit').addEventListener('click',()=>{busy=false;guessing=false;refreshMenu();showScreen('screen-menu');});
$('btn-retry').addEventListener('click',()=>{modal('modal-gameover',false);startGame(mode);});
$('btn-go-menu').addEventListener('click',()=>{modal('modal-gameover',false);refreshMenu();showScreen('screen-menu');});
$('btn-msg-ok').addEventListener('click',()=>modal('modal-msg',false));
$('mute-btn').addEventListener('click',async ()=>{
  S.muted=!S.muted;$('mute-btn').textContent=S.muted?'🔇':'🔊';await saveState();
});

/* ---------- Başlat ---------- */
(async function init(){
  await loadState();
  $('mute-btn').textContent=S.muted?'🔇':'🔊';
  refreshMenu();
  checkDaily();
})();
