/* global createRoomMock, joinRoomMock, sendChatMock, findMatchMock, startTournamentMock */
(function(){
  'use strict';

  const FIREBASE_SDK_VERSION = '10.12.5';
  // Config eksik ya da Firebase hata verirse servisler mock fallback ile devam eder.
  const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyCHwGHZiGjUHNnv8JQD9DQiy3c7ahpDJ2o',
    authDomain: 'topbul-d1981.firebaseapp.com',
    projectId: 'topbul-d1981',
    storageBucket: 'topbul-d1981.firebasestorage.app',
    messagingSenderId: '150969091616',
    appId: '1:150969091616:web:01007bfbbeacfc58075e45',
    measurementId: 'G-4K682GG81C'
  };

  const state = {
    app: null,
    db: null,
    auth: null,
    user: null,
    sdk: null,
    initPromise: null,
    lastError: '',
    mode: 'idle',
    statusMessage: '',
    lastStatusKey: ''
  };

  const LOG_PREFIX = '[TopBulmacaFirebase]';

  function errorMessage(err, fallbackText){
    if(!err) return fallbackText || 'Unknown Firebase error';
    const code = err.code ? String(err.code) + ': ' : '';
    return code + (err.message || fallbackText || String(err));
  }

  function logFirebase(level, message, detail){
    try{
      const logger = console && console[level] ? console[level] : console.log;
      if(detail !== undefined) logger(LOG_PREFIX + ' ' + message, detail);
      else logger(LOG_PREFIX + ' ' + message);
    }catch(e){}
  }

  function serviceStatus(){
    return {
      mode: state.mode,
      ready: !!(state.db && state.sdk && state.user),
      uid: state.user && state.user.uid ? state.user.uid : '',
      lastError: state.lastError,
      message: state.statusMessage
    };
  }

  function emitStatus(mode, message, options){
    const opts = options || {};
    state.mode = mode || state.mode;
    state.statusMessage = message || '';
    if(opts.error) state.lastError = errorMessage(opts.error, opts.fallback || state.lastError);
    const key = state.mode + '|' + state.statusMessage + '|' + state.lastError;
    if(key !== state.lastStatusKey){
      state.lastStatusKey = key;
      try{
        window.dispatchEvent(new CustomEvent('topbulmaca-firebase-status', {detail:serviceStatus()}));
      }catch(e){}
    }
  }

  function hasRealConfig(){
    return Object.keys(FIREBASE_CONFIG).every(key=>{
      const value = String(FIREBASE_CONFIG[key] || '');
      return value && !value.includes('YOUR_FIREBASE_') && !value.includes('PLACEHOLDER');
    });
  }

  function code4(){
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  function nowPlayer(extra){
    const data = extra || {};
    const generatedId = 'player-' + Date.now();
    return Object.assign({
      id: data.userId || data.id || generatedId,
      userId: data.userId || data.id || generatedId,
      name: 'Oyuncu',
      avatar: '⭐',
      authUid: data.authUid || (state.user && state.user.uid) || '',
      elo: 1000,
      ready: false,
      joinedAt: Date.now()
    }, data);
  }

  function noopUnsubscribe(){
    return function(){};
  }

  function fallback(fnName, args, emptyValue, reason){
    if(reason){
      state.lastError = reason;
      logFirebase('warn', fnName + ' Firebase fallback: ' + reason);
      emitStatus('fallback', 'Online bağlantı hazır değil, yerel modla devam ediliyor.');
    }
    const map = {
      createRoom: 'createRoomMock',
      joinRoom: 'joinRoomMock',
      findMatch: 'findMatchMock',
      createTournament: 'startTournamentMock'
    };
    const fallbackName = map[fnName];
    if(fallbackName && typeof window[fallbackName] === 'function'){
      return window[fallbackName].apply(window, args || []);
    }
    return emptyValue;
  }

  async function initFirebase(){
    if(!hasRealConfig()){
      const reason = 'Firebase config is missing or still contains placeholders.';
      state.lastError = reason;
      logFirebase('warn', reason + ' Local fallback will be used.');
      emitStatus('fallback', 'Online bağlantı hazır değil, yerel modla devam ediliyor.');
      return null;
    }
    if(state.db && state.sdk) return state;
    if(state.initPromise) return state.initPromise;
    state.initPromise = (async ()=>{
      try{
        emitStatus('connecting', 'Online bağlantı kontrol ediliyor.');
        logFirebase('info', 'Initializing Firebase SDK...');
        const appSdk = await import('https://www.gstatic.com/firebasejs/' + FIREBASE_SDK_VERSION + '/firebase-app.js');
        const firestoreSdk = await import('https://www.gstatic.com/firebasejs/' + FIREBASE_SDK_VERSION + '/firebase-firestore.js');
        const authSdk = await import('https://www.gstatic.com/firebasejs/' + FIREBASE_SDK_VERSION + '/firebase-auth.js');
        state.app = appSdk.getApps && appSdk.getApps().length ? appSdk.getApps()[0] : appSdk.initializeApp(FIREBASE_CONFIG);
        state.db = firestoreSdk.getFirestore(state.app);
        state.auth = authSdk.getAuth(state.app);
        state.user = state.auth.currentUser || (await authSdk.signInAnonymously(state.auth)).user;
        state.sdk = firestoreSdk;
        state.lastError = '';
        logFirebase('info', 'Firebase ready. Anonymous uid=' + (state.user && state.user.uid ? state.user.uid : 'unknown'));
        emitStatus('ready', 'Online bağlantı hazır.');
        return state;
      }catch(err){
        state.lastError = errorMessage(err, 'Firebase init failed');
        logFirebase('error', 'Firebase init failed; local fallback will be used.', err);
        emitStatus('fallback', 'Online bağlantı hazır değil, yerel modla devam ediliyor.', {error:err});
        state.app = null;
        state.db = null;
        state.auth = null;
        state.user = null;
        state.sdk = null;
        return null;
      }finally{
        state.initPromise = null;
      }
    })();
    return state.initPromise;
  }

  async function addTimelineMessage(fb, parentCollection, targetId, payload){
    const sdk = fb.sdk;
    const parent = String(targetId);
    try{
      await sdk.addDoc(sdk.collection(fb.db, parentCollection, parent, 'messages'), payload);
    }catch(err){
      logFirebase('warn', parentCollection + '/' + parent + '/messages write failed.', errorMessage(err, 'messages write failed'));
      throw err;
    }
    try{ await sdk.addDoc(sdk.collection(fb.db, parentCollection, parent, 'chat'), payload); }catch(err){}
    return payload;
  }

  function systemMessagePayload(sdk, text){
    return {
      from:{userId:'system',name:'Sistem',avatar:'ℹ️'},
      text:text,
      createdAt:sdk.serverTimestamp(),
      atMs:Date.now()
    };
  }

  async function createRoom(roomData){
    const fb = await initFirebase();
    if(!fb) return fallback('createRoom', arguments, null, 'Firebase is not ready');
    const sdk = fb.sdk;
    try{
      const input = roomData || {};
      let code = /^\d{4}$/.test(String(input.code || '')) ? String(input.code) : code4();
      if(!input.code){
        for(let tries=0; tries<5; tries++){
          const existing = await sdk.getDoc(sdk.doc(fb.db, 'rooms', code));
          if(!existing.exists()) break;
          code = code4();
        }
      }
      const player = nowPlayer(input.player);
      const payload = Object.assign({
        code,
        status: 'lobby',
        ready: false,
        rounds: Number(input.rounds) || 5,
        hostUserId: player.userId,
        hostAuthUid: player.authUid || '',
        players: [Object.assign({}, player, {host:true})],
        createdAt: sdk.serverTimestamp(),
        createdAtMs: Date.now(),
        updatedAt: sdk.serverTimestamp()
      }, input);
      delete payload.player;
      await sdk.setDoc(sdk.doc(fb.db, 'rooms', code), payload, {merge:true});
      await addTimelineMessage(fb, 'rooms', code, systemMessagePayload(sdk, 'Oda oluşturuldu.'));
      logFirebase('info', 'Room created in Firestore: ' + code);
      return {code, id:code, data:payload};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase createRoom failed');
      logFirebase('error', 'createRoom failed; local room fallback will be used.', err);
      return fallback('createRoom', arguments, null, state.lastError);
    }
  }

  async function joinRoom(code, playerData){
    const normalized = String(code || '').trim();
    if(!/^\d{4}$/.test(normalized)) return {notFound:true, code:normalized};
    const fb = await initFirebase();
    if(!fb) return fallback('joinRoom', [code], null, 'Firebase is not ready');
    const sdk = fb.sdk;
    try{
      const ref = sdk.doc(fb.db, 'rooms', normalized);
      const before = await sdk.getDoc(ref);
      if(!before.exists()){
        logFirebase('warn', 'joinRoom rejected; room not found: ' + normalized);
        return {notFound:true, code:normalized};
      }
      const player = nowPlayer(playerData);
      const data = before.data() || {};
      const players = Array.isArray(data.players) ? data.players.slice() : [];
      const playerRecord = Object.assign({}, player, {host:false, ready:true});
      const idx = players.findIndex(p=>
        String(p.userId || p.id || '') === String(player.userId || player.id || '') ||
        (player.authUid && String(p.authUid || '') === String(player.authUid))
      );
      if(idx >= 0) players[idx] = Object.assign({}, players[idx], playerRecord);
      else players.push(playerRecord);
      await sdk.setDoc(ref, {
        code: normalized,
        status: 'lobby',
        players: players,
        updatedAt: sdk.serverTimestamp()
      }, {merge:true});
      await addTimelineMessage(fb, 'rooms', normalized, systemMessagePayload(sdk, (player.name || 'Oyuncu') + ' odaya katıldı.'));
      const snap = await sdk.getDoc(ref);
      logFirebase('info', 'Joined Firestore room: ' + normalized);
      return {code:normalized, id:normalized, data:snap.exists()?snap.data():null};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase joinRoom failed');
      logFirebase('error', 'joinRoom failed; local join fallback will be used.', err);
      return fallback('joinRoom', [code], null, state.lastError);
    }
  }

  async function listenRoom(code, callback){
    const normalized = String(code || '').trim();
    const fb = await initFirebase();
    if(!fb || !normalized || typeof callback !== 'function') return noopUnsubscribe();
    const sdk = fb.sdk;
    try{
      let roomData = null;
      let messages = [];
      let legacyChat = [];
      let unsubLegacy = noopUnsubscribe();
      let legacyStarted = false;
      const emit = ()=>{
        const chat = messages.length ? messages : legacyChat;
        if(!roomData) callback(null);
        else callback(Object.assign({id:normalized, chat}, roomData));
      };
      const unsubRoom = sdk.onSnapshot(sdk.doc(fb.db, 'rooms', normalized), snap=>{
        roomData = snap.exists() ? snap.data() : null;
        emit();
      }, err=>{
        logFirebase('warn', 'rooms/' + normalized + ' listener failed.', errorMessage(err, 'listenRoom failed'));
        callback(null);
      });
      const startLegacyListener = ()=>{
        if(legacyStarted) return;
        legacyStarted = true;
        const legacyQuery = sdk.query(
          sdk.collection(fb.db, 'rooms', normalized, 'chat'),
          sdk.orderBy('atMs','asc'),
          sdk.limit(40)
        );
        unsubLegacy = sdk.onSnapshot(legacyQuery, snap=>{
          legacyChat = [];
          snap.forEach(docSnap=>legacyChat.push(Object.assign({id:docSnap.id}, docSnap.data())));
          emit();
        }, err=>{
          logFirebase('warn', 'rooms/' + normalized + '/chat fallback listener failed.', errorMessage(err, 'legacy listener failed'));
        });
      };
      const messagesQuery = sdk.query(
        sdk.collection(fb.db, 'rooms', normalized, 'messages'),
        sdk.orderBy('atMs','asc'),
        sdk.limit(40)
      );
      const unsubMessages = sdk.onSnapshot(messagesQuery, snap=>{
        messages = [];
        snap.forEach(docSnap=>messages.push(Object.assign({id:docSnap.id}, docSnap.data())));
        emit();
      }, err=>{
        logFirebase('warn', 'rooms/' + normalized + '/messages listener failed.', errorMessage(err, 'messages listener failed'));
        startLegacyListener();
      });
      return function(){ try{unsubRoom();}catch(e){} try{unsubMessages();}catch(e){} try{unsubLegacy();}catch(e){} };
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase listenRoom failed');
      logFirebase('error', 'listenRoom failed.', err);
      return noopUnsubscribe();
    }
  }

  async function setRoomReady(code, playerData, ready){
    const normalized = String(code || '').trim();
    const fb = await initFirebase();
    if(!fb || !normalized) return null;
    const sdk = fb.sdk;
    try{
      const ref = sdk.doc(fb.db, 'rooms', normalized);
      const snap = await sdk.getDoc(ref);
      const data = snap.exists() ? snap.data() : {};
      const player = Object.assign(nowPlayer(playerData), {ready:!!ready});
      const players = Array.isArray(data.players) ? data.players.slice() : [];
      const idx = players.findIndex(p=>
        String(p.userId || p.id || '') === String(player.userId || player.id || '') ||
        (player.authUid && String(p.authUid || '') === String(player.authUid))
      );
      if(idx >= 0) players[idx] = Object.assign({}, players[idx], player, {ready:!!ready});
      else players.push(player);
      await sdk.setDoc(ref, {players, updatedAt:sdk.serverTimestamp()}, {merge:true});
      return {code:normalized, ready:!!ready};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase setRoomReady failed');
      logFirebase('error', 'setRoomReady failed.', err);
      return null;
    }
  }

  async function setRoomRounds(code, rounds){
    const normalized = String(code || '').trim();
    const fb = await initFirebase();
    if(!fb || !normalized) return null;
    const sdk = fb.sdk;
    try{
      const count = Math.max(1, Math.min(20, Number(rounds) || 5));
      await sdk.setDoc(sdk.doc(fb.db, 'rooms', normalized), {
        rounds: count,
        updatedAt:sdk.serverTimestamp()
      }, {merge:true});
      return {code:normalized, rounds:count};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase setRoomRounds failed');
      logFirebase('error', 'setRoomRounds failed.', err);
      return null;
    }
  }

  async function createRoomMatch(code, payload){
    const normalized = String(code || '').trim();
    const fb = await initFirebase();
    if(!fb || !normalized) return null;
    const sdk = fb.sdk;
    try{
      const input = payload || {};
      const host = nowPlayer(input.host || {});
      const guest = nowPlayer(input.guest || {});
      const matchRef = sdk.doc(sdk.collection(fb.db, 'matches'));
      const trim = p => ({
        userId: p.userId || p.id || '',
        authUid: p.authUid || '',
        name: p.name || 'Oyuncu',
        avatar: p.avatar || '⭐',
        elo: Number(p.elo) || 1000,
        cupSkin: p.cupSkin || 'red',
        ballSkin: p.ballSkin || 'orange',
        tableSkin: p.tableSkin || 'felt-classic',
        backgroundSkin: p.backgroundSkin || 'zone'
      });
      const player1 = trim(host);
      const player2 = trim(guest);
      const matchData = {
        source: 'friend',
        roomCode: normalized,
        player1,
        player2,
        score1: 0,
        score2: 0,
        targetRounds: Math.max(1, Math.min(20, Number(input.rounds) || 5)),
        status: 'ready',
        winner: null,
        roundState: createSharedRoundState(matchRef.id, 1, player1),
        selections: {},
        createdAt: sdk.serverTimestamp(),
        updatedAt: sdk.serverTimestamp()
      };
      await sdk.setDoc(matchRef, matchData);
      await sdk.setDoc(sdk.doc(fb.db, 'rooms', normalized), {
        matchId: matchRef.id,
        status: 'matched',
        updatedAt: sdk.serverTimestamp()
      }, {merge:true});
      logFirebase('info', 'Room match created in Firestore: ' + matchRef.id + ' (room ' + normalized + ')');
      return {id: matchRef.id, matchId: matchRef.id, data: firebaseMatchPayload(matchRef.id, matchData, player1.userId)};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase createRoomMatch failed');
      logFirebase('error', 'createRoomMatch failed.', err);
      return null;
    }
  }

  async function sendChatMessage(targetId, message, playerData){
    if(arguments.length === 1) return fallback('sendChatMessage', [targetId], null);
    const text = String(message || '').trim();
    const fb = await initFirebase();
    if(!targetId || !text) return fallback('sendChatMessage', [message || targetId], null);
    if(!fb) return fallback('sendChatMessage', [message || targetId], null, 'Firebase is not ready');
    const sdk = fb.sdk;
    try{
      const targetType = playerData && playerData.targetType === 'match' ? 'matches' : 'rooms';
      const payload = {
        from: nowPlayer(playerData),
        text: text.slice(0, 160),
        clientId: playerData && playerData.clientId ? String(playerData.clientId) : ('msg-' + Date.now() + '-' + Math.random().toString(36).slice(2,8)),
        createdAt: sdk.serverTimestamp(),
        atMs: Date.now()
      };
      await addTimelineMessage(fb, targetType, targetId, payload);
      return payload;
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase sendChat failed');
      logFirebase('error', 'sendChatMessage failed.', err);
      return fallback('sendChatMessage', [message || targetId], null, state.lastError);
    }
  }

  function sharedRoundSeed(matchId, round){
    return String(matchId || 'match') + '-r' + String(round || 1);
  }

  function hashSeed(seed){
    const text = String(seed || 'seed');
    let h = 2166136261;
    for(let i=0;i<text.length;i++){
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function seededIndex(seed, max){
    const n = Math.max(1, Number(max) || 1);
    return hashSeed(seed) % n;
  }

  function cupsForSharedLevel(level){
    const lv = Math.max(1, Math.min(50, Number(level) || 1));
    if(lv <= 12) return 3;
    if(lv <= 32) return 4;
    return 5;
  }

  function sharedCosmetics(source){
    const s = source || {};
    return {
      tableSkin: s.tableSkin || 'felt-classic',
      backgroundSkin: s.backgroundSkin || 'zone',
      ballSkin: s.ballSkin || 'orange',
      cupSkin: s.cupSkin || 'red'
    };
  }

  function createSharedRoundState(matchId, round, source){
    const r = Math.max(1, Number(round) || 1);
    const level = Math.max(1, Math.min(50, r));
    const cups = cupsForSharedLevel(level);
    const seed = sharedRoundSeed(matchId, r);
    return Object.assign({
      seed,
      level,
      cups,
      ballIndex: seededIndex(seed + '-ball', cups),
      round: r,
      status: 'playing',
      updatedAtMs: Date.now()
    }, sharedCosmetics(source));
  }

  function selectionKey(player){
    const raw = player && (player.authUid || player.userId || player.id) ? (player.authUid || player.userId || player.id) : 'player';
    return String(raw).replace(/[.[\]*~\/]/g, '_');
  }

  function roundScoreDelta(selection, correct){
    if(correct) return 120 + Math.min(60, Math.max(0, Number(selection && selection.combo) || 0) * 8);
    return 12;
  }

  function firebaseMatchPayload(matchId, data, userId){
    const player1 = data.player1 || {};
    const player2 = data.player2 || {};
    const authUid = state.user && state.user.uid ? state.user.uid : '';
    return {
      id: matchId,
      matchId,
      source: data.source || 'matchmaking',
      status: data.status || 'ready',
      player1,
      player2,
      score1: Number(data.score1) || 0,
      score2: Number(data.score2) || 0,
      winner: data.winner || null,
      targetRounds: Number(data.targetRounds) || 5,
      roundState: data.roundState || null,
      selections: data.selections || {},
      playerSlot: (player1.userId === userId || (authUid && player1.authUid === authUid)) ? 'player1' : 'player2'
    };
  }

  async function waitForQueuedMatch(fb, userId, timeoutMs){
    const sdk = fb.sdk;
    const queueRef = sdk.doc(fb.db, 'matchmakingQueue', userId);
    return new Promise(resolve=>{
      let done = false;
      let unsub = noopUnsubscribe();
      const finish = value=>{
        if(done) return;
        done = true;
        try{ unsub(); }catch(e){}
        resolve(value);
      };
      const timer = setTimeout(()=>finish({status:'queued', queueId:userId}), timeoutMs || 9000);
      unsub = sdk.onSnapshot(queueRef, async snap=>{
        const data = snap.exists() ? snap.data() : null;
        if(!data || data.status !== 'matched' || !data.matchId) return;
        clearTimeout(timer);
        try{
          const matchSnap = await sdk.getDoc(sdk.doc(fb.db, 'matches', String(data.matchId)));
          finish({
            status:'matched',
            matchId:String(data.matchId),
            match:matchSnap.exists() ? firebaseMatchPayload(matchSnap.id, matchSnap.data(), userId) : null
          });
        }catch(e){
          finish({status:'matched', matchId:String(data.matchId), match:null});
        }
      }, ()=>finish({status:'queued', queueId:userId}));
    });
  }

  async function findMatch(playerData){
    const fb = await initFirebase();
    if(!fb) return fallback('findMatch', arguments, null, 'Firebase is not ready');
    const sdk = fb.sdk;
    const player = nowPlayer(playerData);
    const elo = Math.max(500, Math.min(2500, Math.round(Number(player.elo) || 1000)));
    const userId = String(player.userId || player.id);
    const authUid = player.authUid || (state.user && state.user.uid) || '';
    const queueRef = sdk.doc(fb.db, 'matchmakingQueue', userId);
    const queuePayload = {
      userId,
      authUid,
      name: String(player.name || 'Oyuncu').slice(0, 24),
      avatar: player.avatar || '⭐',
      elo,
      cupSkin: player.cupSkin || 'red',
      ballSkin: player.ballSkin || 'orange',
      tableSkin: player.tableSkin || 'felt-classic',
      backgroundSkin: player.backgroundSkin || 'zone',
      status: 'searching',
      joinedAt: sdk.serverTimestamp(),
      joinedAtMs: Date.now()
    };
    try{
      await sdk.setDoc(queueRef, queuePayload, {merge:true});
      const q = sdk.query(
        sdk.collection(fb.db, 'matchmakingQueue'),
        sdk.where('status','==','waiting'),
        sdk.limit(20)
      );
      const snap = await sdk.getDocs(q);
      const candidates = [];
      snap.forEach(docSnap=>{
        const data = docSnap.data();
        const candidateElo = Number(data && data.elo) || 1000;
        const sameAuth = authUid && data && data.authUid === authUid;
        if(data && data.userId !== userId && !sameAuth && Math.abs(candidateElo - elo) <= 150) candidates.push({id:docSnap.id, ref:docSnap.ref, data});
      });
      candidates.sort((a,b)=>(Number(a.data.joinedAtMs)||0)-(Number(b.data.joinedAtMs)||0));
      const other = candidates[0];
      if(other){
        const matchRef = sdk.doc(sdk.collection(fb.db, 'matches'));
        const matchData = {
          player1: {
            userId: other.data.userId,
            authUid: other.data.authUid || '',
            name: other.data.name || 'Rakip',
            avatar: other.data.avatar || '🎱',
            elo: Number(other.data.elo) || 1000,
            cupSkin: other.data.cupSkin || 'red',
            ballSkin: other.data.ballSkin || 'orange',
            tableSkin: other.data.tableSkin || 'felt-classic',
            backgroundSkin: other.data.backgroundSkin || 'zone'
          },
          player2: {
            userId,
            authUid,
            name: queuePayload.name,
            avatar: queuePayload.avatar,
            elo,
            cupSkin: queuePayload.cupSkin,
            ballSkin: queuePayload.ballSkin,
            tableSkin: queuePayload.tableSkin,
            backgroundSkin: queuePayload.backgroundSkin
          },
          source: 'matchmaking',
          score1: 0,
          score2: 0,
          targetRounds: 5,
          status: 'ready',
          winner: null,
          roundState: createSharedRoundState(matchRef.id, 1, other.data || queuePayload),
          selections: {},
          createdAt: sdk.serverTimestamp(),
          updatedAt: sdk.serverTimestamp()
        };
        const batch = sdk.writeBatch(fb.db);
        batch.set(matchRef, matchData);
        batch.set(other.ref, {status:'matched', matchId:matchRef.id, matchedAt:sdk.serverTimestamp()}, {merge:true});
        batch.set(queueRef, {status:'matched', matchId:matchRef.id, matchedAt:sdk.serverTimestamp()}, {merge:true});
        await batch.commit();
        logFirebase('info', 'Match created in Firestore: ' + matchRef.id);
        return {status:'matched', matchId:matchRef.id, match:firebaseMatchPayload(matchRef.id, matchData, userId)};
      }
      await sdk.setDoc(queueRef, {status:'waiting'}, {merge:true});
      logFirebase('info', 'Player queued in matchmakingQueue: ' + userId);
      return await waitForQueuedMatch(fb, userId, 9000);
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase matchmaking failed');
      logFirebase('error', 'findMatch failed; local matchmaking fallback will be used.', err);
      return fallback('findMatch', arguments, null, state.lastError);
    }
  }

  async function setSharedRoundState(matchId, roundState){
    const fb = await initFirebase();
    if(!fb || !matchId || !roundState) return null;
    const sdk = fb.sdk;
    try{
      const payload = Object.assign({}, roundState, {
        updatedAtMs: Date.now(),
        status: roundState.status || 'playing'
      });
      await sdk.setDoc(sdk.doc(fb.db, 'matches', String(matchId)), {
        roundState: payload,
        selections: {},
        status: 'in_progress',
        updatedAt: sdk.serverTimestamp()
      }, {merge:true});
      return payload;
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase setSharedRoundState failed');
      logFirebase('error', 'setSharedRoundState failed.', err);
      return null;
    }
  }

  async function submitRoundSelection(matchId, uid, selection){
    const fb = await initFirebase();
    if(!fb || !matchId || !uid) return null;
    const sdk = fb.sdk;
    try{
      const id = String(matchId);
      const ref = sdk.doc(fb.db, 'matches', id);
      const result = await sdk.runTransaction(fb.db, async tx=>{
        const snap = await tx.get(ref);
        if(!snap.exists()) return null;
        const data = snap.data() || {};
        const roundState = data.roundState || createSharedRoundState(id, 1, data.player1 || {});
        const round = Number(roundState.round) || 1;
        const key = selectionKey({authUid:String(uid)});
        const selections = {};
        Object.keys(data.selections || {}).forEach(k=>{
          const value = data.selections[k];
          if(value && Number(value.round) === round) selections[k] = value;
        });
        selections[key] = Object.assign({}, selection || {}, {
          round,
          atMs: Date.now()
        });
        const p1Key = selectionKey(data.player1 || {});
        const p2Key = selectionKey(data.player2 || {});
        const p1Selection = selections[p1Key];
        const p2Selection = selections[p2Key];
        const updates = {
          selections,
          status: data.status === 'ready' ? 'in_progress' : (data.status || 'in_progress'),
          updatedAt: sdk.serverTimestamp()
        };
        if(p1Selection && p2Selection){
          const ballIndex = Number(roundState.ballIndex) || 0;
          const p1Correct = Number(p1Selection.slot) === ballIndex;
          const p2Correct = Number(p2Selection.slot) === ballIndex;
          const gain1 = roundScoreDelta(p1Selection, p1Correct);
          const gain2 = roundScoreDelta(p2Selection, p2Correct);
          const score1 = (Number(data.score1) || 0) + gain1;
          const score2 = (Number(data.score2) || 0) + gain2;
          const targetRounds = Number(data.targetRounds) || 5;
          const matchComplete = round >= targetRounds;
          updates.score1 = score1;
          updates.score2 = score2;
          updates.roundState = Object.assign({}, roundState, {
            status: matchComplete ? 'match_complete' : 'complete',
            result: {
              player1Correct: p1Correct,
              player2Correct: p2Correct,
              slot1: Number(p1Selection.slot),
              slot2: Number(p2Selection.slot),
              gain1,
              gain2,
              resolvedAtMs: Date.now()
            }
          });
          if(matchComplete){
            updates.status = 'complete';
            updates.winner = score1 >= score2 ? 'player1' : 'player2';
          }
        }
        tx.set(ref, updates, {merge:true});
        return Object.assign({}, data, updates, {id});
      });
      return result;
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase submitRoundSelection failed');
      logFirebase('error', 'submitRoundSelection failed.', err);
      return null;
    }
  }

  async function listenMatch(matchId, callback){
    const fb = await initFirebase();
    if(!fb || !matchId || typeof callback !== 'function') return noopUnsubscribe();
    const sdk = fb.sdk;
    try{
      const id = String(matchId);
      let matchData = null;
      let messages = [];
      let legacyChat = [];
      let unsubLegacy = noopUnsubscribe();
      let legacyStarted = false;
      const emit = ()=>{
        const chat = messages.length ? messages : legacyChat;
        callback(matchData ? Object.assign({id, chat}, matchData) : null);
      };
      const unsubMatch = sdk.onSnapshot(sdk.doc(fb.db, 'matches', id), snap=>{
        matchData = snap.exists() ? snap.data() : null;
        emit();
      }, err=>{
        logFirebase('warn', 'matches/' + id + ' listener failed.', errorMessage(err, 'listenMatch failed'));
        callback(null);
      });
      const startLegacyListener = ()=>{
        if(legacyStarted) return;
        legacyStarted = true;
        const legacyQuery = sdk.query(
          sdk.collection(fb.db, 'matches', id, 'chat'),
          sdk.orderBy('atMs','asc'),
          sdk.limit(40)
        );
        unsubLegacy = sdk.onSnapshot(legacyQuery, snap=>{
          legacyChat = [];
          snap.forEach(docSnap=>legacyChat.push(Object.assign({id:docSnap.id}, docSnap.data())));
          emit();
        }, err=>{
          logFirebase('warn', 'matches/' + id + '/chat fallback listener failed.', errorMessage(err, 'legacy match chat listener failed'));
        });
      };
      const messageQuery = sdk.query(
        sdk.collection(fb.db, 'matches', id, 'messages'),
        sdk.orderBy('atMs','asc'),
        sdk.limit(40)
      );
      const unsubMessages = sdk.onSnapshot(messageQuery, snap=>{
        messages = [];
        snap.forEach(docSnap=>messages.push(Object.assign({id:docSnap.id}, docSnap.data())));
        emit();
      }, err=>{
        logFirebase('warn', 'matches/' + id + '/messages listener failed.', errorMessage(err, 'match messages listener failed'));
        startLegacyListener();
      });
      return function(){ try{unsubMatch();}catch(e){} try{unsubMessages();}catch(e){} try{unsubLegacy();}catch(e){} };
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase listenMatch failed');
      logFirebase('error', 'listenMatch failed.', err);
      return noopUnsubscribe();
    }
  }

  async function submitMatchResult(matchId, result){
    const fb = await initFirebase();
    if(!fb || !matchId) return null;
    const sdk = fb.sdk;
    try{
      const payload = Object.assign({
        matchId: String(matchId),
        submittedByAuthUid: state.user && state.user.uid ? state.user.uid : '',
        submittedAt: sdk.serverTimestamp()
      }, result || {});
      const matchUpdate = {
        status: payload.status || 'complete',
        updatedAt: sdk.serverTimestamp()
      };
      if(typeof payload.score1 === 'number') matchUpdate.score1 = payload.score1;
      if(typeof payload.score2 === 'number') matchUpdate.score2 = payload.score2;
      if(payload.winner !== undefined) matchUpdate.winner = payload.winner;
      await sdk.setDoc(sdk.doc(fb.db, 'matches', String(matchId)), matchUpdate, {merge:true});
      await sdk.setDoc(sdk.doc(fb.db, 'matchResults', String(matchId)), payload, {merge:true});
      return payload;
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase submitMatchResult failed');
      logFirebase('error', 'submitMatchResult failed.', err);
      return null;
    }
  }

  async function createTournament(type, data){
    const fb = await initFirebase();
    if(!fb) return fallback('createTournament', [type], null, 'Firebase is not ready');
    const sdk = fb.sdk;
    try{
      const player = data && data.player ? nowPlayer(data.player) : null;
      const payload = Object.assign({
        type: type || 'mini',
        status: 'open',
        players: player ? [player] : [],
        createdAt: sdk.serverTimestamp(),
        updatedAt: sdk.serverTimestamp()
      }, data || {});
      const ref = await sdk.addDoc(sdk.collection(fb.db, 'tournaments'), payload);
      logFirebase('info', 'Tournament created in Firestore: ' + ref.id);
      return {id:ref.id, data:payload};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase createTournament failed');
      logFirebase('error', 'createTournament failed; local tournament fallback will be used.', err);
      return fallback('createTournament', [type], null, state.lastError);
    }
  }

  async function joinTournamentLobby(type, playerData){
    const fb = await initFirebase();
    if(!fb) return null;
    const sdk = fb.sdk;
    const player = nowPlayer(playerData);
    try{
      const q = sdk.query(
        sdk.collection(fb.db, 'tournaments'),
        sdk.where('type', '==', type),
        sdk.where('status', '==', 'lobby'),
        sdk.limit(10)
      );
      const snap = await sdk.getDocs(q);
      let target = null;
      snap.forEach(docSnap=>{
        if(target) return;
        const data = docSnap.data() || {};
        const players = Array.isArray(data.players) ? data.players : [];
        const already = players.some(p=>p.userId===player.userId || (player.authUid && p.authUid===player.authUid));
        if(players.length < 8 && !already) target = {id:docSnap.id, ref:docSnap.ref, data};
      });
      if(target){
        const players = (Array.isArray(target.data.players) ? target.data.players : []).concat([player]);
        await sdk.setDoc(target.ref, {players, updatedAt: sdk.serverTimestamp()}, {merge:true});
        logFirebase('info', 'Joined tournament lobby: ' + target.id);
        return {id: target.id, data: Object.assign({}, target.data, {players})};
      }
      const ref = sdk.doc(sdk.collection(fb.db, 'tournaments'));
      const payload = {type, status:'lobby', players:[player], createdAt: sdk.serverTimestamp(), updatedAt: sdk.serverTimestamp()};
      await sdk.setDoc(ref, payload);
      logFirebase('info', 'Tournament lobby created: ' + ref.id);
      return {id: ref.id, data: payload};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase joinTournamentLobby failed');
      logFirebase('error', 'joinTournamentLobby failed; local tournament fallback will be used.', err);
      return null;
    }
  }

  async function joinTournament(tournamentId, playerData){
    const fb = await initFirebase();
    if(!fb || !tournamentId) return null;
    const sdk = fb.sdk;
    try{
      await sdk.setDoc(sdk.doc(fb.db, 'tournaments', String(tournamentId)), {
        players: sdk.arrayUnion(nowPlayer(playerData)),
        updatedAt: sdk.serverTimestamp()
      }, {merge:true});
      return {id:String(tournamentId)};
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase joinTournament failed');
      logFirebase('error', 'joinTournament failed.', err);
      return null;
    }
  }

  async function listenTournament(tournamentId, callback){
    const fb = await initFirebase();
    if(!fb || !tournamentId || typeof callback !== 'function') return noopUnsubscribe();
    const sdk = fb.sdk;
    try{
      return sdk.onSnapshot(sdk.doc(fb.db, 'tournaments', String(tournamentId)), snap=>{
        callback(snap.exists() ? Object.assign({id:snap.id}, snap.data()) : null);
      }, err=>{
        logFirebase('warn', 'listenTournament failed.', errorMessage(err, 'listenTournament failed'));
        callback(null);
      });
    }catch(err){
      state.lastError = errorMessage(err, 'Firebase listenTournament failed');
      logFirebase('error', 'listenTournament failed.', err);
      return noopUnsubscribe();
    }
  }

  window.TopBulmacaFirebaseService = {
    config: FIREBASE_CONFIG,
    hasRealConfig,
    getStatus: serviceStatus,
    getAuthUid: function(){ return state.user && state.user.uid ? state.user.uid : ''; },
    getLastError: function(){ return state.lastError; },
    initFirebase,
    createRoom,
    joinRoom,
    listenRoom,
    setRoomReady,
    setRoomRounds,
    createRoomMatch,
    sendChatMessage,
    findMatch,
    listenMatch,
    setSharedRoundState,
    submitRoundSelection,
    submitMatchResult,
    createTournament,
    joinTournament,
    joinTournamentLobby,
    listenTournament
  };

  window.createRoom = createRoom;
  window.joinRoom = joinRoom;
  window.listenRoom = listenRoom;
  window.setRoomReady = setRoomReady;
  window.setRoomRounds = setRoomRounds;
  window.createRoomMatch = createRoomMatch;
  window.sendChatMessage = sendChatMessage;
  window.findMatch = findMatch;
  window.listenMatch = listenMatch;
  window.setSharedRoundState = setSharedRoundState;
  window.submitRoundSelection = submitRoundSelection;
  window.submitMatchResult = submitMatchResult;
  window.createTournament = createTournament;
  window.joinTournament = joinTournament;
  window.joinTournamentLobby = joinTournamentLobby;
  window.listenTournament = listenTournament;
})();
