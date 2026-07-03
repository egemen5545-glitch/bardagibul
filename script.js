/* =====================================================
   TOP BULMACA — v16 haftalık görevler, tam ekran ve marka sistemi
   ===================================================== */

/* ---------- Skinler ---------- */
const CUP_SKINS = [
  {id:'red', name:'Kırmızı Klasik', price:0, tier:'common', tag:'Başlangıç', css:'linear-gradient(180deg,#F0705C,#D94F3D 50%,#A93425)', rim:'#8E2A1D'},
  {id:'ice', name:'Buz Mavisi', price:650, tier:'common', tag:'Temel', css:'linear-gradient(180deg,#BCEBFF,#59BDEB 55%,#276D9E)', rim:'#1F5578'},
  {id:'mint', name:'Nane Yeşili', price:780, tier:'common', tag:'Temel', css:'linear-gradient(180deg,#B9FFD6,#4EE28C 55%,#188753)', rim:'#0D633B'},
  {id:'sport-blue', name:'Tribün Mavisi', price:980, tier:'common', tag:'Spor', css:'linear-gradient(180deg,#7FD3FF,#248DDB 52%,#13558C)', rim:'#0E3D67'},
  {id:'court', name:'Kort Yeşili', price:1150, tier:'common', tag:'Spor', css:'linear-gradient(180deg,#C8FF6A,#74D43F 55%,#2F8423)', rim:'#1F6119'},

  {id:'flag-tr', name:'Türkiye Renkleri', price:1450, tier:'rare', tag:'Bayrak', perk:{type:'coinBoost', value:2}, css:'linear-gradient(90deg,#e30a17 0 42%,#fff 42% 58%,#e30a17 58% 100%)', rim:'#8f1014'},
  {id:'flag-de', name:'Almanya Renkleri', price:1550, tier:'rare', tag:'Bayrak', perk:{type:'slowStart', value:1.10}, css:'linear-gradient(180deg,#151515 0 33%,#dd0000 33% 66%,#ffce00 66% 100%)', rim:'#1b1b1b'},
  {id:'flag-fr', name:'Fransa Renkleri', price:1650, tier:'rare', tag:'Bayrak', perk:{type:'focus', value:200}, css:'linear-gradient(90deg,#0055a4 0 33%,#fff 33% 66%,#ef4135 66% 100%)', rim:'#123b72'},
  {id:'flag-it', name:'İtalya Renkleri', price:1750, tier:'rare', tag:'Bayrak', perk:{type:'steadyCup', value:.88}, css:'linear-gradient(90deg,#009246 0 33%,#fff 33% 66%,#ce2b37 66% 100%)', rim:'#12613a'},
  {id:'besiktas', name:'Beşiktaş Siyah Beyaz', price:1900, tier:'rare', tag:'Takım', perk:{type:'steadyCup', value:.88}, css:'linear-gradient(90deg,#111 0 28%,#fff 28% 58%,#d71920 58% 70%,#111 70% 100%)', rim:'#0a0a0a'},
  {id:'samsunspor', name:'Samsunspor Kırmızı', price:2100, tier:'rare', tag:'Takım', perk:{type:'focus', value:200}, css:'linear-gradient(135deg,#d71920 0 48%,#fff 48% 56%,#d71920 56% 100%)', rim:'#8f1116'},
  {id:'neon', name:'Neon Yeşil', price:2300, tier:'rare', tag:'Gece', perk:{type:'coinBoost', value:2}, css:'linear-gradient(180deg,#B9FF5C,#39E06A 55%,#0FA35A)', rim:'#0B7A42'},
  {id:'cherry', name:'Vişne Kırmızısı', price:2450, tier:'rare', tag:'Zor Bölge', perk:{type:'focus', value:200}, css:'linear-gradient(180deg,#FF8A8A,#D63749 52%,#8D1725)', rim:'#65101A'},

  {id:'flag-br', name:'Brezilya Renkleri', price:2850, tier:'epic', tag:'Bayrak', perk:{type:'coinBoost', value:2}, css:'radial-gradient(circle at 50% 46%,#1d4ed8 0 18%,transparent 19%),linear-gradient(135deg,transparent 28%,#ffdf00 29% 49%,transparent 50%),linear-gradient(45deg,transparent 28%,#ffdf00 29% 49%,transparent 50%),linear-gradient(180deg,#009b3a,#057a35)', rim:'#075c2c'},
  {id:'flag-jp', name:'Japonya Renkleri', price:3050, tier:'epic', tag:'Bayrak', perk:{type:'xray', value:280}, css:'radial-gradient(circle at 50% 43%,#bc002d 0 24%,transparent 25%),linear-gradient(180deg,#f8f8f8,#e8e8e8)', rim:'#bdbdbd'},
  {id:'flag-us', name:'ABD Renkleri', price:3250, tier:'epic', tag:'Bayrak', perk:{type:'slowStart', value:1.10}, css:'linear-gradient(180deg,#b22234 0 12%,#fff 12% 24%,#b22234 24% 36%,#fff 36% 48%,#b22234 48% 60%,#fff 60% 72%,#b22234 72% 84%,#fff 84% 100%)', rim:'#26335b'},
  {id:'galatasaray', name:'Galatasaray Sarı Kırmızı', price:3450, tier:'epic', tag:'Takım', perk:{type:'coinBoost', value:2}, css:'linear-gradient(90deg,#a90432 0 50%,#fdb912 50% 100%)', rim:'#7f0826'},
  {id:'fenerbahce', name:'Fenerbahçe Lacivert Sarı', price:3650, tier:'epic', tag:'Takım', perk:{type:'focus', value:200}, css:'linear-gradient(90deg,#002b5c 0 25%,#f7d117 25% 50%,#002b5c 50% 75%,#f7d117 75% 100%)', rim:'#001b3f'},
  {id:'trabzonspor', name:'Trabzonspor Bordo Mavi', price:3850, tier:'epic', tag:'Takım', perk:{type:'slowStart', value:1.10}, css:'linear-gradient(135deg,#6f1d46 0 50%,#41a6d9 50% 100%)', rim:'#4c1733'},
  {id:'basket', name:'Basket Turuncu', price:4050, tier:'epic', tag:'Basket', perk:{type:'steadyCup', value:.86}, css:'linear-gradient(180deg,#FFB16A,#E97824 54%,#9A3C10)', rim:'#6E2809'},
  {id:'gold', name:'Altın Kupa', price:4400, tier:'epic', tag:'Parlak', perk:{type:'xray', value:300}, css:'linear-gradient(180deg,#FBE08A,#F2C14E 50%,#C08A1E)', rim:'#8F6510'},

  {id:'galaxy', name:'Galaksi', price:6600, tier:'legendary', tag:'Efsane', perk:{type:'comboShield', value:1}, css:'linear-gradient(160deg,#6D5BD0,#3B2E86 45%,#1B1440 90%)', rim:'#141032'},
  {id:'carbon', name:'Karbon Siyah', price:7600, tier:'legendary', tag:'Premium', perk:{type:'steadyCup', value:.82}, css:'linear-gradient(180deg,#777,#2B2B2B 54%,#0E0E0E)', rim:'#050505'},
  {id:'diamond', name:'Elmas Bardak', price:8800, tier:'legendary', tag:'Ultra', perk:{type:'xray', value:330}, css:'linear-gradient(180deg,#F3FFFF,#9EE9FF 45%,#5BAEC7 78%,#FFFFFF)', rim:'#4F94AA'}
];
const BALL_SKINS = [
  {id:'orange', name:'Turuncu Top', price:0, tier:'common', tag:'Başlangıç', icon:'🟠', css:'radial-gradient(circle at 32% 28%,#FFC078,#F2812E 55%,#B4520E)'},
  {id:'soccer', name:'Futbol Topu', price:850, tier:'common', tag:'Futbol', sport:true, icon:'⚽', css:'radial-gradient(circle at 32% 28%,#fff,#d8d8d8 55%,#8a8a8a)'},
  {id:'basketball', name:'Basketbol', price:1050, tier:'common', tag:'Basket', sport:true, icon:'🏀', css:'radial-gradient(circle at 32% 28%,#ffbe71,#e46f22 55%,#8c3108)'},
  {id:'tennis', name:'Tenis Topu', price:1300, tier:'rare', tag:'Tenis', sport:true, perk:{type:'focus', value:200}, icon:'🎾', css:'radial-gradient(circle at 32% 28%,#f4ff8a,#b8e338 55%,#6d9e13)'},
  {id:'volley', name:'Voleybol', price:1550, tier:'rare', tag:'Voleybol', sport:true, perk:{type:'steadyCup', value:.90}, icon:'🏐', css:'conic-gradient(from 15deg,#ffffff,#e8f2ff,#5ab3ff,#ffffff,#ffd95c,#ffffff)'},
  {id:'golf', name:'Golf Topu', price:1750, tier:'rare', tag:'Golf', sport:true, perk:{type:'slowStart', value:1.10}, icon:'⛳', css:'radial-gradient(circle at 32% 28%,#ffffff,#e7e7e7 60%,#b9b9b9)'},
  {id:'billiard8', name:'8 Numara', price:1950, tier:'rare', tag:'Bilardo', sport:true, perk:{type:'xray', value:260}, icon:'🎱', css:'radial-gradient(circle at 45% 42%,#ffffff 0 20%,#0f0f0f 21% 100%)'},
  {id:'bowling', name:'Bowling Topu', price:2400, tier:'rare', tag:'Bowling', sport:true, perk:{type:'steadyCup', value:.88}, icon:'🎳', css:'radial-gradient(circle at 28% 22%,#7777ff,#3b2e86 52%,#141032)'},
  {id:'baseball', name:'Beyzbol Topu', price:2700, tier:'epic', tag:'Beyzbol', sport:true, perk:{type:'focus', value:200}, icon:'⚾', css:'radial-gradient(circle at 50% 50%,transparent 0 42%,rgba(180,24,32,.75) 43% 46%,transparent 47%),radial-gradient(circle at 32% 28%,#fff,#f2f2f2 64%,#bdbdbd)'},
  {id:'handball', name:'Hentbol Topu', price:2950, tier:'epic', tag:'Hentbol', sport:true, perk:{type:'slowStart', value:1.10}, icon:'🤾', css:'radial-gradient(circle at 32% 28%,#ffcc73,#f29324 55%,#9d4d0e)'},
  {id:'rugby', name:'Ragbi Topu', price:3200, tier:'epic', tag:'Ragbi', sport:true, perk:{type:'coinBoost', value:2}, icon:'🏉', css:'radial-gradient(ellipse at 50% 50%,#f5b46b 0 28%,#a55725 63%,#5f2b13 100%)'},
  {id:'disco', name:'Disko Topu', price:3600, tier:'epic', tag:'Efekt', perk:{type:'xray', value:300}, icon:'🪩', css:'conic-gradient(#ff5c8a,#ffd25c,#5cff8a,#5cc8ff,#b45cff,#ff5c8a)'},
  {id:'emerald', name:'Zümrüt', price:4600, tier:'epic', tag:'Değerli', perk:{type:'coinBoost', value:2}, icon:'💎', css:'radial-gradient(circle at 32% 28%,#8affc9,#20c97a 55%,#0a7a48)'},
  {id:'fire', name:'Ateş Topu', price:6200, tier:'legendary', tag:'Ateş', perk:{type:'comboShield', value:1}, icon:'🔥', css:'radial-gradient(circle at 32% 28%,#ffe38a,#ff8a3d 45%,#d0301a 80%)'},
  {id:'iceball', name:'Buz Topu', price:6400, tier:'legendary', tag:'Buz', perk:{type:'slowStart', value:1.12}, icon:'❄️', css:'radial-gradient(circle at 32% 28%,#ffffff,#9ee8ff 48%,#2c7fb0 92%)'},
  {id:'meteor', name:'Meteor', price:7900, tier:'legendary', tag:'Final', perk:{type:'xray', value:330}, icon:'☄️', css:'radial-gradient(circle at 30% 25%,#fff3a0,#ff6d38 38%,#4a1010 75%,#100505)'},
  {id:'crown', name:'Şampiyon Topu', price:9200, tier:'legendary', tag:'Ultra', perk:{type:'comboShield', value:1}, icon:'👑', css:'radial-gradient(circle at 30% 24%,#fff7a8,#f2c14e 45%,#8f6510 86%)'}
];

const TIER_LABELS = {common:'Common', rare:'Rare', epic:'Epic', legendary:'Legendary'};
// Perkler küçük tutulur ve activeSkinPerks ile yalnızca ilk 10 bölümde çalışır.
const PERK_LABELS = {
  xray:'X-Ray: top +0.3 sn görünür',
  slowStart:'Slow Start: ilk 2 hareket sakin',
  focus:'Focus: ipucu +0.2 sn',
  steadyCup:'Steady Cup: yanıltma daha yumuşak',
  coinBoost:'Coin Boost: ilk 10 bölüm +2',
  comboShield:'Combo Shield: 1 kez kombo korur'
};

const MAX_CLASSIC_LEVEL = 50;
const AD_BREAK_EVERY_LEVEL = 10;
const MAX_LIVES = 10;
const COMBO_LIFE_INTERVAL = 3;
const FAILURE_AD_EVERY = 2;
const BASE_REWARD = 20;
const HINT_COST = 90;
const ELIMINATE_COST = 45;
const HINT_REWARD = 10;
const ELIMINATE_REWARD = 15;
const VAR_COST = 150;
const AD_DURATION_SECONDS = 10;
const REST_SECONDS = 3;
const AD_NOTICES_ENABLED = false; // Gerçek reklam eklenecek aşamaya kadar ekranda reklam bildirimi gösterme.
const RUN_SAVE_KEY = 'bardagibul-active-run';
const FORCE_REST_AFTER_CONSECUTIVE_LOSSES = 3;
const LONG_PLAY_REST_AFTER_MS = 5 * 60 * 1000;
const MOCK_MATCH_ROUNDS = 5;
const MOCK_MATCH_ENTRY_FEE = 40;
const MOCK_MATCH_REWARD = 75;

/* ---------- Kalıcı kayıt (window.storage → localStorage → bellek) ---------- */
const memStore = {};
const store = {
  async get(k){
    try{ if(window.storage){ const r = await window.storage.get(k); return r ? r.value : null; } }catch(e){}
    try{ return window.localStorage.getItem(k); }catch(e){}
    return (k in memStore) ? memStore[k] : null;
  },
  async set(k,v){
    try{ if(window.storage){ await window.storage.set(k,v); return; } }catch(e){}
    try{ window.localStorage.setItem(k,v); return; }catch(e){}
    memStore[k]=v;
  },
  async remove(k){
    try{ if(window.storage && window.storage.remove){ await window.storage.remove(k); return; } }catch(e){}
    try{ window.localStorage.removeItem(k); return; }catch(e){}
    try{ delete memStore[k]; }catch(e){}
  }
};

