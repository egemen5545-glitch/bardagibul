/* =====================================================
   TOP BULMACA — v16 haftalık görevler, tam ekran ve marka sistemi
   ===================================================== */

/* ---------- Skinler ---------- */
const CUP_SKINS = [
  {id:'red', name:'Kırmızı Klasik', price:0, tag:'Başlangıç', css:'linear-gradient(180deg,#F0705C,#D94F3D 50%,#A93425)', rim:'#8E2A1D'},
  {id:'ice', name:'Buz Mavisi', price:150, tag:'Serin', css:'linear-gradient(180deg,#BCEBFF,#59BDEB 55%,#276D9E)', rim:'#1F5578'},
  {id:'mint', name:'Nane Yeşili', price:180, tag:'Yumuşak', css:'linear-gradient(180deg,#B9FFD6,#4EE28C 55%,#188753)', rim:'#0D633B'},
  {id:'sport-blue', name:'Tribün Mavisi', price:220, tag:'Spor', css:'linear-gradient(180deg,#7FD3FF,#248DDB 52%,#13558C)', rim:'#0E3D67'},
  {id:'court', name:'Kort Yeşili', price:260, tag:'Tenis', css:'linear-gradient(180deg,#C8FF6A,#74D43F 55%,#2F8423)', rim:'#1F6119'},
  {id:'gold', name:'Altın Kupa', price:400, tag:'Parlak', css:'linear-gradient(180deg,#FBE08A,#F2C14E 50%,#C08A1E)', rim:'#8F6510'},
  {id:'basket', name:'Basket Turuncu', price:440, tag:'Basket', css:'linear-gradient(180deg,#FFB16A,#E97824 54%,#9A3C10)', rim:'#6E2809'},
  {id:'neon', name:'Neon Yeşil', price:600, tag:'Gece', css:'linear-gradient(180deg,#B9FF5C,#39E06A 55%,#0FA35A)', rim:'#0B7A42'},
  {id:'cherry', name:'Vişne Kırmızısı', price:720, tag:'Zor Bölge', css:'linear-gradient(180deg,#FF8A8A,#D63749 52%,#8D1725)', rim:'#65101A'},
  {id:'galaxy', name:'Galaksi', price:900, tag:'Efsane', css:'linear-gradient(160deg,#6D5BD0,#3B2E86 45%,#1B1440 90%)', rim:'#141032'},
  {id:'carbon', name:'Karbon Siyah', price:1100, tag:'Premium', css:'linear-gradient(180deg,#777,#2B2B2B 54%,#0E0E0E)', rim:'#050505'},
  {id:'diamond', name:'Elmas Bardak', price:1500, tag:'Ultra', css:'linear-gradient(180deg,#F3FFFF,#9EE9FF 45%,#5BAEC7 78%,#FFFFFF)', rim:'#4F94AA'}
];
const BALL_SKINS = [
  {id:'orange', name:'Turuncu Top', price:0, tag:'Başlangıç', icon:'🟠', css:'radial-gradient(circle at 32% 28%,#FFC078,#F2812E 55%,#B4520E)'},
  {id:'soccer', name:'Futbol Topu', price:100, tag:'Futbol', icon:'⚽', css:'radial-gradient(circle at 32% 28%,#fff,#d8d8d8 55%,#8a8a8a)'},
  {id:'basketball', name:'Basketbol', price:180, tag:'Basket', icon:'🏀', css:'radial-gradient(circle at 32% 28%,#ffbe71,#e46f22 55%,#8c3108)'},
  {id:'tennis', name:'Tenis Topu', price:220, tag:'Tenis', icon:'🎾', css:'radial-gradient(circle at 32% 28%,#f4ff8a,#b8e338 55%,#6d9e13)'},
  {id:'volley', name:'Voleybol', price:260, tag:'Voleybol', icon:'🏐', css:'conic-gradient(from 15deg,#ffffff,#e8f2ff,#5ab3ff,#ffffff,#ffd95c,#ffffff)'},
  {id:'billiard8', name:'8 Numara', price:320, tag:'Bilardo', icon:'🎱', css:'radial-gradient(circle at 45% 42%,#ffffff 0 20%,#0f0f0f 21% 100%)'},
  {id:'golf', name:'Golf Topu', price:360, tag:'Golf', icon:'⛳', css:'radial-gradient(circle at 32% 28%,#ffffff,#e7e7e7 60%,#b9b9b9)'},
  {id:'disco', name:'Disko Topu', price:420, tag:'Efekt', icon:'🪩', css:'conic-gradient(#ff5c8a,#ffd25c,#5cff8a,#5cc8ff,#b45cff,#ff5c8a)'},
  {id:'bowling', name:'Bowling Topu', price:520, tag:'Bowling', icon:'🎳', css:'radial-gradient(circle at 28% 22%,#7777ff,#3b2e86 52%,#141032)'},
  {id:'emerald', name:'Zümrüt', price:620, tag:'Değerli', icon:'💎', css:'radial-gradient(circle at 32% 28%,#8affc9,#20c97a 55%,#0a7a48)'},
  {id:'fire', name:'Ateş Topu', price:800, tag:'Ateş', icon:'🔥', css:'radial-gradient(circle at 32% 28%,#ffe38a,#ff8a3d 45%,#d0301a 80%)'},
  {id:'iceball', name:'Buz Topu', price:820, tag:'Buz', icon:'❄️', css:'radial-gradient(circle at 32% 28%,#ffffff,#9ee8ff 48%,#2c7fb0 92%)'},
  {id:'meteor', name:'Meteor', price:1200, tag:'Final', icon:'☄️', css:'radial-gradient(circle at 30% 25%,#fff3a0,#ff6d38 38%,#4a1010 75%,#100505)'},
  {id:'crown', name:'Şampiyon Topu', price:1600, tag:'Ultra', icon:'👑', css:'radial-gradient(circle at 30% 24%,#fff7a8,#f2c14e 45%,#8f6510 86%)'}
];

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
const PAUSE_AD_COOLDOWN_MS = 60000;
const AD_NOTICES_ENABLED = false; // Gerçek reklam eklenecek aşamaya kadar ekranda reklam bildirimi gösterme.
const RUN_SAVE_KEY = 'bardagibul-active-run';
const FORCE_REST_AFTER_CONSECUTIVE_LOSSES = 3;
const LONG_PLAY_REST_AFTER_MS = 5 * 60 * 1000;

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
  bestCombo:0, campaignCompleted:false, playerName:'', dailyStats:null,
  starterCoinsGiven:false
};
function uniqueList(arr){ return Array.from(new Set((Array.isArray(arr)?arr:[]).filter(Boolean))); }
function sanitizeState(){
  S.ownedCups = uniqueList(S.ownedCups);
  S.ownedBalls = uniqueList(S.ownedBalls);
  if(!S.ownedCups.includes('red')) S.ownedCups.unshift('red');
  if(!S.ownedBalls.includes('orange')) S.ownedBalls.unshift('orange');
  if(!CUP_SKINS.some(x=>x.id===S.cupSkin)) S.cupSkin='red';
  if(!BALL_SKINS.some(x=>x.id===S.ballSkin)) S.ballSkin='orange';
  if(!S.ownedCups.includes(S.cupSkin)) S.ownedCups.push(S.cupSkin);
  if(!S.ownedBalls.includes(S.ballSkin)) S.ownedBalls.push(S.ballSkin);
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
  if(currentScreenId!=='screen-game' || lives<=0 || level<1) return;
  const run={
    active:true,
    mode,
    level:Math.max(1,Math.min(level, mode==='classic'?MAX_CLASSIC_LEVEL:9999)),
    lives:Math.max(1,Math.min(lives,MAX_LIVES)),
    streak:Math.max(0,streak||0),
    failuresSinceAd:Math.max(0,failuresSinceAd||0),
    adUsedThisRun:!!adUsedThisRun,
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
    const name = S.playerName ? ', '+S.playerName : '';
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
let lastPauseAdAt=0;
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
function showNameModal(){
  const input=$('player-name-input');
  if(input){ input.value=S.playerName||''; setTimeout(()=>input.focus(),160); }
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
let playSessionStartedAt=0, consecutiveLifeLosses=0, longPlayRestTriggeredThisRun=false;
let choiceTimerId=null, choiceTimerRaf=null, choiceDeadline=0, choiceTimeLeft=0, choiceTimeTotal=0, choiceLastTick=0;
let cups=[], ballCup=null, guessing=false, hintUsedThisRound=false, busy=false, slotPositions=[];
let currentRoundRecord=null, lastRoundRecord=null, varrOpportunityResolve=null, varrOpportunityTimer=null, varrReviewing=false;

function levelSettings(lv){
  const capped = Math.min(lv, MAX_CLASSIC_LEVEL);
  // V20: oyun artık aşırı hızlanmıyor. Zorluk daha çok bardak sayısı,
  // renk yakınlığı, sahte hamle ve karar süresiyle geliyor.
  return {
    cupCount: Math.min(3 + Math.floor((capped-1)/7), 8),
    swaps:    Math.min(8 + Math.round(capped*1.35) + Math.floor(capped/10)*2, 40),
    dur:      Math.max(520 - capped*4, 230),
    feints:   capped>=8,
    colors:   capped>=15,
    invis:    capped>=30,
    doubleFake: capped>=40,
    finalZone: capped>=45
  };
}
const rewardFor=lv=>BASE_REWARD;
const comboBonusFor=combo=>combo>=2 ? Math.min(80, combo*5) : 0;
const choiceTimeFor=lv=>Math.max(3900, 9000 - Math.min(lv,MAX_CLASSIC_LEVEL)*105);
const shufflePauseFor=lv=>Math.max(24, 82 - Math.min(lv,MAX_CLASSIC_LEVEL)*1.05);



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
    day:'Pazartesi', theme:'Şaşkın Pazartesi',
    missions:[
      {id:'mon-wins3', title:'Pazartesi Isınması', desc:'Haftaya 3 bölüm geçerek başla.', stat:'wins', target:3, reward:90, icon:'🤹'},
      {id:'mon-combo4', title:'Dört Dörtlük', desc:'Bugün en az 4x kombo gör.', stat:'maxCombo', target:4, reward:120, icon:'🔥'},
      {id:'mon-clean1', title:'Tertemiz Tek Tur', desc:'Güç kullanmadan 1 bölüm kazan.', stat:'cleanWins', target:1, reward:100, icon:'💎'}
    ]
  },
  {
    day:'Salı', theme:'Kurnaz Salı',
    missions:[
      {id:'tue-hint1', title:'Işığı Takip Et', desc:'Bugün 1 kez ipucu ışığı kullan.', stat:'hintUses', target:1, reward:80, icon:'💡'},
      {id:'tue-wins5', title:'Beşlik Seri', desc:'Toplam 5 bölüm doğru bil.', stat:'wins', target:5, reward:135, icon:'🏁'},
      {id:'tue-var1', title:'Hakeme Git', desc:'1 kez VAR incelemesi aç.', stat:'varUses', target:1, reward:95, icon:'📹'}
    ]
  },
  {
    day:'Çarşamba', theme:'Çılgın Çarşamba',
    missions:[
      {id:'wed-elim2', title:'Süpürge Günü', desc:'Bugün 2 kez yanlış bardak ele.', stat:'eliminateUses', target:2, reward:120, icon:'🧹'},
      {id:'wed-combo5', title:'Alev Aldın', desc:'En az 5x kombo yap.', stat:'maxCombo', target:5, reward:160, icon:'🔥'},
      {id:'wed-fail1', title:'Yanıldım Ama Döndüm', desc:'1 hata yap, sonra devam et. Her usta yanılır.', stat:'failures', target:1, reward:70, icon:'🙃'}
    ]
  },
  {
    day:'Perşembe', theme:'Ters Perşembe',
    missions:[
      {id:'thu-clean2', title:'Güçsüz Kahraman', desc:'Güç kullanmadan 2 bölüm kazan.', stat:'cleanWins', target:2, reward:170, icon:'🦸'},
      {id:'thu-pause1', title:'Nefes Al', desc:'Oyunu 1 kez durdur ve sakin dön.', stat:'pauseUses', target:1, reward:60, icon:'⏸️'},
      {id:'thu-wins4', title:'Dört Bardaklık Akıl', desc:'Bugün 4 bölüm doğru bil.', stat:'wins', target:4, reward:110, icon:'🧠'}
    ]
  },
  {
    day:'Cuma', theme:'Finale Hazır Cuma',
    missions:[
      {id:'fri-combo6', title:'Cuma Serisi', desc:'En az 6x kombo gör.', stat:'maxCombo', target:6, reward:190, icon:'⚡'},
      {id:'fri-hint2', title:'İki Işık Bir Şüphe', desc:'2 kez ipucu kullan.', stat:'hintUses', target:2, reward:130, icon:'💡'},
      {id:'fri-wins6', title:'Altın Cuma', desc:'Bugün 6 bölüm geç.', stat:'wins', target:6, reward:180, icon:'🪙'}
    ]
  },
  {
    day:'Cumartesi', theme:'Kupa Cumartesi',
    missions:[
      {id:'sat-var2', title:'VAR Odası', desc:'2 kez VAR incelemesi aç.', stat:'varUses', target:2, reward:150, icon:'📹'},
      {id:'sat-elim3', title:'Üç Şüpheliyi Ele', desc:'3 kez eleme gücü kullan.', stat:'eliminateUses', target:3, reward:165, icon:'🎯'},
      {id:'sat-clean3', title:'Gösterişsiz Usta', desc:'Güç kullanmadan 3 bölüm kazan.', stat:'cleanWins', target:3, reward:220, icon:'🏆'}
    ]
  },
  {
    day:'Pazar', theme:'Tembel Pazar Ama Zor',
    missions:[
      {id:'sun-wins7', title:'Yedi Bardak Pazar', desc:'Pazar günü 7 bölüm geç.', stat:'wins', target:7, reward:230, icon:'🧩'},
      {id:'sun-combo7', title:'Uğurlu 7 Kombo', desc:'En az 7x kombo gör.', stat:'maxCombo', target:7, reward:260, icon:'🔥'},
      {id:'sun-timeout1', title:'Son Saniye Dersi', desc:'1 kez süreyi bitir; sonra toparlan.', stat:'timeouts', target:1, reward:75, icon:'⏰'}
    ]
  }
];
function currentMissionSet(){ return WEEKLY_MISSION_SETS[missionDayIndex()] || WEEKLY_MISSION_SETS[0]; }
function ensureDailyStats(){
  const t=todayStr();
  const set=currentMissionSet();
  if(!S.dailyStats || S.dailyStats.date!==t || S.dailyStats.weekDay!==set.day){
    S.dailyStats={date:t,weekDay:set.day,wins:0,maxCombo:0,cleanWins:0,hintUses:0,eliminateUses:0,varUses:0,failures:0,timeouts:0,pauseUses:0,claimed:{}};
  }
  ['wins','maxCombo','cleanWins','hintUses','eliminateUses','varUses','failures','timeouts','pauseUses'].forEach(k=>{ if(typeof S.dailyStats[k]!=='number') S.dailyStats[k]=0; });
  if(!S.dailyStats.claimed) S.dailyStats.claimed={};
  return S.dailyStats;
}
function todaysMissions(){ return currentMissionSet().missions; }
async function trackDailyStat(stat,amount=1){
  const d=ensureDailyStats();
  d[stat]=(Number(d[stat])||0)+amount;
  await saveState();
  if(currentScreenId==='screen-missions') renderMissions();
}
async function recordDailyWin(clean=false){
  const d=ensureDailyStats();
  d.wins=(d.wins||0)+1;
  d.maxCombo=Math.max(d.maxCombo||0,streak||0);
  if(clean) d.cleanWins=(d.cleanWins||0)+1;
  await saveState();
  if(currentScreenId==='screen-missions') renderMissions();
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
function renderLevelMap(){
  const grid=$('level-grid'); if(!grid) return;
  const best=Math.max(0,Number(S.bestLevel)||0);
  const unlocked=S.campaignCompleted?MAX_CLASSIC_LEVEL:Math.min(MAX_CLASSIC_LEVEL,best+1);
  const summary=$('level-map-summary');
  if(summary) summary.textContent='İlerleme: '+Math.min(best,MAX_CLASSIC_LEVEL)+'/'+MAX_CLASSIC_LEVEL+' • Sıradaki: '+Math.min(unlocked,MAX_CLASSIC_LEVEL);
  grid.innerHTML='';
  for(let i=1;i<=MAX_CLASSIC_LEVEL;i++){
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
    grid.appendChild(btn);
  }
}
async function startGameAt(lv){
  isPaused=false; stopAllGameAudio();
  mode='classic'; level=Math.max(1,Math.min(Number(lv)||1,MAX_CLASSIC_LEVEL)); lives=MAX_LIVES; streak=0; adUsedThisRun=false; failuresSinceAd=0;
  playSessionStartedAt=Date.now(); consecutiveLifeLosses=0; longPlayRestTriggeredThisRun=false;
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
  if(set.colors)extras.push('renk değişimi');
  if(set.invis)extras.push('görünmezlik');
  $('level-info').textContent=(mode==='endless'?'♾️ Sonsuz • Tur ':'Bölüm ')+level+(mode==='classic'?'/'+MAX_CLASSIC_LEVEL:'')+' • '+set.cupCount+' bardak'+(extras.length?' • ⚠️ '+extras.join(', '):'');
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
  const startSpread = group.name==='kırmızı' ? 20 : group.name==='mor' ? 26 : 42;
  const endSpread   = group.name==='kırmızı' ? 3.2 : group.name==='mor' ? 6.0 : 9.0;
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
  return {
    body:`linear-gradient(180deg,hsl(${hue}, ${sat}%, ${l1}%),hsl(${hue}, ${sat}%, ${l2}%) 55%,hsl(${hue}, ${sat}%, ${l3}%))`,
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
  const cw=Math.min(Math.floor((W-20)/count)-gap, 108);
  const ch=Math.round(cw*1.18);
  const totalW=count*cw+(count-1)*gap;
  const startX=(W-totalW)/2;
  slotPositions=[];
  for(let s=0;s<count;s++) slotPositions.push(startX+s*(cw+gap));
  const skin=CUP_SKINS.find(s=>s.id===S.cupSkin)||CUP_SKINS[0];
  for(let i=0;i<count;i++){
    const el=document.createElement('div');
    el.className='cup';
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
    const aPeak = direction * (8 + d*10);
    const bPeak = -direction * (8 + d*10);
    const wobblePower = 1.4 + d*2.8;

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
    const peak=(Math.random()<0.5?-1:1)*(6+Math.random()*(6+difficultyRatio()*10));
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
  streak=0; haptic(80); sndLose();
  await trackDailyStat('failures',1);
  await trackDailyStat('timeouts',1);
  $('status-msg').textContent='⏰ Süre bitti!';
  await wait(450);
  placeBallAt(ballCup);
  await liftCup(ballCup,true);
  lives--; consecutiveLifeLosses++; updateHUD();
  await saveRunState();
  await wait(1050);
  if(lives<=0){ gameOver(); }
  else{ await maybePlayFailureAd(); await maybeForceRestAfterLifeLoss(); await liftCup(ballCup,false); hideBall(); startRound(); }
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
  await wait(350);
  await liftCup(ballCup,true,620);
  $('status-msg').textContent='👀 VAR: Top başlangıçta bu bardağın içindeydi';
  await wait(620);
  await liftCup(ballCup,false,620);
  placeBallAt(ballCup);
  await wait(250);

  const durBase=Math.max(560, (levelSettings(level).dur || 220) * 3.2);
  for(const ev of record.swaps){
    if(!ev || !cups[ev.i] || !cups[ev.j]) continue;
    await swapCups(cups[ev.i],cups[ev.j],durBase,!!ev.feint);
    syncReviewBall();
    await wait(55);
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
  await wait(2100);
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
  await wait(650);
  await liftCup(ballCup,false);
  hideBall();
  hideBallDuringShuffle();
  await wait(320);

  $('status-msg').textContent= level>=45 ? '🔥 Final bölgesi… çok dikkat!' : '🔀 Dikkat, karışıyor…';
  for(let k=0;k<set.swaps;k++){
    let i=rand(cups.length), j=rand(cups.length);
    while(j===i) j=rand(cups.length);
    const feint = set.feints && Math.random() < (set.finalZone ? 0.28 : 0.18);
    if(set.invis && Math.random()<0.25){
      cups[i].el.classList.add('ghost');cups[j].el.classList.add('ghost');
    }
    if(set.colors && Math.random()<0.3){ randomHue(cups[rand(cups.length)]); }
    if(currentRoundRecord){ currentRoundRecord.swaps.push({i,j,feint:!!feint}); }
    await swapCups(cups[i],cups[j],set.dur,feint);
    cups[i].el.classList.remove('ghost');cups[j].el.classList.remove('ghost');

    // V20: sahte hareketler artık aynı anda kaos yaratmıyor;
    // yavaş ve kontrollü şekilde araya giriyor.
    if(level>=8 && k%3===1 && Math.random() < Math.min(0.28,0.08+difficultyRatio()*0.20)){
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
    const comboBonus=comboBonusFor(streak);
    const reward=baseReward+comboBonus+lifeCoinBonus;
    S.coins+=reward;
    S.bestCombo=Math.max(S.bestCombo||0,streak);
    if(mode==='classic') S.bestLevel=Math.max(S.bestLevel,level);
    else S.bestEndless=Math.max(S.bestEndless,level);
    const cleanWin = !hintUsedThisRound && !eliminateUsedThisRound && !varrUsedThisRound;
    await recordDailyWin(cleanWin);
    await saveState();
    sndWin();sndCoin(); if(streak>=3) sndCombo(); confetti();
    const r=cup.el.getBoundingClientRect();
    floatCoin('+'+reward+' 🪙', r.left+r.width/2-30, r.top-10);
    const comboText = helperRewardText + (comboBonus ? ' • 🔥 '+streak+'x kombo +'+comboBonus : '') + lifeRewardText;
    $('status-msg').textContent='🎉 Doğru! +'+reward+' 🪙'+comboText;
    $('combo-label').parentElement.classList.add('combo-burst');
    setTimeout(()=>$('combo-label').parentElement.classList.remove('combo-burst'),300);
    updateHUD();
    await wait(1300);
    const clearedLevel = level;
    if(mode==='classic' && clearedLevel >= MAX_CLASSIC_LEVEL){
      completeCampaign();
      return;
    }
    level++;
    await saveRunState();
    if(mode==='classic' && clearedLevel % AD_BREAK_EVERY_LEVEL === 0){
      await playAdBreak(clearedLevel);
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
    streak=0;
    lives--;
    consecutiveLifeLosses++;
    lastRoundRecord=cloneRoundRecord(currentRoundRecord);
    if(lastRoundRecord){
      lastRoundRecord.selectedSlot = cup.slot;
      lastRoundRecord.selectedIndex = cups.indexOf(cup);
    }
    updateHUD();
    await saveRunState();
    await wait(900);
    const wantsVarr=await waitForVarrOpportunity(4200);
    if(wantsVarr){ await playVarrReview(lastRoundRecord); }
    if(lives<=0){ gameOver(); }
    else{
      await maybePlayFailureAd();
      await maybeForceRestAfterLifeLoss();
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
  $('modal-adbreak').querySelector('p').innerHTML = 'Bir sonraki hamleye hazırlan…<br><span id="adbreak-count" style="font-size:34px;font-family:\'Nunito\',system-ui,sans-serif;font-weight:900;color:var(--gold)">'+REST_SECONDS+'</span>';
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
  busy=false; stopChoiceTimer(); setHelperButtons(false); clearRunState();
  const label = mode==='endless' ? 'Sonsuz modda '+(level-1)+' tur dayandın!' : 'Bölüm '+Math.min(level,MAX_CLASSIC_LEVEL)+'/'+MAX_CLASSIC_LEVEL+' seviyesine ulaştın!';
  $('gameover-stats').innerHTML=label+'<br>En iyi kombo: '+(S.bestCombo||0)+'x<br>Toplam altın: '+S.coins+' 🪙<br><br>Çok yaklaştın. Bir deneme daha genelde yeter.';
  $('btn-ad-revive').style.display = adUsedThisRun ? 'none' : 'inline-block';
  modal('modal-gameover');
}

async function startGame(m){
  isPaused=false; stopAllGameAudio();
  mode=m; level=1; lives=MAX_LIVES; streak=0; adUsedThisRun=false; failuresSinceAd=0;
  playSessionStartedAt=Date.now(); consecutiveLifeLosses=0; longPlayRestTriggeredThisRun=false;
  showScreen('screen-game');
  requestGameFullscreen();
  await saveRunState();
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
  setTimeout(()=>light.remove(),1550);
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
  await wait(1500);
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
    card.className='skin-card shop-card '+shopTab+'-card'+(isSelected?' selected':'')+(isOwned?' owned':' locked');
    card.dataset.id=sk.id;
    card.dataset.owned=isOwned?'true':'false';
    card.dataset.selected=isSelected?'true':'false';
    card.tabIndex=isOwned&&!isSelected?0:-1;
    card.setAttribute('role',isOwned&&!isSelected?'button':'group');
    card.setAttribute('aria-label',sk.name+(isSelected?' seçili':isOwned?' seçilebilir':' satın alınabilir'));
    const icon = shopTab==='ball' && sk.icon ? '<span class="skin-sport-icon">'+sk.icon+'</span>' : '';
    const prev = shopTab==='cup'
      ? '<div class="skin-preview-frame"><div class="skin-preview-cup" style="background:'+sk.css+'"></div></div>'
      : '<div class="skin-preview-frame ball-frame"><div class="skin-preview-ball" style="background:'+sk.css+'"></div>'+icon+'</div>';
    const status = isSelected ? 'Seçili' : isOwned ? 'Sahip olduğun ürün' : 'Kilitli ürün';
    let btn;
    if(isSelected){
      btn='<button class="btn skin-btn equipped" disabled>✔ Kullanılıyor</button>';
    }else if(isOwned){
      btn='<button class="btn skin-btn secondary select-btn" data-act="select" data-id="'+sk.id+'">Seç</button>';
    }else{
      btn='<button class="btn skin-btn buy" data-act="buy" data-id="'+sk.id+'"><span>Satın Al</span><b>'+sk.price+' 🪙</b></button>';
    }
    card.innerHTML='\
      <div class="skin-card-head"><div class="skin-badge">'+(sk.tag||'Skin')+'</div><div class="skin-owned-mark">'+(isSelected?'✓':isOwned?'•':'🔒')+'</div></div>\
      '+prev+'\
      <div class="skin-info">\
        <div class="skin-name">'+sk.name+'</div>\
        <div class="skin-desc">'+(shopTab==='cup'?'İlk 10 bölümde bardak olarak görünür':'İlk 10 bölümde top olarak kullanılır')+'</div>\
      </div>\
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
  if(card && card.dataset.selected!=='true') await applyShopAction(card.dataset.id,'select');
});
$('shop-grid').addEventListener('keydown',async e=>{
  if(e.key!=='Enter' && e.key!==' ') return;
  const card=e.target.closest('.shop-card[data-owned="true"]');
  if(card && card.dataset.selected!=='true'){ e.preventDefault(); await applyShopAction(card.dataset.id,'select'); }
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
  const now=Date.now();
  if(now-lastPauseAdAt>PAUSE_AD_COOLDOWN_MS){
    lastPauseAdAt=now;
    await playAdBreak('pause',{noReward:true,restAfter:true});
  }
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
$('btn-shop').addEventListener('click',()=>{stopAllGameAudio();showScreen('screen-shop');renderShop();});
$('btn-shop-back').addEventListener('click',()=>{stopAllGameAudio();refreshMenu();showScreen('screen-menu');});
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
  playSessionStartedAt=Number(run.playSessionStartedAt)||Date.now();
  consecutiveLifeLosses=Math.max(0,Number(run.consecutiveLifeLosses)||0);
  longPlayRestTriggeredThisRun=!!run.longPlayRestTriggeredThisRun;
  showScreen('screen-game');
  requestGameFullscreen();
  await saveRunState();
  startRound();
});
$('btn-new-run').addEventListener('click',async ()=>{modal('modal-resume',false);pendingResumeRun=null;await clearRunState();checkDaily();});


$('btn-save-name').addEventListener('click',async ()=>{
  const name=normalizePlayerName($('player-name-input').value);
  if(name.length<2){ msgModal('👤','İsim gerekli','Lütfen en az 2 harfli bir isim yaz.'); return; }
  S.playerName=name;
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
  applyLevelTheme(1);
  preloadFailSounds();
  updateAudioButtons();
  primeAudioOnFirstGesture();
  refreshMenu();
  if(!S.playerName){ showNameModal(); }
  else{ checkResumeOrDaily(); }
})();