/* ---------- Oyun durumu ---------- */
const S = {
  coins:0, bestLevel:0, bestEndless:0,
  ownedCups:['red'], ownedBalls:['orange'],
  cupSkin:'red', ballSkin:'orange',
  lastDaily:'', muted:false,
  musicOn:true, sfxOn:true,
  bestCombo:0, campaignCompleted:false, playerName:'', avatar:'⭐', dailyStats:null,
  starterCoinsGiven:false, weeklyLeague:null, weeklyBadge:'',
  elo:1000, online:null
};
function uniqueList(arr){ return Array.from(new Set((Array.isArray(arr)?arr:[]).filter(Boolean))); }
function selectedCupSkin(){ return CUP_SKINS.find(s=>s.id===S.cupSkin)||CUP_SKINS[0]; }
function selectedBallSkin(){ return BALL_SKINS.find(s=>s.id===S.ballSkin)||BALL_SKINS[0]; }
function emptySkinPerks(){
  return {xrayMs:0, slowStartFactor:1, focusMs:0, steadyFactor:1, coinBoost:0, comboShield:false, labels:[]};
}
function addSkinPerk(perks, skin){
  if(!skin || !skin.perk) return;
  const p=skin.perk;
  const label=PERK_LABELS[p.type]||'Küçük kozmetik bonus';
  if(!perks.labels.includes(label)) perks.labels.push(label);
  if(p.type==='xray') perks.xrayMs=Math.max(perks.xrayMs, Math.min(350, Number(p.value)||300));
  if(p.type==='slowStart') perks.slowStartFactor=Math.max(perks.slowStartFactor, Math.min(1.14, Number(p.value)||1.1));
  if(p.type==='focus') perks.focusMs=Math.max(perks.focusMs, Math.min(220, Number(p.value)||200));
  if(p.type==='steadyCup') perks.steadyFactor=Math.min(perks.steadyFactor, Math.max(.80, Number(p.value)||.88));
  if(p.type==='coinBoost') perks.coinBoost=Math.max(perks.coinBoost, Math.min(2, Number(p.value)||2));
  if(p.type==='comboShield') perks.comboShield=true;
}
function activeSkinPerks(lv=level){
  const capped=Math.max(1,Math.min(Number(lv)||1,MAX_CLASSIC_LEVEL));
  const perks=emptySkinPerks();
  if(capped>10) return perks;
  addSkinPerk(perks, selectedCupSkin());
  addSkinPerk(perks, selectedBallSkin());
  return perks;
}
function perkTextFor(skin){ return skin && skin.perk ? (PERK_LABELS[skin.perk.type]||'Küçük bonus') : 'İlk 10 bölümde kozmetik'; }
function tierLabelFor(skin){ return TIER_LABELS[(skin&&skin.tier)||'common'] || 'Common'; }
function isSportBallActive(){ return level<=10 && !!selectedBallSkin().sport; }
function resetRunPerkState(){ comboShieldAvailable=!!activeSkinPerks(level).comboShield; }
function useComboShieldIfReady(){
  if(level<=10 && comboShieldAvailable && streak>0){
    comboShieldAvailable=false;
    haptic(30);
    return true;
  }
  return false;
}
function ensureOnlineState(){
  if(typeof S.elo!=='number' || !Number.isFinite(S.elo)) S.elo=1000;
  S.elo=Math.max(500,Math.min(2500,Math.round(S.elo)));
  if(!S.online || typeof S.online!=='object') S.online={};
  if(!S.online.room) S.online.room=null;
  if(!S.online.activeMatch) S.online.activeMatch=null;
  if(!S.online.lastMatch) S.online.lastMatch=null;
  if(!S.online.pendingMatch) S.online.pendingMatch=null;
  if(!S.online.tournament) S.online.tournament=null;
  return S.online;
}
function sanitizeState(){
  if(!AVATAR_LIST.includes(S.avatar)) S.avatar=AVATAR_LIST[0];
  S.ownedCups = uniqueList(S.ownedCups);
  S.ownedBalls = uniqueList(S.ownedBalls);
  if(!S.ownedCups.includes('red')) S.ownedCups.unshift('red');
  if(!S.ownedBalls.includes('orange')) S.ownedBalls.unshift('orange');
  if(!CUP_SKINS.some(x=>x.id===S.cupSkin)) S.cupSkin='red';
  if(!BALL_SKINS.some(x=>x.id===S.ballSkin)) S.ballSkin='orange';
  if(!S.ownedCups.includes(S.cupSkin)) S.ownedCups.push(S.cupSkin);
  if(!S.ownedBalls.includes(S.ballSkin)) S.ownedBalls.push(S.ballSkin);
  ensureOnlineState();
}
async function saveState(){ sanitizeState(); await store.set('bardagibul-save', JSON.stringify(S)); }
async function loadState(){
  const raw = await store.get('bardagibul-save');
  if(raw){ try{ Object.assign(S, JSON.parse(raw)); }catch(e){} }
  // V21: eski "muted" ayarı yeni müzik/ses ayarlarına taşınır.
  if(typeof S.sfxOn!=='boolean') S.sfxOn = !S.muted;
  if(typeof S.musicOn!=='boolean') S.musicOn = true;
  sanitizeState();
  // V17: her oyuncuya bir kere başlangıç hediyesi verilir.
  // Yeni oyuncu da, eski kayıtla gelen oyuncu da 50 altınlık başlangıç desteğini alır.
  if(!S.starterCoinsGiven){
    S.coins = Math.max(0, Number(S.coins)||0) + 50;
    S.starterCoinsGiven = true;
    await saveState();
  }
}
async function saveRunState(){
  if(isCompetitiveMode()) return;
  if(currentScreenId!=='screen-game' || lives<=0 || level<1) return;
  const run={
    active:true,
    mode,
    level:Math.max(1,Math.min(level, mode==='classic'?MAX_CLASSIC_LEVEL:9999)),
    lives:Math.max(1,Math.min(lives,MAX_LIVES)),
    streak:Math.max(0,streak||0),
    failuresSinceAd:Math.max(0,failuresSinceAd||0),
    adUsedThisRun:!!adUsedThisRun,
    comboShieldAvailable:!!comboShieldAvailable,
    playSessionStartedAt:playSessionStartedAt||Date.now(),
    consecutiveLifeLosses:Math.max(0,consecutiveLifeLosses||0),
    longPlayRestTriggeredThisRun:!!longPlayRestTriggeredThisRun,
    savedAt:Date.now()
  };
  await store.set(RUN_SAVE_KEY, JSON.stringify(run));
}
async function clearRunState(){ await store.remove(RUN_SAVE_KEY); }
async function loadRunState(){
  const raw=await store.get(RUN_SAVE_KEY);
  if(!raw) return null;
  try{
    const run=JSON.parse(raw);
    if(!run || !run.active || !run.level || !run.lives) return null;
    return run;
  }catch(e){ return null; }
}
async function checkResumeOrDaily(){
  pendingResumeRun = await loadRunState();
  if(pendingResumeRun){
    const name = S.playerName ? ', '+escapeHtml(S.playerName) : '';
    $('resume-stats').innerHTML='Kaldığın yer bulundu'+name+'.<br>Bölüm: '+pendingResumeRun.level+(pendingResumeRun.mode==='classic'?'/'+MAX_CLASSIC_LEVEL:'')+'<br>Can: '+pendingResumeRun.lives+'/'+MAX_LIVES+' • Kombo: '+(pendingResumeRun.streak||0)+'x';
    modal('modal-resume',true);
  }else{
    checkDaily();
  }
}

/* ---------- Ses efektleri ---------- */
let audioCtx=null;
let appIsBackgrounded=false;
let currentScreenId='screen-menu';
let isPaused=false;
let pendingResumeRun=null;
let pauseAdBusy=false;
const activeOscillators=new Set();
const activeMedia=new Set();
const soundTimers=new Set();
const FAIL_SFX=[
  './assets/sounds/fail-short.wav'
];
const preloadedFailSfx=[];
function soundAllowed(){
  // V21: ses efektleri artık tüm ekranlarda çalabilir (market/görev altın sesi düzeltildi).
  // Oyun ekranından çıkınca zamanlanmış sesler zaten stopAllGameAudio ile temizleniyor.
  return S.sfxOn && !appIsBackgrounded && !document.hidden && !isPaused;
}
function scheduleSound(fn,delayMs){
  const id=setTimeout(()=>{ soundTimers.delete(id); if(soundAllowed()) fn(); }, delayMs);
  soundTimers.add(id);
  return id;
}
function stopAllGameAudio(){
  soundTimers.forEach(id=>clearTimeout(id));
  soundTimers.clear();
  activeOscillators.forEach(o=>{ try{o.stop(0);}catch(e){} });
  activeOscillators.clear();
  activeMedia.forEach(a=>{
    try{ a.pause(); a.currentTime=0; }catch(e){}
  });
  activeMedia.clear();
  // V21: AudioContext artık burada askıya alınmıyor; fon müziği aynı context'te
  // kesintisiz devam eder. Context yalnızca uygulama arka plana geçince askıya alınır.
}
function ensureAudio(){
  try{
    audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==='suspended') audioCtx.resume();
    return audioCtx;
  }catch(e){ return null; }
}
function playTone(freq,dur=0.09,type='sine',vol=0.16,delay=0){
  if(!soundAllowed()) return;
  if(delay>0){ scheduleSound(()=>playTone(freq,dur,type,vol,0), Math.round(delay*1000)); return; }
  const ctx=ensureAudio(); if(!ctx || !soundAllowed()) return;
  try{
    const o=ctx.createOscillator(), g=ctx.createGain();
    const t=ctx.currentTime;
    o.type=type;o.frequency.value=freq;
    g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(vol,t+0.015);
    g.gain.exponentialRampToValueAtTime(0.001,t+dur);
    o.connect(g);g.connect(ctx.destination);
    activeOscillators.add(o);
    o.onended=()=>activeOscillators.delete(o);
    o.start(t);o.stop(t+dur+0.02);
  }catch(e){}
}
function beep(freq,dur=0.09,type='sine',vol=0.16){ playTone(freq,dur,type,vol,0); }
function difficultyRatio(lv=level){
  return Math.max(0, Math.min(1, (Math.min(lv, MAX_CLASSIC_LEVEL)-1)/(MAX_CLASSIC_LEVEL-1)));
}
const sndSwap=()=>{
  const d=difficultyRatio();
  const freq=300+Math.random()*120+d*270;
  const dur=Math.max(0.026,0.055-d*0.026);
  const vol=0.062+d*0.032;
  playTone(freq,dur,'triangle',vol,0);
  if(d>.52 && Math.random()<0.38){
    playTone(680+d*260,Math.max(0.018,0.034-d*0.012),'square',0.032+d*0.016,0.032);
  }
};
const sndWin =()=>{beep(660,.12);scheduleSound(()=>beep(880,.14),110);scheduleSound(()=>beep(1100,.2),240);};
function legacyLoseTone(){
  beep(220,.2,'sawtooth',0.12);
  scheduleSound(()=>beep(150,.3,'sawtooth',0.12),180);
}
function preloadFailSounds(){
  if(preloadedFailSfx.length) return;
  FAIL_SFX.forEach(src=>{
    try{
      const a=new Audio(src);
      a.preload='auto';
      a.volume=0.82;
      preloadedFailSfx.push(a);
    }catch(e){}
  });
}
function playFailSound(){
  if(!soundAllowed()) return;
  preloadFailSounds();
  const src = FAIL_SFX[rand(FAIL_SFX.length)];
  try{
    const a=new Audio(src);
    a.preload='auto';
    a.volume=0.86;
    activeMedia.add(a);
    a.onended=()=>activeMedia.delete(a);
    a.onerror=()=>{ activeMedia.delete(a); legacyLoseTone(); };
    const playPromise=a.play();
    if(playPromise && playPromise.catch){ playPromise.catch(()=>{ activeMedia.delete(a); legacyLoseTone(); }); }
  }catch(e){ legacyLoseTone(); }
}
const sndLose=()=>playFailSound();
function sndVarAlarm(){
  if(!soundAllowed()) return;
  // Kısa “da-da-da-dat” uyarısı: VAR incelemesinde hatalı bardak işaretlenirken çalar.
  const seq=[
    [165,0.055,'sawtooth',0.105,0],
    [148,0.055,'sawtooth',0.105,0.085],
    [132,0.055,'sawtooth',0.105,0.17],
    [210,0.07,'square',0.09,0.255]
  ];
  seq.forEach(([f,d,t,v,delay])=>playTone(f,d,t,v,delay));
  playTone(72,0.22,'sine',0.045,0);
}
const sndCoin=()=>beep(1200,.08,'square',0.08);
const sndCombo=()=>{beep(920,.08,'triangle',0.08);scheduleSound(()=>beep(1280,.1,'triangle',0.08),90);};

/* ---------- V21: Sakinleştirici fon müziği ----------
   Dış dosya yok; müzik Web Audio ile canlı üretilir (tamamen telifsiz).
   Yumuşak akor pedleri (I–vi–IV–V) + seyrek pentatonik tınılar.
   Menüde, oyunda ve duraklatma sırasında sakin sakin akmaya devam eder. */
const MUSIC_CHORDS=[
  [130.81,164.81,196.00,246.94], // Cmaj7
  [110.00,164.81,196.00,261.63], // Am7
  [ 87.31,130.81,174.61,220.00], // Fmaj
  [ 98.00,146.83,196.00,246.94]  // Gmaj7
];
const MUSIC_PLUCK_NOTES=[523.25,587.33,659.25,783.99,880.00]; // C mj pentatonik
const MUSIC_CHORD_SECONDS=8;
let musicGain=null, musicPlaying=false, musicTimer=null;
let musicNextChordAt=0, musicChordIndex=0, musicNextPluckAt=0;
const musicNodes=new Set();

function ensureMusicGain(ctx){
  if(musicGain) return musicGain;
  musicGain=ctx.createGain();
  musicGain.gain.value=0.0001;
  musicGain.connect(ctx.destination);
  return musicGain;
}
function scheduleMusicChord(ctx,when){
  const chord=MUSIC_CHORDS[musicChordIndex % MUSIC_CHORDS.length];
  musicChordIndex++;
  const dur=MUSIC_CHORD_SECONDS+3; // akorlar birbirine yumuşakça karışır
  chord.forEach((freq,i)=>{
    try{
      const o=ctx.createOscillator(), g=ctx.createGain(), f=ctx.createBiquadFilter();
      o.type=i===0?'sine':'triangle';
      o.frequency.value=freq;
      o.detune.value=(Math.random()*6-3);
      f.type='lowpass'; f.frequency.value=820; f.Q.value=0.4;
      const v=(i===0?0.052:0.034)/chord.length*4*0.5; // her ses çok kısık
      g.gain.setValueAtTime(0.0001,when);
      g.gain.linearRampToValueAtTime(v,when+2.6);           // yavaş nefes alma
      g.gain.setValueAtTime(v,when+dur-3.2);
      g.gain.linearRampToValueAtTime(0.0001,when+dur);      // yavaş bırakma
      o.connect(f); f.connect(g); g.connect(ensureMusicGain(ctx));
      musicNodes.add(o);
      o.onended=()=>musicNodes.delete(o);
      o.start(when); o.stop(when+dur+0.1);
    }catch(e){}
  });
}
function scheduleMusicPluck(ctx,when){
  try{
    const freq=MUSIC_PLUCK_NOTES[rand(MUSIC_PLUCK_NOTES.length)];
    const o=ctx.createOscillator(), g=ctx.createGain(), f=ctx.createBiquadFilter();
    o.type='sine'; o.frequency.value=freq; o.detune.value=(Math.random()*8-4);
    f.type='lowpass'; f.frequency.value=2400;
    const v=0.016+Math.random()*0.012;
    g.gain.setValueAtTime(0.0001,when);
    g.gain.exponentialRampToValueAtTime(v,when+0.04);
    g.gain.exponentialRampToValueAtTime(0.0001,when+1.9);
    o.connect(f); f.connect(g); g.connect(ensureMusicGain(ctx));
    musicNodes.add(o);
    o.onended=()=>musicNodes.delete(o);
    o.start(when); o.stop(when+2.1);
  }catch(e){}
}
function musicTick(){
  if(!musicPlaying || !audioCtx) return;
  if(audioCtx.state!=='running') return;
  const now=audioCtx.currentTime;
  if(musicNextChordAt < now) musicNextChordAt = now + 0.15;
  while(musicNextChordAt < now + 1.2){
    scheduleMusicChord(audioCtx, musicNextChordAt);
    musicNextChordAt += MUSIC_CHORD_SECONDS;
  }
  if(musicNextPluckAt < now) musicNextPluckAt = now + 1.5 + Math.random()*2;
  while(musicNextPluckAt < now + 1.2){
    if(Math.random()<0.82) scheduleMusicPluck(audioCtx, musicNextPluckAt);
    musicNextPluckAt += 2.2 + Math.random()*3.4;
  }
}
function startMusic(){
  if(!S.musicOn || musicPlaying) return;
  const ctx=ensureAudio(); if(!ctx) return;
  musicPlaying=true;
  const g=ensureMusicGain(ctx);
  try{
    g.gain.cancelScheduledValues(ctx.currentTime);
    g.gain.setValueAtTime(Math.max(0.0001,g.gain.value),ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.9,ctx.currentTime+1.8); // yumuşak giriş
  }catch(e){}
  musicNextChordAt=0; musicNextPluckAt=0;
  musicTick();
  if(!musicTimer) musicTimer=setInterval(musicTick,400);
}
function stopMusic(){
  musicPlaying=false;
  if(musicTimer){ clearInterval(musicTimer); musicTimer=null; }
  if(audioCtx && musicGain){
    try{
      const t=audioCtx.currentTime;
      musicGain.gain.cancelScheduledValues(t);
      musicGain.gain.setValueAtTime(Math.max(0.0001,musicGain.gain.value),t);
      musicGain.gain.linearRampToValueAtTime(0.0001,t+0.8); // yumuşak çıkış
    }catch(e){}
  }
  setTimeout(()=>{
    if(musicPlaying) return;
    musicNodes.forEach(o=>{ try{o.stop(0);}catch(e){} });
    musicNodes.clear();
  },900);
}

/* ---------- Yardımcılar ---------- */
const $=id=>document.getElementById(id);
const wait=ms=>new Promise(res=>{
  let elapsed=0,last=performance.now();
  function tick(now){
    if(!isPaused){ elapsed += now-last; }
    last=now;
    if(elapsed>=ms) res(); else requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
const easeInOut=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
const rand=n=>Math.floor(Math.random()*n);
function haptic(ms=18){ try{ if(!document.hidden && !appIsBackgrounded && navigator.vibrate) navigator.vibrate(ms); }catch(e){} }
function normalizePlayerName(value){
  return String(value||'').trim().replace(/\s+/g,' ').slice(0,16);
}
function updatePlayerWelcome(){
  const el=$('player-welcome');
  if(el) el.textContent = S.playerName ? 'Hoş geldin, '+S.playerName+'!' : 'Hoş geldin!';
}
let nameModalAvatarDraft='⭐';
function renderAvatarRow(){
  const row=$('avatar-row'); if(!row) return;
  row.innerHTML=AVATAR_LIST.map(a=>'<button type="button" class="'+(a===nameModalAvatarDraft?'selected':'')+'" data-avatar="'+a+'">'+a+'</button>').join('');
  const preview=$('name-avatar-preview'); if(preview) preview.textContent=nameModalAvatarDraft;
}
function showNameModal(){
  const input=$('player-name-input');
  if(input){ input.value=S.playerName||''; setTimeout(()=>input.focus(),160); }
  nameModalAvatarDraft=onlineAvatar();
  renderAvatarRow();
  modal('modal-name',true);
}
function suspendGameAudio(){
  if(currentScreenId==='screen-game') saveRunState();
  appIsBackgrounded=true;
  stopAllGameAudio();
  try{ if(audioCtx && audioCtx.state==='running') audioCtx.suspend(); }catch(e){}
}
function resumeGameAudio(){
  appIsBackgrounded=false;
  try{ if(audioCtx && audioCtx.state==='suspended' && (S.musicOn || S.sfxOn)) audioCtx.resume(); }catch(e){}
}
document.addEventListener('visibilitychange',()=>{
  if(document.hidden) suspendGameAudio();
  else resumeGameAudio();
});
window.addEventListener('blur',suspendGameAudio);
window.addEventListener('focus',resumeGameAudio);
window.addEventListener('pagehide',suspendGameAudio);
document.addEventListener('pause',suspendGameAudio);
document.addEventListener('resume',resumeGameAudio);

function requestGameFullscreen(){
  try{
    if(currentScreenId==='screen-game' && document.documentElement.requestFullscreen && !document.fullscreenElement){
      document.documentElement.requestFullscreen().catch(()=>{});
    }
  }catch(e){}
}
function exitGameFullscreen(){
  try{
    if(document.fullscreenElement && document.exitFullscreen){ document.exitFullscreen().catch(()=>{}); }
  }catch(e){}
}
function showScreen(id){
  currentScreenId=id;
  if(id!=='screen-game'){ stopAllGameAudio(); exitGameFullscreen(); }
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  $(id).classList.add('active');
  $('topbar').classList.toggle('show', id==='screen-game');
  if(id==='screen-game'){ setTimeout(requestGameFullscreen,30); }
}
['pointerdown','touchstart','click'].forEach(ev=>{
  document.addEventListener(ev,()=>{ if(currentScreenId==='screen-game') requestGameFullscreen(); },{passive:true});
});
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
let level=1, lives=3, roundCoins=0, adUsedThisRun=false, failuresSinceAd=0;
let streak=0, eliminateUsedThisRound=false, varrUsedThisRound=false;
let playSessionStartedAt=0, consecutiveLifeLosses=0, longPlayRestTriggeredThisRun=false, comboShieldAvailable=false;
let choiceTimerId=null, choiceTimerRaf=null, choiceDeadline=0, choiceTimeLeft=0, choiceTimeTotal=0, choiceLastTick=0;
let cups=[], ballCup=null, guessing=false, hintUsedThisRound=false, busy=false, slotPositions=[];
let currentRoundRecord=null, lastRoundRecord=null, varrOpportunityResolve=null, varrOpportunityTimer=null, varrReviewing=false;
let activeRoundPerks=emptySkinPerks();

function levelSettings(lv){
  const capped = Math.max(1, Math.min(Number(lv)||1, MAX_CLASSIC_LEVEL));
  const p = ((capped-1)%10)/9;
  // Zorluk hızdan çok bardak sayısı, renk yakınlığı, sahte hamle ve süre baskısıyla artar.
  if(capped<=10){
    return {zone:'blue', cupCount:capped>=6?4:3, swaps:5+Math.round(p*7), dur:590-p*40, feints:capped>=8, colors:false, invis:false, doubleFake:false, finalZone:false, feintChance:.08, colorChance:0, ghostChance:0, bobChance:.06};
  }
  if(capped<=20){
    return {zone:'green', cupCount:capped>=17?5:4, swaps:13+Math.round(p*9), dur:520-p*55, feints:true, colors:false, invis:false, doubleFake:false, finalZone:false, feintChance:.13, colorChance:0, ghostChance:0, bobChance:.10};
  }
  if(capped<=30){
    return {zone:'orange', cupCount:capped>=27?6:5, swaps:23+Math.round(p*8), dur:485-p*55, feints:true, colors:true, invis:false, doubleFake:capped>=28, finalZone:false, feintChance:.20, colorChance:.20, ghostChance:0, bobChance:.18};
  }
  if(capped<=40){
    return {zone:'purple', cupCount:capped>=37?7:6, swaps:32+Math.round(p*7), dur:425-p*35, feints:true, colors:true, invis:true, doubleFake:true, finalZone:false, feintChance:.22, colorChance:.27, ghostChance:.08, bobChance:.18};
  }
  return {zone:'red', cupCount:capped>=47?8:7, swaps:40+Math.round(p*5), dur:390-p*28, feints:true, colors:true, invis:true, doubleFake:true, finalZone:true, feintChance:.23, colorChance:.18, ghostChance:.07, bobChance:.20};
}
const rewardFor=lv=>BASE_REWARD;
const comboBonusFor=combo=>combo>=2 ? Math.min(80, combo*5) : 0;
function choiceTimeFor(lv){
  const capped=Math.max(1,Math.min(Number(lv)||1,MAX_CLASSIC_LEVEL));
  const p=((capped-1)%10)/9;
  if(capped<=10) return Math.round(9500-p*1200);
  if(capped<=20) return Math.round(8000-p*1100);
  if(capped<=30) return Math.round(7000-p*1000);
  if(capped<=40) return Math.round(5900-p*800);
  return Math.round(5050-p*650);
}
const shufflePauseFor=lv=>Math.max(36, 94 - Math.min(lv,MAX_CLASSIC_LEVEL)*1.05);



function levelThemeFor(lv){
  const n=Math.max(1,Math.min(Number(lv)||1,MAX_CLASSIC_LEVEL));
  if(n<=10) return {id:'blue',emoji:'🔵',title:'Mavi Eğitim',desc:'Oyuna alışma ve temel takip'};
  if(n<=20) return {id:'green',emoji:'🟢',title:'Yeşil Hız',desc:'Daha hızlı karışım'};
  if(n<=30) return {id:'orange',emoji:'🟠',title:'Turuncu Yanıltma',desc:'Sahte hamle ve dikkat testi'};
  if(n<=40) return {id:'purple',emoji:'🟣',title:'Mor Dikkat',desc:'Renk ve hareket tuzakları'};
  return {id:'red',emoji:'🔴',title:'Kırmızı Final',desc:'Son bölge: sabır ve refleks'};
}
function applyLevelTheme(lv){
  const theme=levelThemeFor(lv);
  try{ document.body.dataset.zone=theme.id; }catch(e){}
  const badge=$('zone-badge');
  if(badge) badge.textContent=theme.emoji+' '+theme.title+' • '+theme.desc;
}
function todayStr(){ const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
function missionDayIndex(date=new Date()){
  // Pazartesi 0, Pazar 6. Her hafta aynı görev sırası baştan döner.
  return (date.getDay()+6)%7;
}
const WEEKLY_MISSION_SETS=[
  {
    day:'Pazartesi', theme:'İpucusuz Isınma',
    missions:[
      {id:'mon-nohint3', title:'Karanlıkta Üç Adım', desc:'3 tur üst üste ipucu kullanmadan kazan.', stat:'noHintBest', target:3, reward:90, icon:'🌙'},
      {id:'mon-novar5', title:'Hakemsiz Seri', desc:'VAR kullanmadan 5 bölüm geç.', stat:'noVarWins', target:5, reward:105, icon:'📵'},
      {id:'mon-wins4', title:'Pazartesi Nabzı', desc:'Bugün 4 bölüm kazan.', stat:'wins', target:4, reward:70, icon:'🏁'}
    ]
  },
  {
    day:'Salı', theme:'Spor Topu Salısı',
    missions:[
      {id:'tue-sport3', title:'Spor Topuyla Üçlük', desc:'Market spor topu seçiliyken 3 tur kazan.', stat:'sportBallWins', target:3, reward:95, icon:'⚽'},
      {id:'tue-combo5', title:'Beşlik Alev', desc:'En az 5x kombo gör.', stat:'maxCombo', target:5, reward:85, icon:'🔥'},
      {id:'tue-clean2', title:'Sessiz İş', desc:'Güç kullanmadan 2 bölüm kazan.', stat:'cleanWins', target:2, reward:80, icon:'💎'}
    ]
  },
  {
    day:'Çarşamba', theme:'Toparlanma Günü',
    missions:[
      {id:'wed-comeback1', title:'Düştüm Kalktım', desc:'2 kez yanlış yaptıktan sonra oyunu toparla.', stat:'comebackWins', target:1, reward:110, icon:'🔁'},
      {id:'wed-elim2', title:'İki Şüpheli', desc:'2 kez eleme gücü kullan.', stat:'eliminateUses', target:2, reward:70, icon:'🎯'},
      {id:'wed-nohint2', title:'Işıksız İkili', desc:'2 tur üst üste ipucu kullanmadan kazan.', stat:'noHintBest', target:2, reward:65, icon:'🕶️'}
    ]
  },
  {
    day:'Perşembe', theme:'Odak Perşembesi',
    missions:[
      {id:'thu-combo10', title:'Onluk Dikkat', desc:'10 kombo yap.', stat:'maxCombo', target:10, reward:125, icon:'🔥'},
      {id:'thu-pause1', title:'Nefes Al', desc:'Oyunu 1 kez durdur ve sakin dön.', stat:'pauseUses', target:1, reward:45, icon:'⏸️'},
      {id:'thu-novar3', title:'Kendi Gözünle', desc:'VAR kullanmadan 3 bölüm geç.', stat:'noVarWins', target:3, reward:75, icon:'👀'}
    ]
  },
  {
    day:'Cuma', theme:'Cuma Serisi',
    missions:[
      {id:'fri-wins6', title:'Altı Bardaklık Akıl', desc:'Bugün 6 bölüm kazan.', stat:'wins', target:6, reward:100, icon:'🧠'},
      {id:'fri-sport3', title:'Tribün Modu', desc:'Spor topuyla 3 tur kazan.', stat:'sportBallWins', target:3, reward:90, icon:'🏟️'},
      {id:'fri-hint2', title:'İki Işık Bir Şüphe', desc:'2 kez ipucu kullan.', stat:'hintUses', target:2, reward:55, icon:'💡'}
    ]
  },
  {
    day:'Cumartesi', theme:'Kupa Cumartesi',
    missions:[
      {id:'sat-clean3', title:'Gösterişsiz Usta', desc:'Güç kullanmadan 3 bölüm kazan.', stat:'cleanWins', target:3, reward:105, icon:'🏆'},
      {id:'sat-var1', title:'Bir Kez Bak Yeter', desc:'Sadece 1 VAR incelemesi aç.', stat:'varUses', target:1, reward:50, icon:'📹'},
      {id:'sat-comeback1', title:'Kupa Dönüşü', desc:'2 hatadan sonra 1 bölüm kazan.', stat:'comebackWins', target:1, reward:100, icon:'🔁'}
    ]
  },
  {
    day:'Pazar', theme:'Pazar Finali',
    missions:[
      {id:'sun-combo10', title:'Pazar Ateşi', desc:'10 kombo yap.', stat:'maxCombo', target:10, reward:125, icon:'🔥'},
      {id:'sun-nohint3', title:'Sessiz Final', desc:'3 tur üst üste ipucu kullanmadan kazan.', stat:'noHintBest', target:3, reward:90, icon:'🌙'},
      {id:'sun-timeout1', title:'Son Saniye Dersi', desc:'1 kez süreyi bitir; sonra toparlan.', stat:'timeouts', target:1, reward:45, icon:'⏰'}
    ]
  }
];
function currentMissionSet(){ return WEEKLY_MISSION_SETS[missionDayIndex()] || WEEKLY_MISSION_SETS[0]; }
function escapeHtml(value){
  return String(value||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
// Local/mock lig: ileride Firebase sıralamasına bağlanacak yüzey burada ayrık tutuluyor.
function weekStartStr(date=new Date()){
  const d=new Date(date.getFullYear(),date.getMonth(),date.getDate());
  d.setDate(d.getDate()-((d.getDay()+6)%7));
  return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
}
const MOCK_LEAGUE_RIVALS=[
  {name:'Ada', badge:'🎯', base:520},
  {name:'Mert', badge:'⚽', base:470},
  {name:'Deniz', badge:'🔥', base:420},
  {name:'Ece', badge:'💎', base:360},
  {name:'Kaan', badge:'🏁', base:310},
  {name:'Lina', badge:'🧠', base:260}
];
function leagueSeed(key){ return String(key||'').split('').reduce((a,ch)=>a+ch.charCodeAt(0),0); }
function mockLeagueRivalsFor(key){
  const seed=leagueSeed(key);
  return MOCK_LEAGUE_RIVALS.map((r,i)=>({
    name:r.name,
    badge:r.badge,
    score:r.base + ((seed*(i+3))%140) - i*12
  }));
}
function ensureWeeklyLeague(){
  const key=weekStartStr();
  if(!S.weeklyLeague || S.weeklyLeague.weekKey!==key){
    S.weeklyLeague={weekKey:key, score:0, rivals:mockLeagueRivalsFor(key)};
  }
  if(!Array.isArray(S.weeklyLeague.rivals)) S.weeklyLeague.rivals=mockLeagueRivalsFor(key);
  S.weeklyLeague.score=Math.max(0,Number(S.weeklyLeague.score)||0);
  return S.weeklyLeague;
}
function leagueScoreForWin(clean=false){
  const zoneBonus=Math.floor((Math.max(1,Math.min(level,MAX_CLASSIC_LEVEL))-1)/10)*3;
  return 10 + zoneBonus + Math.min(10,streak||0) + (clean?3:0);
}
function addWeeklyLeagueScore(points){
  const league=ensureWeeklyLeague();
  league.score=Math.max(0,(Number(league.score)||0)+Math.max(0,Number(points)||0));
}
function weeklyLeagueRows(){
  const league=ensureWeeklyLeague();
  const rows=[
    {name:S.playerName||'Sen', badge:S.weeklyBadge||'⭐', score:league.score, player:true},
    ...league.rivals.map(r=>({...r, player:false}))
  ];
  return rows.sort((a,b)=>b.score-a.score || (a.player?-1:1));
}
function leagueRewardForRank(rank){
  if(rank===1) return '1. sıra: Altın rozet +75 🪙';
  if(rank<=3) return 'İlk 3: Gümüş rozet +40 🪙';
  return 'Katılım: küçük rozet +15 🪙';
}
function renderWeeklyLeague(){
  const board=$('league-board'); if(!board) return;
  const league=ensureWeeklyLeague();
  const rows=weeklyLeagueRows();
  const rank=Math.max(1,rows.findIndex(r=>r.player)+1);
  const note=$('league-week-note');
  if(note) note.textContent='Hafta başlangıcı: '+league.weekKey+' • local/mock lig';
  const summary=$('league-summary');
  if(summary) summary.innerHTML='<div class="league-score-pill">Puan: <b>'+league.score+'</b></div><div class="league-score-pill">Sıra: <b>#'+rank+'</b></div>';
  board.innerHTML=rows.map((r,i)=>
    '<div class="league-row '+(r.player?'player':'')+'"><span class="league-rank">#'+(i+1)+'</span><span class="league-avatar">'+escapeHtml(r.badge)+'</span><span class="league-name">'+escapeHtml(r.name)+'</span><span class="league-score">'+r.score+'</span></div>'
  ).join('');
  const reward=$('league-reward');
  if(reward) reward.textContent=leagueRewardForRank(rank);
}

/* ---------- Local/mock online servisleri ---------- */
const MOCK_RIVAL_NAMES=['Ada','Mert','Deniz','Ece','Kaan','Lina','Arda','Mina','Atlas','Zeynep','Bora','Nehir'];
const MOCK_CHAT_REPLIES=['Hazırım!','Güzel hamle.','Bu tur bende.','Kod çalıştı, geldim.','Bol şans!','Son bardağa dikkat.'];
const AVATAR_LIST=['⭐','🦁','🐯','🎯','🔥','🐸','🦊','🐼','🎮','🚀','🍀','🐙','🦖','🥷'];
const TOURNAMENT_TYPES={
  mini:{id:'mini',name:'Mini Kupa',entry:100,prize:160,badge:'🥉'},
  master:{id:'master',name:'Usta Kupa',entry:500,prize:850,badge:'🥈'},
  legend:{id:'legend',name:'Efsane Kupa',entry:1500,prize:2700,badge:'🏆'}
};
let mockSearchTimer=null;
const gameChatTimers={me:null,rival:null};
function onlineName(){ return S.playerName || 'Sen'; }
function onlineAvatar(){ return AVATAR_LIST.includes(S.avatar) ? S.avatar : AVATAR_LIST[0]; }
function mockOpponentName(seed=''){
  const source=String(seed||Date.now());
  const idx=source.split('').reduce((a,ch)=>a+ch.charCodeAt(0),0)%MOCK_RIVAL_NAMES.length;
  return MOCK_RIVAL_NAMES[idx];
}
function mockOpponentAvatar(seed=''){
  const source=String(seed||Date.now())+'a';
  const idx=source.split('').reduce((a,ch)=>a+ch.charCodeAt(0),0)%AVATAR_LIST.length;
  return AVATAR_LIST[idx];
}
function roomCode(){
  return String(Math.floor(1000+Math.random()*9000));
}
function normalizeRoomCode(code){
  return String(code||'').trim();
}
function isValidRoomCode(code){
  return /^\d{4}$/.test(code);
}
function systemChat(text){ return {from:'system',name:'Sistem',text,at:Date.now()}; }
const ROOM_ROUND_OPTIONS=[3,5,10,15,20];
function makeRoom(code,joined=false){
  const rival=mockOpponentName(code);
  const players=[{id:'me',name:onlineName(),avatar:onlineAvatar(),ready:false,host:!joined,elo:S.elo}];
  if(joined) players.push({id:'rival',name:rival,avatar:mockOpponentAvatar(code),ready:true,host:false,elo:S.elo+20+rand(90)});
  return {
    code,
    createdAt:Date.now(),
    ready:false,
    rounds:5,
    players,
    chat:[systemChat(joined ? rival+' odaya katıldı.' : 'Oda oluşturuldu. Kodu arkadaşına gönder.')]
  };
}
async function createRoomMock(){
  ensureOnlineState();
  S.online.room=makeRoom(roomCode(),false);
  S.online.pendingMatch=null;
  await saveState();
  renderRoom();
  showScreen('screen-room');
}
async function joinRoomMock(code){
  const normalized=normalizeRoomCode(code);
  if(!normalized){ msgModal('🔑','Kod gerekli','Odaya katılmak için davet kodunu yazmalısın.'); return null; }
  if(!isValidRoomCode(normalized)){ msgModal('🔑','Hatalı kod','Kod 4 haneli sayı olmalı.'); return null; }
  ensureOnlineState();
  S.online.room=makeRoom(normalized, true);
  S.online.pendingMatch=null;
  await saveState();
  renderRoom();
  showScreen('screen-room');
  return S.online.room;
}
async function leaveRoomMock(){
  ensureOnlineState();
  S.online.room=null;
  S.online.activeMatch=null;
  S.online.pendingMatch=null;
  await saveState();
  showScreen('screen-friends');
}
function trimChat(target){
  if(target && Array.isArray(target.chat) && target.chat.length>40) target.chat=target.chat.slice(-40);
}
function activeChatMatch(){
  ensureOnlineState();
  return S.online.activeMatch || S.online.pendingMatch || (currentScreenId==='screen-race' ? S.online.lastMatch : null);
}
function activeChatTarget(){
  ensureOnlineState();
  const match=activeChatMatch();
  const room=S.online.room;
  if(room && (!match || match.source==='friend' || currentScreenId==='screen-room')){
    if(!Array.isArray(room.chat)) room.chat=[];
    return {kind:'room', owner:room, chat:room.chat};
  }
  if(match){
    if(!Array.isArray(match.chat)) match.chat=[systemChat('Maç sohbeti hazır.')];
    return {kind:'match', owner:match, chat:match.chat};
  }
  return null;
}
function chatRivalInfo(){
  ensureOnlineState();
  const room=S.online.room;
  const match=activeChatMatch();
  if(room){
    const rival=(room.players||[]).find(p=>p.id==='rival');
    if(rival) return {name:rival.name,avatar:rival.avatar||'🎱'};
  }
  if(match && match.opponent) return {name:match.opponent.name,avatar:match.opponent.avatar||'🎱'};
  return null;
}
function gameChatText(text){
  return String(text||'').replace(/\s+/g,' ').trim().slice(0,20);
}
function showGameChatBubble(from,text){
  if(currentScreenId!=='screen-game' || !isCompetitiveMode()) return;
  const side=from==='me'?'me':from==='rival'?'rival':'';
  if(!side) return;
  const bubble=$(side==='me'?'game-bubble-me':'game-bubble-rival');
  if(!bubble) return;
  const compact=gameChatText(text);
  if(!compact) return;
  bubble.textContent=compact;
  bubble.classList.add('show');
  if(gameChatTimers[side]) clearTimeout(gameChatTimers[side]);
  gameChatTimers[side]=setTimeout(()=>bubble.classList.remove('show'),6000);
}
function renderChatBox(box,chat){
  if(!box) return;
  box.innerHTML=(chat||[]).map(m=>'<div class="chat-bubble '+(m.from==='me'?'me':m.from==='system'?'system':'rival')+'">'+escapeHtml(m.text)+'</div>').join('');
  box.scrollTop=box.scrollHeight;
}
async function sendChatMock(message){
  ensureOnlineState();
  const text=String(message||'').trim();
  const target=activeChatTarget();
  if(!target || !text) return;
  const mine={from:'me',name:onlineName(),avatar:onlineAvatar(),text:text.slice(0,80),at:Date.now()};
  target.chat.push(mine);
  trimChat(target.owner);
  await saveState();
  renderAllChatViews();
  showGameChatBubble('me',mine.text);
  const rivalInfo=chatRivalInfo();
  if(!rivalInfo) return;
  setTimeout(async ()=>{
    const current=activeChatTarget();
    if(!current || current.owner!==target.owner) return;
    const reply={from:'rival',name:rivalInfo.name,avatar:rivalInfo.avatar,text:MOCK_CHAT_REPLIES[rand(MOCK_CHAT_REPLIES.length)],at:Date.now()};
    current.chat.push(reply);
    trimChat(current.owner);
    await saveState();
    renderAllChatViews();
    showGameChatBubble('rival',reply.text);
  },550+rand(700));
}
async function sendEmojiMock(emoji){
  await sendChatMock(emoji);
}
function calculateMatchReward(kind='match'){
  if(kind==='friend') return {entry:0,prize:40};
  if(kind==='matchmaking') return {entry:MOCK_MATCH_ENTRY_FEE,prize:MOCK_MATCH_REWARD};
  const cup=TOURNAMENT_TYPES[kind];
  if(cup) return {entry:cup.entry,prize:cup.prize};
  return {entry:0,prize:50};
}
function makeCompetitiveMatch(source,opponent,opts={}){
  const reward=calculateMatchReward(source==='tournament' ? (opts.tournamentType||'mini') : source);
  return {
    id:'M'+Date.now(),
    source,
    status:'ready',
    entryPaid:source==='friend' || source==='tournament',
    entryFee:reward.entry,
    prize:reward.prize,
    targetRounds:opts.rounds||MOCK_MATCH_ROUNDS,
    round:0,
    opponent:{name:opponent.name,avatar:opponent.avatar||mockOpponentAvatar(opponent.name),elo:opponent.elo||S.elo+rand(120)-40,correct:0,combo:0,lives:MAX_LIVES,score:0,roundWins:0},
    player:{name:onlineName(),avatar:onlineAvatar(),elo:S.elo,correct:0,combo:0,lives:MAX_LIVES,score:0,roundWins:0},
    chat:[systemChat('Maç sohbeti hazır.')],
    tournamentType:opts.tournamentType||'',
    createdAt:Date.now()
  };
}
async function startFriendMatchMock(){
  ensureOnlineState();
  let room=S.online.room;
  if(!room){
    room=makeRoom(roomCode(),true);
    S.online.room=room;
  }
  if(!(room.players||[]).some(p=>p.id==='rival')){
    room.players.push({id:'rival',name:mockOpponentName(room.code),avatar:mockOpponentAvatar(room.code),ready:true,host:false,elo:S.elo+20+rand(80)});
    room.chat.push(systemChat('Mock rakip odaya eklendi.'));
  }
  const rival=room.players.find(p=>p.id==='rival');
  S.online.activeMatch=makeCompetitiveMatch('friend',rival,{rounds:ROOM_ROUND_OPTIONS.includes(room.rounds)?room.rounds:5});
  await saveState();
  renderRace();
  showScreen('screen-race');
}
async function findMatchMock(){
  ensureOnlineState();
  if(mockSearchTimer) clearTimeout(mockSearchTimer);
  const status=$('matchmaking-status');
  const result=$('matchmaking-result');
  const start=$('btn-start-found-match');
  if(status){ status.classList.add('searching'); status.textContent='Uygun rakip aranıyor... ELO '+Math.max(500,S.elo-120)+' - '+(S.elo+120); }
  if(result) result.innerHTML='';
  if(start) start.style.display='none';
  return new Promise(res=>{
    mockSearchTimer=setTimeout(async ()=>{
      const rival={name:mockOpponentName(S.elo+'match'),elo:S.elo-70+rand(141)};
      S.online.pendingMatch=makeCompetitiveMatch('matchmaking',rival);
      await saveState();
      renderMatchmaking();
      res(S.online.pendingMatch);
    },3000);
  });
}
async function startTournamentMock(type){
  ensureOnlineState();
  const cup=TOURNAMENT_TYPES[type];
  if(!cup) return;
  if(S.coins<cup.entry){ msgModal('🪙','Altın yetersiz','Bu kupaya katılmak için '+cup.entry+' altın gerekiyor.'); return; }
  S.coins-=cup.entry;
  const shuffled=MOCK_RIVAL_NAMES.slice().sort(()=>Math.random()-.5);
  S.online.tournament={
    type:cup.id,
    status:'active',
    roundIndex:0,
    participants:[onlineName(),...shuffled.slice(0,7)],
    route:[shuffled[0],shuffled[1],shuffled[2]],
    history:[],
    startedAt:Date.now()
  };
  S.online.activeMatch=null;
  await saveState();
  refreshMenu();
  renderTournament();
}
async function submitLeaderboardMock(score){
  addWeeklyLeagueScore(Math.max(0,Math.round((Number(score)||0)/40)));
  await saveState();
}
async function updateEloMock(result){
  const delta=result==='win'?15:-10;
  S.elo=Math.max(500,Math.min(2500,Math.round((Number(S.elo)||1000)+delta)));
  await saveState();
  return S.elo;
}
function currentTournamentOpponent(){
  const t=ensureOnlineState().tournament;
  if(!t || t.status!=='active') return null;
  return {name:t.route[t.roundIndex]||mockOpponentName(t.type+t.roundIndex),elo:S.elo+50+t.roundIndex*55};
}
async function prepareTournamentRound(){
  const opp=currentTournamentOpponent();
  const t=S.online.tournament;
  if(!opp || !t) return;
  S.online.activeMatch=makeCompetitiveMatch('tournament',opp,{rounds:5,tournamentType:t.type});
  await saveState();
  renderRace();
  showScreen('screen-race');
}
function simulateOpponentRound(match,playerCorrect){
  const eloGap=(match.opponent.elo||1000)-(S.elo||1000);
  const chance=Math.max(.45,Math.min(.78,.62+eloGap/1000));
  const correct=Math.random()<chance;
  const ballSlot=ballCup?ballCup.slot:null;
  if(correct){
    match.opponent.correct++;
    match.opponent.combo++;
    match.opponent.score+=105+Math.min(70,match.opponent.combo*9)+Math.max(0,match.opponent.lives)*4;
    match.opponent.lastPickSlot=ballSlot;
  }else{
    match.opponent.combo=0;
    match.opponent.lives=Math.max(0,match.opponent.lives-1);
    match.opponent.score+=14+rand(12);
    const others=cups.filter(c=>c.slot!==ballSlot).map(c=>c.slot);
    match.opponent.lastPickSlot=others.length?others[rand(others.length)]:ballSlot;
  }
  if(!playerCorrect && Math.random()<.28) match.opponent.score+=12;
}
async function showOpponentPickReveal(match){
  const slot=match && match.opponent ? match.opponent.lastPickSlot : null;
  if(slot==null) return;
  const cup=cups.find(c=>c.slot===slot);
  if(!cup) return;
  cup.el.dataset.oppAvatar=match.opponent.avatar||'🎱';
  cup.el.classList.add('opponent-pick');
  await wait(420);
  cup.el.classList.remove('opponent-pick');
  delete cup.el.dataset.oppAvatar;
}
async function recordCompetitiveRound(playerCorrect){
  ensureOnlineState();
  const match=S.online.activeMatch;
  if(!match || !['friend','matchmaking','tournament'].includes(match.source) || match.status!=='in_progress') return false;
  match.round++;
  match.player.name=onlineName();
  match.player.lives=Math.max(0,lives);
  const playerScoreBefore=match.player.score, opponentScoreBefore=match.opponent.score;
  if(playerCorrect){
    match.player.correct++;
    match.player.combo=streak;
    match.player.score+=120+Math.min(90,streak*10)+Math.max(0,lives)*5;
  }else{
    match.player.combo=0;
    match.player.score+=12+Math.max(0,lives)*2;
  }
  simulateOpponentRound(match,playerCorrect);
  match.player.lives=Math.max(0,lives);
  const playerGain=match.player.score-playerScoreBefore, opponentGain=match.opponent.score-opponentScoreBefore;
  if(playerGain>opponentGain) match.player.roundWins=(match.player.roundWins||0)+1;
  else if(opponentGain>playerGain) match.opponent.roundWins=(match.opponent.roundWins||0)+1;
  const bestOf5Decided=match.source==='tournament' && (Math.max(match.player.roundWins,match.opponent.roundWins)>=3);
  const finished=bestOf5Decided || match.round>=match.targetRounds || lives<=0;
  await saveState();
  await showOpponentPickReveal(match);
  if(finished){
    await finishCompetitiveMatch(lives<=0);
    return true;
  }
  return false;
}
async function finishCompetitiveMatch(forceLoss=false){
  ensureOnlineState();
  const match=S.online.activeMatch;
  if(!match) return;
  match.status='complete';
  const playerWon=!forceLoss && (match.source==='tournament'
    ? (match.player.roundWins!==match.opponent.roundWins ? match.player.roundWins>match.opponent.roundWins : match.player.score>=match.opponent.score)
    : match.player.score>=match.opponent.score);
  match.result=playerWon?'win':'loss';
  let title=playerWon?'Kazandın!':'Kaybettin';
  let body=match.source==='tournament' ? 'Raund skoru: '+match.player.roundWins+' - '+match.opponent.roundWins : 'Skor: '+match.player.score+' - '+match.opponent.score;
  if(match.source==='matchmaking'){
    if(playerWon){ S.coins+=match.prize; sndCoin(); }
    await updateEloMock(playerWon?'win':'loss');
    body+=' • Yeni ELO: '+S.elo+(playerWon?' • +'+match.prize+' 🪙':'');
  }else if(match.source==='friend'){
    if(playerWon){ S.coins+=match.prize; sndCoin(); body+=' • Dostluk ödülü: +'+match.prize+' 🪙'; }
  }else if(match.source==='tournament'){
    await applyTournamentResult(playerWon,match);
    const t=S.online.tournament;
    title=playerWon ? (t && t.status==='won' ? 'Kupayı Aldın!' : 'Üst Tura Çıktın!') : 'Elendin';
    body = tournamentResultText(playerWon,match);
  }
  S.online.lastMatch=match;
  await submitLeaderboardMock(match.player.score);
  await saveState();
  refreshMenu();
  renderRace();
  if(match.source==='tournament') renderTournament();
  showScreen(match.source==='tournament' ? 'screen-tournament' : 'screen-race');
  msgModal(playerWon?'🏆':'😬',title,body);
}
async function applyTournamentResult(playerWon,match){
  const t=S.online.tournament; if(!t) return;
  const cup=TOURNAMENT_TYPES[t.type]||TOURNAMENT_TYPES.mini;
  t.history.push({round:t.roundIndex,result:playerWon?'win':'loss',score:match.player.score,opp:match.opponent.score});
  if(!playerWon){ t.status='eliminated'; return; }
  if(t.roundIndex>=2){
    t.status='won';
    S.coins+=cup.prize;
    S.weeklyBadge=cup.badge;
    sndCoin();
  }else{
    t.roundIndex++;
  }
}
function tournamentResultText(playerWon,match){
  const t=S.online.tournament;
  const cup=t ? TOURNAMENT_TYPES[t.type] : null;
  const rw='Raund skoru: '+match.player.roundWins+' - '+match.opponent.roundWins;
  if(!playerWon) return rw+'. Turnuvadan elendin.';
  if(t && t.status==='won') return 'Final '+rw+'. Ödül: +'+cup.prize+' 🪙';
  return rw+'. Sıradaki tur açıldı.';
}
async function beginCompetitiveGame(){
  ensureOnlineState();
  const match=S.online.pendingMatch || S.online.activeMatch;
  if(!match){ msgModal('ℹ️','Maç yok','Önce oda, eşleşme veya turnuva maçı hazırla.'); return; }
  if(match.status==='complete'){ renderRace(); return; }
  if(!match.entryPaid && match.entryFee>0){
    if(S.coins<match.entryFee){ msgModal('🪙','Altın yetersiz','Maça girmek için '+match.entryFee+' altın gerekiyor.'); return; }
    S.coins-=match.entryFee;
    match.entryPaid=true;
    sndCoin();
  }
  match.status='in_progress';
  S.online.activeMatch=match;
  S.online.pendingMatch=null;
  await saveState();
  refreshMenu();
  startCompetitiveGame(match.source);
}
function isCompetitiveMode(){ return ['friend','matchmaking','tournament'].includes(mode); }
function renderRoom(){
  ensureOnlineState();
  const room=S.online.room; if(!room) return;
  const code=$('room-code-label'); if(code) code.textContent=room.code;
  const ready=$('btn-room-ready'); if(ready) ready.textContent=room.ready?'Hazırsın':'Hazır Ol';
  const start=$('btn-room-start'); if(start) start.disabled=!room.ready;
  const isHost=(room.players||[]).some(p=>p.id==='me'&&p.host);
  const roundSelect=$('room-round-select');
  if(roundSelect){
    roundSelect.innerHTML=ROOM_ROUND_OPTIONS.map(n=>
      '<button type="button" class="tab'+(((room.rounds||5)===n)?' active':'')+'"'+(isHost?'':' disabled')+' data-rounds="'+n+'">'+n+'</button>'
    ).join('');
  }
  const list=$('room-players');
  if(list){
    list.innerHTML=(room.players||[]).map(p=>
      '<div class="room-player"><span class="avatar">'+(p.avatar||(p.id==='me'?onlineAvatar():'🎱'))+'</span><span class="name">'+escapeHtml(p.name)+'<small> • ELO '+(p.elo||S.elo)+'</small></span><span class="ready">'+(p.ready?'Hazır':'Bekliyor')+'</span></div>'
    ).join('');
  }
  renderRoomChat();
}
function renderRoomChat(){
  const room=ensureOnlineState().room;
  const box=$('chat-list'); if(!box) return;
  renderChatBox(box, room ? room.chat : []);
}
function renderRaceChat(){
  const box=$('race-chat-list'); if(!box) return;
  const target=activeChatTarget();
  renderChatBox(box, target ? target.chat : []);
}
function renderGameChat(){
  const social=$('game-social');
  if(!social) return;
  const match=activeChatMatch();
  const rival=chatRivalInfo();
  const meAvatar=$('game-avatar-me');
  const rivalAvatar=$('game-avatar-rival');
  if(meAvatar) meAvatar.textContent=(match&&match.player&&match.player.avatar)||onlineAvatar();
  if(rivalAvatar) rivalAvatar.textContent=(rival&&rival.avatar)||(match&&match.opponent&&match.opponent.avatar)||'🎱';
}
function renderAllChatViews(){ renderRoomChat(); renderRaceChat(); renderGameChat(); }
function syncGameChat(){
  const panel=$('game-chat'); if(!panel) return;
  const social=$('game-social');
  const showChat = isCompetitiveMode() && !!activeChatTarget();
  panel.classList.toggle('show', showChat);
  if(social) social.classList.toggle('show', showChat);
  if(!showChat){
    ['game-bubble-me','game-bubble-rival'].forEach(id=>{ const b=$(id); if(b) b.classList.remove('show'); });
    return;
  }
  panel.classList.toggle('soft', guessing===true);
  renderGameChat();
}
function renderRace(){
  ensureOnlineState();
  const match=S.online.activeMatch || S.online.lastMatch || S.online.pendingMatch;
  const box=$('race-scoreboard'); if(!box) return;
  const note=$('race-note');
  if(!match){
    if(note) note.textContent='Hazır maç yok.';
    box.innerHTML='<div class="score-card">Oda kur, eşleşme bul veya turnuva başlat.</div>';
    return;
  }
  if(note) note.textContent=(match.source==='friend'?'Arkadaş odası':match.source==='matchmaking'?'Online maç':'Turnuva')+' • '+(match.status==='complete'?'Bitti':match.status==='in_progress'?'Devam ediyor':'Hazır');
  const p=match.player, o=match.opponent;
  const roundWinLine=match.source==='tournament' ? '<div class="race-round-win">🏆 '+(p.roundWins||0)+' <span>—</span> '+(o.roundWins||0)+' <small>(best-of-5)</small></div>' : '';
  box.innerHTML='\
    <div class="race-head"><div class="race-player me"><span class="race-avatar">'+(p.avatar||onlineAvatar())+'</span>'+escapeHtml(p.name)+'</div><div class="race-vs">VS</div><div class="race-player rival">'+escapeHtml(o.name)+'<span class="race-avatar">'+(o.avatar||'🎱')+'</span></div></div>\
    '+roundWinLine+'\
    <div class="race-stats">\
      <div class="race-stat"><span>Tur</span><b>'+match.round+'/'+match.targetRounds+'</b></div>\
      <div class="race-stat"><span>Doğru</span><b>'+p.correct+' / '+o.correct+'</b></div>\
      <div class="race-stat"><span>Kombo</span><b>'+p.combo+'x / '+o.combo+'x</b></div>\
      <div class="race-stat"><span>Can</span><b>'+p.lives+' / '+o.lives+'</b></div>\
      <div class="race-stat"><span>Puan</span><b>'+p.score+'</b></div>\
      <div class="race-stat"><span>Rakip</span><b>'+o.score+'</b></div>\
    </div>\
    <div class="race-score-line"><div class="score-card">Giriş: <b>'+match.entryFee+' 🪙</b></div><div class="score-card">Ödül: <b>'+match.prize+' 🪙</b></div></div>';
  const play=$('btn-race-play');
  if(play){
    play.style.display=match.status==='complete'?'none':'inline-block';
    play.textContent=match.status==='in_progress'?'Maça Devam':'Maça Başla';
  }
  const roomBtn=$('btn-race-room');
  if(roomBtn) roomBtn.style.display=match.source==='friend'?'inline-block':'none';
  renderRaceChat();
}
function renderMatchmaking(){
  ensureOnlineState();
  const elo=$('elo-label'); if(elo) elo.textContent=S.elo;
  const status=$('matchmaking-status');
  const result=$('matchmaking-result');
  const start=$('btn-start-found-match');
  const pending=S.online.pendingMatch;
  if(status){ status.classList.remove('searching'); status.textContent=pending?'Rakip bulundu':'Hazır'; }
  if(result){
    result.innerHTML=pending ? 'Rakip: <b>'+(pending.opponent.avatar||'🎱')+' '+escapeHtml(pending.opponent.name)+'</b><br>ELO: <b>'+pending.opponent.elo+'</b><br>Giriş: <b>'+pending.entryFee+' 🪙</b> • Ödül: <b>'+pending.prize+' 🪙</b>' : '';
  }
  if(start) start.style.display=pending?'inline-block':'none';
}
function renderTournament(){
  ensureOnlineState();
  const list=$('tournament-list');
  if(list){
    list.innerHTML=Object.values(TOURNAMENT_TYPES).map(c=>
      '<div class="tournament-card"><h3>'+c.badge+' '+c.name+'</h3><p>Giriş: '+c.entry+' 🪙<br>Ödül: '+c.prize+' 🪙</p><button class="btn small" data-tournament="'+c.id+'">Katıl</button></div>'
    ).join('');
  }
  const t=S.online.tournament;
  const bracket=$('tournament-bracket');
  const play=$('btn-tournament-play');
  if(!bracket) return;
  if(!t){
    bracket.innerHTML='<div class="bracket-title">Aktif turnuva yok.</div>';
    if(play) play.style.display='none';
    return;
  }
  const cup=TOURNAMENT_TYPES[t.type]||TOURNAMENT_TYPES.mini;
  const roundNames=['Çeyrek Final','Yarı Final','Final'];
  bracket.innerHTML='\
    <div class="bracket-title">'+cup.badge+' '+cup.name+' • '+(t.status==='active'?roundNames[t.roundIndex]:t.status==='won'?'Şampiyon':'Elendi')+'</div>\
    <div class="bracket-grid">'+(t.participants||[]).map((name,i)=>'<div class="bracket-person '+(i===0?'me':'')+'">'+escapeHtml(name)+'</div>').join('')+'</div>\
    <div class="bracket-grid">'+roundNames.map((name,i)=>'<div class="bracket-stage '+(i===t.roundIndex&&t.status==='active'?'active':i<t.roundIndex||t.status==='won'?'done':'')+'">'+name+'<br><small>'+(t.route[i]?escapeHtml(onlineName()+' vs '+t.route[i]):'Bekliyor')+'</small></div>').join('')+'</div>';
  if(play){
    play.style.display=t.status==='active'?'inline-block':'none';
    play.textContent=roundNames[t.roundIndex]+' Oyna';
  }
}
function ensureDailyStats(){
  const t=todayStr();
  const set=currentMissionSet();
  if(!S.dailyStats || S.dailyStats.date!==t || S.dailyStats.weekDay!==set.day){
    S.dailyStats={date:t,weekDay:set.day,wins:0,maxCombo:0,cleanWins:0,noHintStreak:0,noHintBest:0,noVarWins:0,comebackWins:0,sportBallWins:0,hintUses:0,eliminateUses:0,varUses:0,failures:0,timeouts:0,pauseUses:0,claimed:{}};
  }
  ['wins','maxCombo','cleanWins','noHintStreak','noHintBest','noVarWins','comebackWins','sportBallWins','hintUses','eliminateUses','varUses','failures','timeouts','pauseUses'].forEach(k=>{ if(typeof S.dailyStats[k]!=='number') S.dailyStats[k]=0; });
  if(!S.dailyStats.claimed) S.dailyStats.claimed={};
  return S.dailyStats;
}
function todaysMissions(){ return currentMissionSet().missions; }
async function trackDailyStat(stat,amount=1){
  const d=ensureDailyStats();
  d[stat]=(Number(d[stat])||0)+amount;
  if(stat==='failures' || stat==='timeouts') d.noHintStreak=0;
  await saveState();
  if(currentScreenId==='screen-missions') renderMissions();
}
async function recordDailyWin(clean=false, opts={}){
  const d=ensureDailyStats();
  d.wins=(d.wins||0)+1;
  d.maxCombo=Math.max(d.maxCombo||0,streak||0);
  if(clean) d.cleanWins=(d.cleanWins||0)+1;
  if(opts.noHintWin){
    d.noHintStreak=(d.noHintStreak||0)+1;
    d.noHintBest=Math.max(d.noHintBest||0,d.noHintStreak);
  }else{
    d.noHintStreak=0;
  }
  if(opts.noVarWin) d.noVarWins=(d.noVarWins||0)+1;
  if(opts.comebackWin) d.comebackWins=(d.comebackWins||0)+1;
  if(opts.sportBallWin) d.sportBallWins=(d.sportBallWins||0)+1;
  addWeeklyLeagueScore(leagueScoreForWin(clean));
  await saveState();
  if(currentScreenId==='screen-missions') renderMissions();
  if(currentScreenId==='screen-league') renderWeeklyLeague();
}
function missionProgress(m){
  const d=ensureDailyStats();
  return Math.max(0, Math.min(m.target, Number(d[m.stat])||0));
}
function renderMissions(){
  ensureDailyStats();
  const box=$('missions-list'); if(!box) return;
  const set=currentMissionSet();
  const note=$('mission-week-note');
  if(note) note.textContent=set.day+' • '+set.theme+' — Bu görevler haftalık döngüyle tekrar eder.';
  box.innerHTML='';
  todaysMissions().forEach(m=>{
    const done=!!S.dailyStats.claimed[m.id];
    const value=missionProgress(m);
    const ready=value>=m.target;
    const card=document.createElement('div');
    card.className='mission-card'+(done?' done':'')+(ready&&!done?' ready':'');
    const pct=Math.round((value/m.target)*100);
    card.innerHTML=`
      <div class="mission-top"><div class="mission-title">${m.icon} ${m.title}</div><div class="mission-reward">+${m.reward} 🪙</div></div>
      <div class="mission-desc">${m.desc}</div>
      <div class="mission-bar"><div class="mission-fill" style="width:${pct}%"></div></div>
      <div class="mission-bottom"><div class="mission-progress">${value}/${m.target}</div><button class="btn mission-claim ${done?'claimed':''}" data-mission="${m.id}" ${(!ready||done)?'disabled':''}>${done?'Alındı':ready?'Ödülü Al':'Devam'}</button></div>`;
    box.appendChild(card);
  });
}
async function claimMission(id){
  ensureDailyStats();
  const m=todaysMissions().find(x=>x.id===id); if(!m) return;
  if(S.dailyStats.claimed[id]) return;
  if(missionProgress(m)<m.target){ msgModal('🎯','Görev tamamlanmadı','Bu ödülü almak için görevi tamamlamalısın.'); return; }
  S.dailyStats.claimed[id]=true;
  S.coins+=m.reward;
  await saveState();
  sndCoin();
  refreshMenu(); renderMissions();
  floatCoin('+'+m.reward+' 🪙', window.innerWidth/2-40, window.innerHeight/2-40);
}
function levelColorClass(lv){
  const t=levelThemeFor(lv).id;
  return t;
}
const LEVEL_ZONES=[
  {from:1,to:10,cls:'zone-blue',label:'1-10 Mavi Eğitim'},
  {from:11,to:20,cls:'zone-green',label:'11-20 Yeşil Hız'},
  {from:21,to:30,cls:'zone-orange',label:'21-30 Turuncu Yanıltma'},
  {from:31,to:40,cls:'zone-purple',label:'31-40 Mor Dikkat'},
  {from:41,to:50,cls:'zone-red',label:'41-50 Kırmızı Final'}
];
function renderLevelMap(){
  const grid=$('level-grid'); if(!grid) return;
  const best=Math.max(0,Number(S.bestLevel)||0);
  const unlocked=S.campaignCompleted?MAX_CLASSIC_LEVEL:Math.min(MAX_CLASSIC_LEVEL,best+1);
  const summary=$('level-map-summary');
  if(summary) summary.textContent='İlerleme: '+Math.min(best,MAX_CLASSIC_LEVEL)+'/'+MAX_CLASSIC_LEVEL+' • Sıradaki: '+Math.min(unlocked,MAX_CLASSIC_LEVEL);
  grid.innerHTML='';
  LEVEL_ZONES.forEach(zone=>{
    const section=document.createElement('div');
    section.className='zone-section';
    const header=document.createElement('div');
    header.className='zone-chip '+zone.cls;
    header.textContent=zone.label;
    section.appendChild(header);
    const path=document.createElement('div');
    path.className='level-path';
    for(let i=zone.from;i<=zone.to;i++){
      const btn=document.createElement('button');
      const locked=i>unlocked;
      const done=i<=best;
      btn.className='level-node '+levelColorClass(i)+(done?' done':'')+(i===unlocked&&!done?' next':'')+(locked?' locked':'')+(i===MAX_CLASSIC_LEVEL?' final':'');
      btn.textContent=i;
      btn.disabled=locked;
      btn.title=locked?'Bu bölüm kilitli':(done?'Geçildi':'Sıradaki bölüm');
      btn.addEventListener('click',()=>{ if(!locked) startGameAt(i); });
      const theme=levelThemeFor(i);
      btn.style.background = theme.id==='blue' ? 'linear-gradient(180deg,#65c0ff,#1d5f93)' :
        theme.id==='green' ? 'linear-gradient(180deg,#5fe198,#16774a)' :
        theme.id==='orange' ? 'linear-gradient(180deg,#ffaf5d,#b65a12)' :
        theme.id==='purple' ? 'linear-gradient(180deg,#b387ff,#5732a0)' :
        'linear-gradient(180deg,#ff7569,#9e1e19)';
      path.appendChild(btn);
    }
    section.appendChild(path);
    grid.appendChild(section);
  });
}
async function startGameAt(lv){
  isPaused=false; stopAllGameAudio();
  mode='classic'; level=Math.max(1,Math.min(Number(lv)||1,MAX_CLASSIC_LEVEL)); lives=MAX_LIVES; streak=0; adUsedThisRun=false; failuresSinceAd=0;
  playSessionStartedAt=Date.now(); consecutiveLifeLosses=0; longPlayRestTriggeredThisRun=false;
  resetRunPerkState();
  showScreen('screen-game');
  requestGameFullscreen();
  await saveRunState();
  startRound();
}
function finalConfettiBurst(){
  confetti();
  setTimeout(confetti,220);
  setTimeout(confetti,480);
  for(let i=0;i<18;i++) setTimeout(()=>floatCoin('🏆', Math.random()*window.innerWidth, window.innerHeight*(0.35+Math.random()*0.35)), i*40);
}

function updateHUD(){
  applyLevelTheme(level);
  $('coins-label').textContent=S.coins;
  $('combo-label').textContent=streak;
  if($('campaign-label')) $('campaign-label').textContent = mode==='classic' ? Math.min(level,MAX_CLASSIC_LEVEL)+'/'+MAX_CLASSIC_LEVEL : '∞';
  $('lives-pill').innerHTML='❤️ <span>'+lives+'</span><span style="opacity:.55">/'+MAX_LIVES+'</span>';
  const set=levelSettings(level);
  const extras=[];
  if(set.feints)extras.push('sahte hamle');
  if(set.colors)extras.push('yakın renkler');
  if(set.invis)extras.push('ışık/gölge');
  $('level-info').textContent=(mode==='endless'?'♾️ Sonsuz • Tur ':'Bölüm ')+level+(mode==='classic'?'/'+MAX_CLASSIC_LEVEL:'')+' • '+set.cupCount+' bardak'+(extras.length?' • ⚠️ '+extras.join(', '):'');
  syncGameChat();
}

/* ---------- Bardak oluşturma / konumlama ---------- */
function cupStyleForLevel(baseSkin,index,count,lv){
  // İlk 10 bölümde marketten seçilen bardak aktif kullanılır.
  // 11. bölümden sonra oyun kendi zorluk renklerine geçer.
  const capped=Math.max(1,Math.min(lv,MAX_CLASSIC_LEVEL));
  if(capped<=10){ return {body:baseSkin.css, rim:baseSkin.rim}; }

  // 50 bölüm renk akışı:
  // 11-20 yeşil, 21-30 turuncu, 31-40 mor geçiş, 41-50 kırmızı final.
  // Her 10'luk grubun başında bardaklar daha ayırt edilebilir; grubun sonuna doğru tonlar birbirine yaklaşır.
  const groups=[
    {name:'mavi',    start:1,  end:10, h:210, s:76, l:58},
    {name:'yeşil',   start:11, end:20, h:138, s:68, l:52},
    {name:'turuncu', start:21, end:30, h:30,  s:78, l:55},
    {name:'mor',     start:31, end:40, h:272, s:58, l:57},
    {name:'kırmızı', start:41, end:50, h:4,   s:72, l:52}
  ];
  const group=groups.find(g=>capped>=g.start && capped<=g.end) || groups[groups.length-1];
  const inGroup=(capped-group.start)/Math.max(1,(group.end-group.start)); // 0 → 1
  const global=difficultyRatio(capped);

  // Grup içinde yakınlaşma: ilk bölüm net, 10. bölümde çok daha benzer.
  // Final kırmızı grubunda yakınlık daha serttir.
  const startSpread = group.name==='kırmızı' ? 22 : group.name==='mor' ? 28 : 42;
  const endSpread   = group.name==='kırmızı' ? 5.4 : group.name==='mor' ? 7.2 : 10.0;
  const spread=startSpread + (endSpread-startSpread)*inGroup;

  const mid=(count-1)/2;
  const hueOffset=(index-mid)*(spread/Math.max(1,count-1));
  const microNoise=(Math.sin((index+1)*13.37+capped)*0.9)*(1-inGroup*0.75);
  const hue=(group.h+hueOffset+microNoise+360)%360;

  // Işık farkı da grup sonuna doğru azalır; böylece sadece renk tonu değil parlaklık da yakınlaşır.
  const lightSpread=(10 - inGroup*7.5) * (group.name==='kırmızı' ? 0.62 : 1);
  const lightOffset=(index-mid)*(lightSpread/Math.max(1,count-1));
  const sat=Math.round(group.s - global*7 - inGroup*5);
  const l2=Math.round(group.l + lightOffset);
  const l1=Math.round(Math.min(78,l2+13-inGroup*4));
  const l3=Math.round(Math.max(22,l2-16+inGroup*5));
  let body=`linear-gradient(180deg,hsl(${hue}, ${sat}%, ${l1}%),hsl(${hue}, ${sat}%, ${l2}%) 55%,hsl(${hue}, ${sat}%, ${l3}%))`;
  if(group.name==='mor'){
    body=`linear-gradient(115deg,rgba(255,255,255,.20),transparent 34%,rgba(0,0,0,.18) 68%,transparent),${body}`;
  }else if(group.name==='kırmızı'){
    body=`linear-gradient(100deg,rgba(255,255,255,.13),transparent 38%,rgba(0,0,0,.16) 74%),${body}`;
  }
  return {
    body,
    rim:`hsl(${hue}, ${sat}%, ${Math.max(18,l3-8)}%)`
  };
}
function ballStyleForLevel(selectedSkin,lv){
  const capped=Math.max(1,Math.min(lv,MAX_CLASSIC_LEVEL));
  if(capped<=10) return selectedSkin.css;
  const groups=[
    {start:11,end:20,css:'radial-gradient(circle at 32% 28%,#8affc9,#20c97a 55%,#0a7a48)'},
    {start:21,end:30,css:'radial-gradient(circle at 32% 28%,#ffe0a3,#ff9b3d 55%,#b85c13)'},
    {start:31,end:40,css:'radial-gradient(circle at 32% 28%,#d8b8ff,#8f5cff 55%,#43208a)'},
    {start:41,end:50,css:'radial-gradient(circle at 32% 28%,#ffaaa0,#e44236 55%,#8f1d18)'}
  ];
  const group=groups.find(g=>capped>=g.start && capped<=g.end) || groups[groups.length-1];
  return group.css;
}
function snapCupToSlot(cup){
  if(!cup || cup.slot==null || !slotPositions[cup.slot]) return;
  cup.x=slotPositions[cup.slot];
  setCupPos(cup,0,1);
  cup.el.style.zIndex=1+cup.slot;
}
function snapCupsToSlots(){
  const used=new Set();
  cups.forEach((cup,idx)=>{
    if(cup.slot==null || cup.slot<0 || cup.slot>=slotPositions.length || used.has(cup.slot)){ cup.slot=idx; }
    used.add(cup.slot);
    snapCupToSlot(cup);
  });
}

function buildCups(count){
  const table=$('table');
  cups.forEach(c=>c.el.remove()); cups=[];
  const W=table.clientWidth;
  const gap=10;
  const set=levelSettings(level);
  let cw=Math.min(Math.floor((W-20)/count)-gap, 108);
  if(set.zone==='green') cw=Math.floor(cw*.88);
  if(set.zone==='red') cw=Math.floor(cw*.94);
  const ch=Math.round(cw*1.18);
  const totalW=count*cw+(count-1)*gap;
  const startX=(W-totalW)/2;
  slotPositions=[];
  for(let s=0;s<count;s++) slotPositions.push(startX+s*(cw+gap));
  const skin=CUP_SKINS.find(s=>s.id===S.cupSkin)||CUP_SKINS[0];
  for(let i=0;i<count;i++){
    const el=document.createElement('div');
    el.className='cup cup-zone-'+(set.zone||levelThemeFor(level).id);
    el.style.width=cw+'px';el.style.height=ch+'px';
    const visual=cupStyleForLevel(skin,i,count,level);
    el.innerHTML='<div class="body" style="background:'+visual.body+'"></div><div class="rim" style="background:'+visual.rim+'"></div>';
    table.appendChild(el);
    const cup={el, x:slotPositions[i], slot:i, w:cw, h:ch};
    setCupPos(cup,0);
    el.addEventListener('pointerdown',()=>onCupTap(cup));
    cups.push(cup);
  }
  const ball=$('ball');
  const bs=BALL_SKINS.find(s=>s.id===S.ballSkin)||BALL_SKINS[0];
  ball.style.background=ballStyleForLevel(bs,level);
}
function setCupPos(cup,y,scale=1){
  cup.lastY=y; cup.lastScale=scale;
  cup.el.style.transform='translate('+cup.x+'px,'+y+'px) scale('+scale+')';
}
function placeBallAt(cup){
  const ball=$('ball');
  ball.style.left=(cup.x+cup.w/2-19)+'px';
  ball.style.display='block';
}
function hideBall(){ const ball=$('ball'); ball.classList.remove('var-review-ball'); ball.style.display='none'; }
function syncReviewBall(){
  const ball=$('ball');
  if(varrReviewing && ball.classList.contains('var-review-ball') && ballCup){ placeBallAt(ballCup); }
}
function hideBallDuringShuffle(){
  if(varrReviewing) return;
  const ball=$('ball');
  ball.classList.remove('var-review-ball');
  ball.style.display='none';
}

/* ---------- Animasyonlar ---------- */
function liftCup(cup,up=true,dur=320){
  return new Promise(res=>{
    let t0=performance.now(), pauseAt=0;
    function step(t){
      if(isPaused){ if(!pauseAt) pauseAt=t; requestAnimationFrame(step); return; }
      if(pauseAt){ t0 += t-pauseAt; pauseAt=0; }
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
    hideBallDuringShuffle();
    const xa=slotPositions[a.slot] ?? a.x;
    const xb=slotPositions[b.slot] ?? b.x;
    a.x=xa; b.x=xb;
    let t0=performance.now(), pauseAt=0;
    const d=difficultyRatio();

    // V20: kontrollü zor hareket. Bardaklar okunabilir hızda gider;
    // biri hafif yukarı, diğeri hafif aşağı salınır. Aşırı zıplama yok.
    const direction = ((a.slot + b.slot + Math.floor(level/2)) % 2 === 0) ? 1 : -1;
    const steady=(activeRoundPerks&&activeRoundPerks.steadyFactor)||1;
    const aPeak = direction * (8 + d*10) * steady;
    const bPeak = -direction * (8 + d*10) * steady;
    const wobblePower = (1.4 + d*2.8) * steady;

    a.el.style.zIndex=8;
    b.el.style.zIndex=7;
    sndSwap();
    function step(t){
      if(isPaused){ if(!pauseAt) pauseAt=t; requestAnimationFrame(step); return; }
      if(pauseAt){ t0 += t-pauseAt; pauseAt=0; }
      hideBallDuringShuffle();
      let p=Math.min((t-t0)/dur,1);
      let e=easeInOut(p);
      if(feint){ e = e<.5 ? e : (1-e); }
      const arc=Math.sin(p*Math.PI);
      const wobble=Math.sin(p*Math.PI*2)*wobblePower;
      a.x=xa+(xb-xa)*e; b.x=xb+(xa-xb)*e;
      setCupPos(a,aPeak*arc+wobble,1+0.018*arc);
      setCupPos(b,bPeak*arc-wobble,1-0.014*arc);
      syncReviewBall();
      if(p<1){requestAnimationFrame(step);}
      else{
        if(!feint){
          [a.slot,b.slot]=[b.slot,a.slot];
          snapCupToSlot(a); snapCupToSlot(b);
          syncReviewBall();
        }else{
          a.x=xa; b.x=xb;
          setCupPos(a,0); setCupPos(b,0);
        }
        a.el.style.zIndex=1+a.slot;
        b.el.style.zIndex=1+b.slot;
        hideBallDuringShuffle();
        res();
      }
    }
    requestAnimationFrame(step);
  });
}
function bobCup(cup,dur=260){
  return new Promise(res=>{
    hideBallDuringShuffle();
    const steady=(activeRoundPerks&&activeRoundPerks.steadyFactor)||1;
    const peak=(Math.random()<0.5?-1:1)*(6+Math.random()*(6+difficultyRatio()*10))*steady;
    let t0=performance.now(), pauseAt=0;
    const baseX=slotPositions[cup.slot] ?? cup.x;
    cup.x=baseX;
    function step(t){
      if(isPaused){ if(!pauseAt) pauseAt=t; requestAnimationFrame(step); return; }
      if(pauseAt){ t0 += t-pauseAt; pauseAt=0; }
      hideBallDuringShuffle();
      const p=Math.min((t-t0)/dur,1), arc=Math.sin(p*Math.PI);
      setCupPos(cup,peak*arc,1);
      if(p<1)requestAnimationFrame(step); else { snapCupToSlot(cup); hideBallDuringShuffle(); res(); }
    }
    requestAnimationFrame(step);
  });
}
function randomHue(cup){
  const d=difficultyRatio();
  const rotate=(Math.random()*(d>.45?14:38))-(d>.45?7:19);
  const bright=1+(Math.random()*(d>.45?0.055:0.095));
  cup.el.style.filter='hue-rotate('+rotate+'deg) brightness('+bright+')';
}
function removeHintLights(){
  document.querySelectorAll('.hint-floor-light').forEach(el=>el.remove());
}
function clearFx(){
  removeHintLights();
  cups.forEach(c=>{c.el.style.filter='';c.el.classList.remove('ghost','hintglow','liftable','eliminated','hint-target');});
}
function setHelperButtons(enabled){
  // Altın yetmezse butonu tamamen kilitlemiyoruz; oyuncuya neden çalışmadığını mesajla anlatıyoruz.
  $('btn-hint').textContent='💡 İpucu ('+HINT_COST+' 🪙)';
  $('btn-eliminate').textContent='🎯 Ele ('+ELIMINATE_COST+' 🪙)';
  $('btn-hint').disabled = !enabled || hintUsedThisRound;
  $('btn-eliminate').disabled = !enabled || eliminateUsedThisRound || cups.length<=3;
}
function stopChoiceTimer(){
  if(choiceTimerId){ clearTimeout(choiceTimerId); choiceTimerId=null; }
  if(choiceTimerRaf){ cancelAnimationFrame(choiceTimerRaf); choiceTimerRaf=null; }
  choiceTimeLeft=0; choiceTimeTotal=0; choiceLastTick=0;
}
function resetTimerBar(){
  $('timer-fill').style.width='100%';
  $('timer-fill').classList.remove('warn');
}
function startChoiceTimer(total=choiceTimeFor(level)){
  stopChoiceTimer();
  choiceTimeTotal=total;
  choiceTimeLeft=total;
  choiceLastTick=performance.now();
  const tick=(now)=>{
    if(!guessing){ choiceTimerRaf=null; return; }
    if(!isPaused){
      choiceTimeLeft -= Math.max(0, now-choiceLastTick);
      const ratio=Math.max(0, choiceTimeLeft/choiceTimeTotal);
      $('timer-fill').style.width=(ratio*100)+'%';
      $('timer-fill').classList.toggle('warn', ratio<.33);
      if(choiceTimeLeft<=0){ choiceTimerRaf=null; handleTimeout(); return; }
    }
    choiceLastTick=now;
    choiceTimerRaf=requestAnimationFrame(tick);
  };
  choiceTimerRaf=requestAnimationFrame(tick);
}
async function maybePlayFailureAd(){
  if(mode!=='classic' || lives<=0) return;
  failuresSinceAd++;
  if(failuresSinceAd>=FAILURE_AD_EVERY){
    failuresSinceAd=0;
    await playAdBreak('fail');
  }
}

async function maybeForceRestAfterLifeLoss(){
  if(lives<=0) return;
  const playedMs = Math.max(0, Date.now() - (playSessionStartedAt || Date.now()));
  let reasonText = '';
  if(consecutiveLifeLosses >= FORCE_REST_AFTER_CONSECUTIVE_LOSSES){
    reasonText = 'Üst üste '+FORCE_REST_AFTER_CONSECUTIVE_LOSSES+' can gitti. Kısa bir nefes al, sonra devam.';
    consecutiveLifeLosses = 0;
  }else if(!longPlayRestTriggeredThisRun && playedMs >= LONG_PLAY_REST_AFTER_MS){
    reasonText = '5 dakikadan fazla oynadın. İlk hatadan sonra kısa dinlenme zamanı.';
    longPlayRestTriggeredThisRun = true;
  }
  if(reasonText){
    await saveRunState();
    await showRestCountdown(reasonText);
  }
}

async function handleTimeout(){
  if(!guessing||busy)return;
  guessing=false;busy=true;stopChoiceTimer();setHelperButtons(false);clearFx();
  const shieldedCombo=useComboShieldIfReady();
  if(!shieldedCombo) streak=0;
  haptic(80); sndLose();
  await trackDailyStat('failures',1);
  await trackDailyStat('timeouts',1);
  $('status-msg').textContent='⏰ Süre bitti!'+(shieldedCombo?' 🛡️ Kombo korundu!':'');
  await wait(450);
  placeBallAt(ballCup);
  await liftCup(ballCup,true);
  lives--; consecutiveLifeLosses++; updateHUD();
  await saveRunState();
  await wait(1050);
  if(await recordCompetitiveRound(false)) return;
  if(lives<=0){ gameOver(); }
  else{ if(!isCompetitiveMode()){ await maybePlayFailureAd(); await maybeForceRestAfterLifeLoss(); } await liftCup(ballCup,false); hideBall(); startRound(); }
}


/* ---------- VAR yavaş çekim inceleme ---------- */
function cloneRoundRecord(record){
  try{ return JSON.parse(JSON.stringify(record)); }catch(e){ return null; }
}
function hideVarrButton(){
  const btn=$('btn-varr');
  if(btn){ btn.style.display='none'; btn.disabled=true; }
  if(varrOpportunityTimer){ clearTimeout(varrOpportunityTimer); varrOpportunityTimer=null; }
  varrOpportunityResolve=null;
}
function showVarrButton(){
  const btn=$('btn-varr');
  if(btn){
    btn.style.display='inline-block';
    btn.textContent='📹 VAR ('+VAR_COST+' 🪙)';
    btn.disabled=false;
    btn.title='Yavaş çekim inceleme: '+VAR_COST+' altın';
  }
}
function waitForVarrOpportunity(timeoutMs=4200){
  hideVarrButton();
  if(!lastRoundRecord) return Promise.resolve(false);
  showVarrButton();
  $('status-msg').textContent='📹 VAR incelemesi '+VAR_COST+' altın. Yavaş çekimde izleyebilirsin!';
  return new Promise(res=>{
    let done=false;
    varrOpportunityResolve=()=>{
      if(done) return;
      done=true;
      hideVarrButton();
      res(true);
    };
    varrOpportunityTimer=setTimeout(()=>{
      if(done) return;
      done=true;
      hideVarrButton();
      res(false);
    },timeoutMs);
  });
}
async function playVarrReview(record){
  if(!record || !Array.isArray(record.swaps)) return;
  varrReviewing=true;
  hideVarrButton();
  stopAllGameAudio();
  stopChoiceTimer();
  setHelperButtons(false);
  clearFx();
  guessing=false; busy=true; isPaused=false;
  $('screen-game').classList.add('varr-reviewing');
  $('status-msg').textContent='📹 VAR: Topun hareketi yavaş çekimde izleniyor';
  resetTimerBar();
  $('timer-fill').style.width='0%';

  const oldLevel=level;
  level=record.level || oldLevel;
  buildCups(record.cupCount || Math.max(3,cups.length||3));
  ballCup=cups[Math.max(0,Math.min(record.ballIndex||0,cups.length-1))] || cups[0];
  const ball=$('ball');
  ball.classList.add('var-review-ball');
  placeBallAt(ballCup);
  await wait(220);
  await liftCup(ballCup,true,380);
  $('status-msg').textContent='👀 VAR: Top başlangıçta bu bardağın içindeydi';
  await wait(380);
  await liftCup(ballCup,false,380);
  placeBallAt(ballCup);
  await wait(160);

  const durBase=Math.max(340, (levelSettings(level).dur || 220) * 1.8);
  for(const ev of record.swaps){
    if(!ev || !cups[ev.i] || !cups[ev.j]) continue;
    await swapCups(cups[ev.i],cups[ev.j],durBase,!!ev.feint);
    syncReviewBall();
    await wait(30);
  }
  snapCupsToSlots();
  syncReviewBall();
  const selectedCup = cups.find(c=>c.slot===record.selectedSlot) || cups[record.selectedIndex] || null;
  if(ballCup){ ballCup.el.classList.add('var-correct-pick'); }
  if(selectedCup && selectedCup!==ballCup){
    selectedCup.el.classList.add('var-wrong-pick');
    sndVarAlarm();
    haptic([35,45,35,45,55]);
  }
  $('status-msg').textContent='✅ VAR: Top burada, hatalı seçimin kırmızı ışıkla gösterildi';
  await wait(1200);
  if(ballCup){ ballCup.el.classList.remove('var-correct-pick'); }
  if(selectedCup){ selectedCup.el.classList.remove('var-wrong-pick'); }
  $('screen-game').classList.remove('varr-reviewing');
  hideBall();
  level=oldLevel;
  varrReviewing=false;
  busy=false;
}

/* ---------- Tur akışı ---------- */
async function startRound(){
  isPaused=false;
  stopChoiceTimer(); resetTimerBar();
  hideVarrButton();
  busy=true; guessing=false; hintUsedThisRound=false; eliminateUsedThisRound=false; varrUsedThisRound=false;
  activeRoundPerks=activeSkinPerks(level);
  updateHUD();
  await saveRunState();
  const set=levelSettings(level);
  buildCups(set.cupCount);
  ballCup=cups[rand(cups.length)];
  currentRoundRecord={level,mode,cupCount:set.cupCount,ballIndex:cups.indexOf(ballCup),swaps:[]};
  $('status-msg').textContent='👀 Topu izle!';
  setHelperButtons(false);

  await wait(500);
  placeBallAt(ballCup);
  await liftCup(ballCup,true);
  if(activeRoundPerks.xrayMs){ $('ball').classList.add('xray-ball'); }
  await wait(650 + activeRoundPerks.xrayMs);
  $('ball').classList.remove('xray-ball');
  await liftCup(ballCup,false);
  hideBall();
  hideBallDuringShuffle();
  await wait(320);

  $('status-msg').textContent= level>=45 ? '🔥 Final bölgesi… çok dikkat!' : '🔀 Dikkat, karışıyor…';
  for(let k=0;k<set.swaps;k++){
    let i=rand(cups.length), j=rand(cups.length);
    while(j===i) j=rand(cups.length);
    const feint = set.feints && Math.random() < (set.feintChance || .16);
    if(set.invis && Math.random()<(set.ghostChance || 0)){
      cups[i].el.classList.add('ghost');cups[j].el.classList.add('ghost');
    }
    if(set.colors && Math.random()<(set.colorChance || .22)){ randomHue(cups[rand(cups.length)]); }
    if(currentRoundRecord){ currentRoundRecord.swaps.push({i,j,feint:!!feint}); }
    const moveDur=set.dur * (k<2 ? activeRoundPerks.slowStartFactor : 1);
    await swapCups(cups[i],cups[j],moveDur,feint);
    cups[i].el.classList.remove('ghost');cups[j].el.classList.remove('ghost');

    // V20: sahte hareketler artık aynı anda kaos yaratmıyor;
    // yavaş ve kontrollü şekilde araya giriyor.
    if(level>=8 && k%3===1 && Math.random() < (set.bobChance || 0)){
      const decoys=cups.filter((_,idx)=>idx!==i && idx!==j);
      if(decoys.length) await bobCup(decoys[rand(decoys.length)], Math.max(150,set.dur*0.55));
    }
    await wait(shufflePauseFor(level));
    snapCupsToSlots();
    hideBallDuringShuffle();
  }
  cups.forEach(c=>c.el.style.filter='');
  snapCupsToSlots();

  $('status-msg').textContent='❓ Top nerede?';
  cups.forEach(c=>c.el.classList.add('liftable'));
  if(set.finalZone){ cups.forEach(c=>c.el.classList.add('danger-wiggle')); setTimeout(()=>cups.forEach(c=>c.el.classList.remove('danger-wiggle')),900); }
  guessing=true; busy=false;
  setHelperButtons(true);
  startChoiceTimer();
  syncGameChat();
}

async function onCupTap(cup){
  if(!guessing||busy||cup.el.classList.contains('eliminated'))return;
  guessing=false;busy=true;
  stopChoiceTimer();
  setHelperButtons(false);
  clearFx();
  haptic(22);

  if(cup===ballCup){
    placeBallAt(cup);
    await liftCup(cup,true);
    const comebackWin = consecutiveLifeLosses>=2;
    consecutiveLifeLosses=0;
    streak++;
    let lifeRewardText='';
    let lifeCoinBonus=0;
    if(streak>0 && streak % COMBO_LIFE_INTERVAL === 0){
      if(lives < MAX_LIVES){
        lives++;
        lifeRewardText=' • ❤️ +1 can';
        haptic(35);
      }else{
        lifeCoinBonus=25;
        lifeRewardText=' • ❤️ can dolu: +25 🪙';
      }
    }
    const rawBaseReward=rewardFor(level);
    let baseReward=rawBaseReward;
    let helperRewardText='';
    if(hintUsedThisRound){
      baseReward=HINT_REWARD;
      helperRewardText=' • 💡 ipuçlu ödül';
    }else if(eliminateUsedThisRound){
      baseReward=ELIMINATE_REWARD;
      helperRewardText=' • 🎯 elemeli ödül';
    }
    const skinPerks=activeSkinPerks(level);
    const skinCoinBonus=skinPerks.coinBoost||0;
    const comboBonus=comboBonusFor(streak);
    const reward=baseReward+comboBonus+lifeCoinBonus+skinCoinBonus;
    S.coins+=reward;
    S.bestCombo=Math.max(S.bestCombo||0,streak);
    if(mode==='classic') S.bestLevel=Math.max(S.bestLevel,level);
    else if(mode==='endless') S.bestEndless=Math.max(S.bestEndless,level);
    const cleanWin = !hintUsedThisRound && !eliminateUsedThisRound && !varrUsedThisRound;
    await recordDailyWin(cleanWin,{noHintWin:!hintUsedThisRound,noVarWin:!varrUsedThisRound,comebackWin,sportBallWin:isSportBallActive()});
    await saveState();
    sndWin();sndCoin(); if(streak>=3) sndCombo(); confetti();
    const r=cup.el.getBoundingClientRect();
    floatCoin('+'+reward+' 🪙', r.left+r.width/2-30, r.top-10);
    const comboText = helperRewardText + (comboBonus ? ' • 🔥 '+streak+'x kombo +'+comboBonus : '') + (skinCoinBonus ? ' • 🎨 skin +'+skinCoinBonus : '') + lifeRewardText;
    $('status-msg').textContent='🎉 Doğru! +'+reward+' 🪙'+comboText;
    $('combo-label').parentElement.classList.add('combo-burst');
    setTimeout(()=>$('combo-label').parentElement.classList.remove('combo-burst'),300);
    updateHUD();
    await wait(1300);
    if(await recordCompetitiveRound(true)) return;
    const clearedLevel = level;
    if(mode==='classic' && clearedLevel >= MAX_CLASSIC_LEVEL){
      completeCampaign();
      return;
    }
    level++;
    await saveRunState();
    if(mode==='classic' && clearedLevel % AD_BREAK_EVERY_LEVEL === 0){
      await showRestCountdown('Bölüm '+clearedLevel+' bitti. Sıradaki raunta hazırlan.');
    }
    startRound();
  }else{
    await liftCup(cup,true);          // boş bardak
    sndLose();
    await trackDailyStat('failures',1);
    const near = Math.abs((cup.slot||0)-(ballCup.slot||0))===1;
    $('status-msg').textContent = near ? '😬 Çok yakındı!' : '😵 Yanlış bardak!';
    $('screen-game').classList.add('screen-shake');
    setTimeout(()=>$('screen-game').classList.remove('screen-shake'),320);
    await wait(500);
    placeBallAt(ballCup);
    await liftCup(ballCup,true);      // doğrusunu göster
    const shieldedCombo=useComboShieldIfReady();
    if(!shieldedCombo) streak=0;
    lives--;
    consecutiveLifeLosses++;
    lastRoundRecord=cloneRoundRecord(currentRoundRecord);
    if(lastRoundRecord){
      lastRoundRecord.selectedSlot = cup.slot;
      lastRoundRecord.selectedIndex = cups.indexOf(cup);
    }
    if(shieldedCombo) $('status-msg').textContent+=' 🛡️ Kombo korundu!';
    updateHUD();
    await saveRunState();
    await wait(900);
    const wantsVarr=await waitForVarrOpportunity(4200);
    if(wantsVarr){ await playVarrReview(lastRoundRecord); }
    if(await recordCompetitiveRound(false)) return;
    if(lives<=0){ gameOver(); }
    else{
      if(!isCompetitiveMode()){ await maybePlayFailureAd(); await maybeForceRestAfterLifeLoss(); }
      // V21 düzeltme: VAR izlendiyse bardaklar zaten yeniden kurulur;
      // eski (DOM'dan kopmuş) bardaklara animasyon yapıp boşa beklenmez.
      if(!wantsVarr){
        await liftCup(cup,false).catch(()=>{});
        await liftCup(ballCup,false).catch(()=>{});
      }
      hideBall();
      startRound();
    }
  }
}



async function showRestCountdown(reason='rest'){
  stopAllGameAudio();
  $('modal-adbreak').querySelector('h2').textContent = 'Dinlenme';
  const text = typeof reason==='string' && reason && reason!=='rest' ? reason : 'Bir sonraki hamleye hazırlan...';
  $('modal-adbreak').querySelector('p').innerHTML = text+'<br><span id="adbreak-count" style="font-size:34px;font-family:\'Nunito\',system-ui,sans-serif;font-weight:900;color:var(--gold)">'+REST_SECONDS+'</span>';
  modal('modal-adbreak',true);
  let n=REST_SECONDS; $('adbreak-count').textContent=n;
  await new Promise(res=>{
    const iv=setInterval(()=>{
      n--; $('adbreak-count').textContent=n;
      if(n<=0){ clearInterval(iv); modal('modal-adbreak',false); res(); }
    },1000);
  });
}

async function playAdBreak(clearedLevelOrReason, opts={}){
  // Reklam entegrasyonu için kanca burada tutuluyor; şu an kullanıcıya reklam bildirimi gösterilmiyor.
  stopAllGameAudio();
  if(!AD_NOTICES_ENABLED) return;
}

async function completeCampaign(){
  busy=false; guessing=false; stopChoiceTimer(); setHelperButtons(false); await clearRunState();
  document.body.classList.add('final-victory');
  setTimeout(()=>document.body.classList.remove('final-victory'),3600);
  let bonus = 0;
  if(!S.campaignCompleted){ bonus = 750; S.coins += bonus; S.campaignCompleted = true; }
  S.bestLevel = Math.max(S.bestLevel||0, MAX_CLASSIC_LEVEL);
  await saveState();
  sndWin(); finalConfettiBurst();
  $('complete-stats').innerHTML = 'Tebrikler! 50 bölümün tamamını bitirdin ve Final Ustası oldun.<br><br>🏆 Final ödülü: '+(bonus?('+'+bonus+' 🪙'):'daha önce alındı')+'<br>🔥 En iyi kombo: '+(S.bestCombo||0)+'x<br>🪙 Toplam altın: '+S.coins+'<br><br>Şimdi bölümleri tekrar deneyip kusursuz seri yapabilirsin.';
  modal('modal-complete');
}

function gameOver(){
  if(isCompetitiveMode() && S.online && S.online.activeMatch){
    finishCompetitiveMatch(true);
    return;
  }
  busy=false; stopChoiceTimer(); setHelperButtons(false); clearRunState();
  const label = mode==='endless' ? 'Sonsuz modda '+(level-1)+' tur dayandın!' : 'Bölüm '+Math.min(level,MAX_CLASSIC_LEVEL)+'/'+MAX_CLASSIC_LEVEL+' seviyesine ulaştın!';
  $('gameover-stats').innerHTML=label+'<br>En iyi kombo: '+(S.bestCombo||0)+'x<br>Toplam altın: '+S.coins+' 🪙<br><br>Çok yaklaştın. Bir deneme daha genelde yeter.';
  $('btn-ad-revive').style.display = adUsedThisRun ? 'none' : 'inline-block';
  modal('modal-gameover');
}

async function startGame(m){
  isPaused=false; stopAllGameAudio();
  ensureOnlineState();
  if(m==='classic' || m==='endless'){
    S.online.activeMatch=null;
    S.online.pendingMatch=null;
    await saveState();
  }
  mode=m; level=1; lives=MAX_LIVES; streak=0; adUsedThisRun=false; failuresSinceAd=0;
  playSessionStartedAt=Date.now(); consecutiveLifeLosses=0; longPlayRestTriggeredThisRun=false;
  resetRunPerkState();
  showScreen('screen-game');
  requestGameFullscreen();
  await saveRunState();
  startRound();
}
async function startCompetitiveGame(source){
  isPaused=false; stopAllGameAudio();
  mode=source;
  level=1; lives=MAX_LIVES; streak=0; adUsedThisRun=false; failuresSinceAd=0;
  playSessionStartedAt=Date.now(); consecutiveLifeLosses=0; longPlayRestTriggeredThisRun=false;
  resetRunPerkState();
  showScreen('screen-game');
  requestGameFullscreen();
  startRound();
}

$('btn-varr').addEventListener('click',async ()=>{
  if(!varrOpportunityResolve) return;
  if(S.coins < VAR_COST){
    msgModal('🪙','VAR için altın gerekli','VAR incelemesi '+VAR_COST+' altın ister. Şu an '+S.coins+' altının var.');
    return;
  }
  S.coins -= VAR_COST;
  await trackDailyStat('varUses',1);
  varrUsedThisRound=true;
  await saveState();
  updateHUD();
  varrOpportunityResolve();
});

/* ---------- İpucu ---------- */
function createHintLightForCup(cup,asDecoy=false){
  const light=document.createElement('div');
  light.className='hint-floor-light'+(asDecoy?' decoy':'');
  light.style.left=(cup.x+cup.w/2)+'px';
  light.style.width=Math.max(74, Math.min(112, cup.w*1.18))+'px';
  $('table').appendChild(light);
  setTimeout(()=>light.remove(),1550 + activeSkinPerks(level).focusMs);
  return light;
}
function getRegionalHintCups(){
  const result=[ballCup];
  const candidates=cups
    .filter(c=>c!==ballCup && !c.el.classList.contains('eliminated'))
    .map(c=>({cup:c,dist:Math.abs((c.slot||0)-(ballCup.slot||0))}))
    .sort((a,b)=>a.dist-b.dist || Math.random()-.5);
  if(candidates.length){ result.push(candidates[0].cup); }
  return result.sort(()=>Math.random()-.5).slice(0,2);
}
$('btn-hint').addEventListener('click',async ()=>{
  if(!guessing||hintUsedThisRound)return;
  if(S.coins<HINT_COST){
    msgModal('💡','İpucu nasıl çalışır?','İpucu kesin bardağı söylemez. Topun olabileceği en fazla 2 bölgenin altından kısa ışık verir. Kullanmak için '+HINT_COST+' altın gerekir.');
    return;
  }
  S.coins-=HINT_COST; hintUsedThisRound=true; await trackDailyStat('hintUses',1); await saveState();
  updateHUD(); setHelperButtons(true); haptic(22); removeHintLights();
  $('status-msg').textContent='💡 İpucu: Işıklı bölgelerden biri olabilir!';
  const regional=getRegionalHintCups();
  regional.forEach(c=>createHintLightForCup(c,c!==ballCup));
  await wait(1500 + activeSkinPerks(level).focusMs);
  removeHintLights();
  if(guessing) $('status-msg').textContent='❓ Top nerede?';
});
$('btn-eliminate').addEventListener('click',async ()=>{
  if(!guessing||eliminateUsedThisRound)return;
  if(S.coins<ELIMINATE_COST){ msgModal('🎯','Eleme gücü','Eleme, yanlış bardaklardan birini kaldırır. Kullanmak için '+ELIMINATE_COST+' altın gerekir.'); return; }
  const wrongs=cups.filter(c=>c!==ballCup && !c.el.classList.contains('eliminated'));
  if(!wrongs.length)return;
  S.coins-=ELIMINATE_COST; eliminateUsedThisRound=true; await trackDailyStat('eliminateUses',1); await saveState();
  haptic(18); sndCoin(); updateHUD(); setHelperButtons(true);
  const removeCount = Math.min(level>=7?2:1, wrongs.length);
  for(let n=0;n<removeCount;n++){
    const i=rand(wrongs.length);
    const c=wrongs.splice(i,1)[0];
    c.el.classList.remove('liftable');
    c.el.classList.add('eliminated');
  }
  $('status-msg').textContent='🎯 Yanlış bardak elendi!';
});

/* ---------- Reklam simülasyonu ---------- */
function playAd(){
  // Gerçek ödüllü reklam eklenecek aşamaya kadar ekranda reklam bildirimi gösterme.
  if(!AD_NOTICES_ENABLED) return Promise.resolve();
  return Promise.resolve();
}
$('btn-ad-revive').addEventListener('click',async ()=>{
  modal('modal-gameover',false);
  await playAd();
  adUsedThisRun=true; lives=1;
  updateHUD();
  await saveRunState();
  msgModal('❤️','Can kazandın!','+1 can ile devam ediyorsun. Bol şans!');
  startRound();
});

/* ---------- Günlük ödül ---------- */
async function checkDaily(){
  ensureDailyStats();
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
  sanitizeState();
  const grid=$('shop-grid');grid.innerHTML='';
  const list = shopTab==='cup'?CUP_SKINS:BALL_SKINS;
  const owned = shopTab==='cup'?S.ownedCups:S.ownedBalls;
  const selected = shopTab==='cup'?S.cupSkin:S.ballSkin;
  list.forEach(sk=>{
    const card=document.createElement('div');
    const isOwned=owned.includes(sk.id);
    const isSelected=selected===sk.id;
    const tier=(sk.tier||'common');
    card.className='skin-card shop-card '+shopTab+'-card tier-'+tier+(isSelected?' selected':'')+(isOwned?' owned':' locked');
    card.dataset.id=sk.id;
    card.dataset.owned=isOwned?'true':'false';
    card.dataset.selected=isSelected?'true':'false';
    card.tabIndex=isOwned?0:-1;
    card.setAttribute('role',isOwned?'button':'group');
    card.setAttribute('aria-label',sk.name+(isSelected?' seçili':isOwned?' seçilebilir':' satın alınabilir'));
    const icon = shopTab==='ball' && sk.icon ? '<span class="skin-sport-icon">'+sk.icon+'</span>' : '';
    const prev = shopTab==='cup'
      ? '<div class="skin-preview-frame"><div class="skin-preview-cup" style="background:'+sk.css+'"></div></div>'
      : '<div class="skin-preview-frame ball-frame"><div class="skin-preview-ball" style="background:'+sk.css+'"></div>'+icon+'</div>';
    const status = isSelected ? 'Seçili' : isOwned ? 'Sahip olduğun ürün' : 'Kilitli ürün';
    const perkLine=perkTextFor(sk);
    const desc = shopTab==='cup' ? 'İlk 10 bölümde bardak olarak görünür' : 'İlk 10 bölümde top olarak kullanılır';
    let btn;
    if(isSelected){
      btn='<button class="btn skin-btn equipped" data-act="select" data-id="'+sk.id+'">✔ Kullanılıyor</button>';
    }else if(isOwned){
      btn='<button class="btn skin-btn secondary select-btn" data-act="select" data-id="'+sk.id+'">Seç</button>';
    }else{
      btn='<button class="btn skin-btn buy" data-act="buy" data-id="'+sk.id+'"><span>Satın Al</span></button>';
    }
    card.innerHTML='\
      <div class="skin-card-head"><div class="skin-badge">'+tierLabelFor(sk)+'</div><div class="skin-owned-mark">'+(isSelected?'✓':isOwned?'•':'🔒')+'</div></div>\
      '+prev+'\
      <div class="skin-info">\
        <div class="skin-name">'+sk.name+'</div>\
        <div class="skin-desc">'+desc+'</div>\
        <div class="skin-perk">'+perkLine+'</div>\
      </div>\
      <div class="skin-tag-row">'+(sk.tag||'Skin')+'</div>\
      <div class="skin-price-row '+(isOwned?'owned-row':'')+'">'+(isOwned?status:'Fiyat: '+sk.price+' 🪙')+'</div>\
      '+btn;
    grid.appendChild(card);
  });
}
async function applyShopAction(id,act){
  const list = shopTab==='cup'?CUP_SKINS:BALL_SKINS;
  const sk=list.find(s=>s.id===id);
  if(!sk) return;
  const owned = shopTab==='cup'?S.ownedCups:S.ownedBalls;
  if(act==='buy'){
    if(owned.includes(id)){ act='select'; }
    else{
      if(S.coins<sk.price){ msgModal('🪙','Yetersiz altın','Bu ürün için '+sk.price+' altın gerekiyor. Oyna ve kazan!'); return; }
      S.coins-=sk.price;
      owned.push(id);
      sndCoin();
      act='select';
    }
  }
  if(act==='select'){
    if(!owned.includes(id)){ msgModal('🔒','Önce satın al','Bu ürünü kullanmak için önce satın almalısın.'); return; }
    if(shopTab==='cup') S.cupSkin=id; else S.ballSkin=id;
  }
  await saveState();refreshMenu();renderShop();
}
$('shop-grid').addEventListener('click',async e=>{
  const b=e.target.closest('button[data-act]');
  if(b){ await applyShopAction(b.dataset.id,b.dataset.act); return; }
  const card=e.target.closest('.shop-card[data-owned="true"]');
  if(card) await applyShopAction(card.dataset.id,'select');
});
$('shop-grid').addEventListener('keydown',async e=>{
  if(e.key!=='Enter' && e.key!==' ') return;
  const card=e.target.closest('.shop-card[data-owned="true"]');
  if(card){ e.preventDefault(); await applyShopAction(card.dataset.id,'select'); }
});
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');shopTab=t.dataset.tab;renderShop();
}));


/* ---------- Durdurma modu ---------- */

async function pauseGame(){
  // V21 düzeltme: istatistik artık yalnızca geçerli bir duraklatmada sayılır.
  if(currentScreenId!=='screen-game' || pauseAdBusy || $('modal-gameover').classList.contains('show') || $('modal-complete').classList.contains('show')) return;
  await trackDailyStat('pauseUses',1);
  isPaused=true;
  pauseAdBusy=true;
  await saveRunState();
  stopAllGameAudio();
  $('pause-stats').innerHTML='Bölüm '+level+(mode==='classic'?'/'+MAX_CLASSIC_LEVEL:'')+'<br>Can: '+lives+'/'+MAX_LIVES+' • Kombo: '+streak+'x';
  modal('modal-pause',true);
  pauseAdBusy=false;
}
function resumePausedGame(){
  modal('modal-pause',false);
  isPaused=false;
  choiceLastTick=performance.now();
}

/* ---------- Menü / navigasyon ---------- */
function refreshMenu(){
  updatePlayerWelcome();
  $('menu-coins').textContent=S.coins;
  $('best-level').textContent=S.bestLevel||'–';
  $('best-endless').textContent=S.bestEndless||'–';
  $('best-combo').textContent=(S.bestCombo||0)||'–';
  if($('campaign-progress')) $('campaign-progress').textContent=(Math.min(S.bestLevel||0,MAX_CLASSIC_LEVEL))+'/'+MAX_CLASSIC_LEVEL;
}
$('btn-pause').addEventListener('click',pauseGame);
$('btn-pause-resume').addEventListener('click',resumePausedGame);
$('btn-pause-menu').addEventListener('click',async ()=>{modal('modal-pause',false);isPaused=false;busy=false;guessing=false;stopChoiceTimer();stopAllGameAudio();await clearRunState();refreshMenu();showScreen('screen-menu');});
$('btn-classic').addEventListener('click',()=>startGame('classic'));
$('btn-endless').addEventListener('click',()=>startGame('endless'));
$('btn-levels').addEventListener('click',()=>{stopAllGameAudio();renderLevelMap();showScreen('screen-levels');});
$('btn-levels-back').addEventListener('click',()=>{refreshMenu();showScreen('screen-menu');});
$('btn-missions').addEventListener('click',()=>{stopAllGameAudio();ensureDailyStats();renderMissions();showScreen('screen-missions');});
$('btn-missions-back').addEventListener('click',()=>{refreshMenu();showScreen('screen-menu');});
$('missions-list').addEventListener('click',e=>{ const b=e.target.closest('button[data-mission]'); if(b) claimMission(b.dataset.mission); });
$('btn-league').addEventListener('click',()=>{stopAllGameAudio();ensureWeeklyLeague();renderWeeklyLeague();showScreen('screen-league');});
$('btn-league-back').addEventListener('click',()=>{refreshMenu();showScreen('screen-menu');});
$('btn-shop').addEventListener('click',()=>{stopAllGameAudio();showScreen('screen-shop');renderShop();});
$('btn-shop-back').addEventListener('click',()=>{stopAllGameAudio();refreshMenu();showScreen('screen-menu');});
$('btn-friends').addEventListener('click',()=>{stopAllGameAudio();showScreen('screen-friends');});
$('btn-friends-back').addEventListener('click',()=>{refreshMenu();showScreen('screen-menu');});
$('btn-create-room').addEventListener('click',()=>createRoomMock());
$('btn-join-room').addEventListener('click',()=>joinRoomMock($('room-code-input').value));
$('room-code-input').addEventListener('input',e=>{ e.target.value=String(e.target.value||'').replace(/\D/g,'').slice(0,4); });
$('room-code-input').addEventListener('keydown',e=>{ if(e.key==='Enter') $('btn-join-room').click(); });
$('btn-room-leave').addEventListener('click',()=>leaveRoomMock());
$('btn-copy-room').addEventListener('click',async ()=>{
  const code=(S.online&&S.online.room&&S.online.room.code)||'';
  try{ if(navigator.clipboard) await navigator.clipboard.writeText(code); msgModal('📋','Kod kopyalandı',code); }
  catch(e){ msgModal('📋','Oda kodu',code); }
});
$('btn-share-room').addEventListener('click',async ()=>{
  const code=(S.online&&S.online.room&&S.online.room.code)||'';
  const text='🎯 Top Bulmaca\'da bana katıl! Oda kodum: '+code+'\nUygulamayı aç, "Arkadaşla Oyna" > "Odaya Katıl" ile bu kodu gir.';
  try{ if(navigator.share) await navigator.share({title:'Top Bulmaca',text}); else msgModal('🔗','Paylaş',text); }
  catch(e){}
});
$('room-round-select').addEventListener('click',async e=>{
  const b=e.target.closest('button[data-rounds]'); if(!b || b.disabled) return;
  ensureOnlineState();
  if(!S.online.room) return;
  S.online.room.rounds=Number(b.dataset.rounds)||5;
  await saveState();
  renderRoom();
});
$('btn-room-ready').addEventListener('click',async ()=>{
  ensureOnlineState();
  if(!S.online.room) return;
  S.online.room.ready=!S.online.room.ready;
  const me=(S.online.room.players||[]).find(p=>p.id==='me');
  if(me) me.ready=S.online.room.ready;
  S.online.room.chat.push(systemChat(S.online.room.ready?'Hazır oldun.':'Hazır durumundan çıktın.'));
  await saveState();
  renderRoom();
});
$('btn-room-start').addEventListener('click',()=>{
  ensureOnlineState();
  if(!S.online.room || !S.online.room.ready){ msgModal('⏳','Hazır değilsin','Maçı başlatmadan önce hazır olmalısın.'); return; }
  startFriendMatchMock();
});
$('btn-chat-send').addEventListener('click',async ()=>{
  const input=$('chat-input');
  await sendChatMock(input.value);
  input.value='';
});
$('chat-input').addEventListener('keydown',e=>{ if(e.key==='Enter') $('btn-chat-send').click(); });
$('emoji-row').addEventListener('click',e=>{ const b=e.target.closest('button'); if(b) sendEmojiMock(b.textContent); });
$('btn-game-chat-send').addEventListener('click',async ()=>{
  const input=$('game-chat-input');
  await sendChatMock(input.value);
  input.value='';
});
$('game-chat-input').addEventListener('keydown',e=>{ if(e.key==='Enter') $('btn-game-chat-send').click(); });
$('game-chat-input').addEventListener('focus',()=>{ const p=$('game-chat'); if(p) p.classList.remove('soft'); });
$('btn-race-play').addEventListener('click',()=>beginCompetitiveGame());
$('btn-race-room').addEventListener('click',()=>{renderRoom();showScreen('screen-room');});
$('btn-race-menu').addEventListener('click',async ()=>{ensureOnlineState();S.online.activeMatch=null;await saveState();refreshMenu();showScreen('screen-menu');});
$('btn-matchmaking').addEventListener('click',()=>{stopAllGameAudio();renderMatchmaking();showScreen('screen-matchmaking');});
$('btn-matchmaking-back').addEventListener('click',()=>{if(mockSearchTimer) clearTimeout(mockSearchTimer);refreshMenu();showScreen('screen-menu');});
$('btn-find-match').addEventListener('click',async e=>{const btn=e.currentTarget;btn.disabled=true;await findMatchMock();btn.disabled=false;});
$('btn-start-found-match').addEventListener('click',()=>beginCompetitiveGame());
$('btn-tournament').addEventListener('click',()=>{stopAllGameAudio();renderTournament();showScreen('screen-tournament');});
$('btn-tournament-back').addEventListener('click',()=>{refreshMenu();showScreen('screen-menu');});
$('tournament-list').addEventListener('click',e=>{ const b=e.target.closest('button[data-tournament]'); if(b) startTournamentMock(b.dataset.tournament); });
$('btn-tournament-play').addEventListener('click',()=>prepareTournamentRound());
$('btn-quit').addEventListener('click',async ()=>{isPaused=false;busy=false;guessing=false;stopChoiceTimer();stopAllGameAudio();await clearRunState();refreshMenu();showScreen('screen-menu');});
$('btn-retry').addEventListener('click',()=>{modal('modal-gameover',false);startGame(mode);});
$('btn-go-menu').addEventListener('click',async ()=>{modal('modal-gameover',false);isPaused=false;busy=false;guessing=false;stopChoiceTimer();stopAllGameAudio();await clearRunState();refreshMenu();showScreen('screen-menu');});
$('btn-msg-ok').addEventListener('click',()=>modal('modal-msg',false));
$('btn-complete-retry').addEventListener('click',()=>{modal('modal-complete',false);startGame('classic');});
$('btn-complete-menu').addEventListener('click',async ()=>{modal('modal-complete',false);isPaused=false;stopAllGameAudio();await clearRunState();refreshMenu();showScreen('screen-menu');});
$('btn-resume-run').addEventListener('click',async ()=>{
  modal('modal-resume',false);
  const run=pendingResumeRun;
  if(!run){ checkDaily(); return; }
  isPaused=false; stopAllGameAudio();
  mode=run.mode||'classic'; level=Math.max(1,Math.min(Number(run.level)||1, mode==='classic'?MAX_CLASSIC_LEVEL:9999));
  lives=Math.max(1,Math.min(Number(run.lives)||MAX_LIVES,MAX_LIVES));
  streak=Math.max(0,Number(run.streak)||0);
  failuresSinceAd=Math.max(0,Number(run.failuresSinceAd)||0);
  adUsedThisRun=!!run.adUsedThisRun;
  comboShieldAvailable=typeof run.comboShieldAvailable==='boolean' ? run.comboShieldAvailable : !!activeSkinPerks(level).comboShield;
  playSessionStartedAt=Number(run.playSessionStartedAt)||Date.now();
  consecutiveLifeLosses=Math.max(0,Number(run.consecutiveLifeLosses)||0);
  longPlayRestTriggeredThisRun=!!run.longPlayRestTriggeredThisRun;
  showScreen('screen-game');
  requestGameFullscreen();
  await saveRunState();
  startRound();
});
$('btn-new-run').addEventListener('click',async ()=>{modal('modal-resume',false);pendingResumeRun=null;await clearRunState();checkDaily();});


$('avatar-row').addEventListener('click',e=>{
  const b=e.target.closest('button[data-avatar]'); if(!b) return;
  nameModalAvatarDraft=b.dataset.avatar;
  renderAvatarRow();
});
$('btn-save-name').addEventListener('click',async ()=>{
  const name=normalizePlayerName($('player-name-input').value);
  if(name.length<2){ msgModal('👤','İsim gerekli','Lütfen en az 2 harfli bir isim yaz.'); return; }
  S.playerName=name;
  S.avatar=AVATAR_LIST.includes(nameModalAvatarDraft) ? nameModalAvatarDraft : AVATAR_LIST[0];
  await saveState();
  updatePlayerWelcome();
  modal('modal-name',false);
  checkResumeOrDaily();
});
$('player-name-input').addEventListener('keydown',e=>{ if(e.key==='Enter') $('btn-save-name').click(); });

/* ---------- V21: Müzik / ses düğmeleri ---------- */
function updateAudioButtons(){
  ['btn-music','btn-music-top'].forEach(id=>{
    const b=$(id); if(!b) return;
    b.classList.toggle('off',!S.musicOn);
    b.title=S.musicOn?'Müziği kapat':'Müziği aç';
    b.setAttribute('aria-pressed',S.musicOn?'true':'false');
  });
  ['btn-sfx','btn-sfx-top'].forEach(id=>{
    const b=$(id); if(!b) return;
    b.textContent=S.sfxOn?'🔊':'🔇';
    b.classList.toggle('off',!S.sfxOn);
    b.title=S.sfxOn?'Ses efektlerini kapat':'Ses efektlerini aç';
    b.setAttribute('aria-pressed',S.sfxOn?'true':'false');
  });
}
async function toggleMusic(){
  S.musicOn=!S.musicOn;
  if(S.musicOn) startMusic(); else stopMusic();
  updateAudioButtons();
  await saveState();
}
async function toggleSfx(){
  S.sfxOn=!S.sfxOn;
  updateAudioButtons();
  if(S.sfxOn) beep(880,.07,'triangle',0.07);
  await saveState();
}
['btn-music','btn-music-top'].forEach(id=>{ const b=$(id); if(b) b.addEventListener('click',toggleMusic); });
['btn-sfx','btn-sfx-top'].forEach(id=>{ const b=$(id); if(b) b.addEventListener('click',toggleSfx); });

// Tarayıcılar sesi ilk kullanıcı dokunuşundan önce başlatmaz;
// ilk dokunuşta müzik sessizce devreye girer.
function primeAudioOnFirstGesture(){
  const kick=()=>{ ensureAudio(); if(S.musicOn) startMusic(); };
  ['pointerdown','touchstart','keydown'].forEach(ev=>
    document.addEventListener(ev,kick,{once:true,passive:true}));
}

/* ---------- Başlat ---------- */
(async function init(){
  await loadState();
  ensureDailyStats();
  ensureWeeklyLeague();
  applyLevelTheme(1);
  preloadFailSounds();
  updateAudioButtons();
  primeAudioOnFirstGesture();
  refreshMenu();
  if(!S.playerName){ showNameModal(); }
  else{ checkResumeOrDaily(); }
})();
