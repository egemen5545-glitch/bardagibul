/* global createRoomMock, joinRoomMock, sendChatMock, findMatchMock, startTournamentMock */
(function(){
  'use strict';

  const FIREBASE_SDK_VERSION = '10.12.5';
  // Firebase Console degerleri buraya girilecek. Placeholder kaldiginda mock fallback aktif kalir.
  const FIREBASE_CONFIG = {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'YOUR_FIREBASE_AUTH_DOMAIN',
    projectId: 'YOUR_FIREBASE_PROJECT_ID',
    storageBucket: 'YOUR_FIREBASE_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_FIREBASE_MESSAGING_SENDER_ID',
    appId: 'YOUR_FIREBASE_APP_ID'
  };

  const state = {
    app: null,
    db: null,
    sdk: null,
    initPromise: null,
    lastError: ''
  };

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
      elo: 1000,
      ready: false,
      joinedAt: Date.now()
    }, data);
  }

  function noopUnsubscribe(){
    return function(){};
  }

  function fallback(fnName, args, emptyValue){
    const map = {
      createRoom: 'createRoomMock',
      joinRoom: 'joinRoomMock',
      sendChatMessage: 'sendChatMock',
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
    if(!hasRealConfig()) return null;
    if(state.db && state.sdk) return state;
    if(state.initPromise) return state.initPromise;
    state.initPromise = (async ()=>{
      try{
        const appSdk = await import('https://www.gstatic.com/firebasejs/' + FIREBASE_SDK_VERSION + '/firebase-app.js');
        const firestoreSdk = await import('https://www.gstatic.com/firebasejs/' + FIREBASE_SDK_VERSION + '/firebase-firestore.js');
        state.app = appSdk.initializeApp(FIREBASE_CONFIG);
        state.db = firestoreSdk.getFirestore(state.app);
        state.sdk = firestoreSdk;
        state.lastError = '';
        return state;
      }catch(err){
        state.lastError = err && err.message ? err.message : 'Firebase init failed';
        state.app = null;
        state.db = null;
        state.sdk = null;
        return null;
      }finally{
        state.initPromise = null;
      }
    })();
    return state.initPromise;
  }

  async function createRoom(roomData){
    const fb = await initFirebase();
    if(!fb) return fallback('createRoom', arguments, null);
    const sdk = fb.sdk;
    const code = String((roomData && roomData.code) || code4());
    const payload = Object.assign({
      code,
      status: 'lobby',
      players: [nowPlayer(roomData && roomData.player)],
      rounds: 5,
      createdAt: sdk.serverTimestamp(),
      updatedAt: sdk.serverTimestamp()
    }, roomData || {});
    await sdk.setDoc(sdk.doc(fb.db, 'rooms', code), payload, {merge:true});
    return {code, id:code, data:payload};
  }

  async function joinRoom(code, playerData){
    const normalized = String(code || '').trim();
    if(!/^\d{4}$/.test(normalized)) return fallback('joinRoom', [code], null);
    const fb = await initFirebase();
    if(!fb) return fallback('joinRoom', [code], null);
    const sdk = fb.sdk;
    const ref = sdk.doc(fb.db, 'rooms', normalized);
    await sdk.setDoc(ref, {
      code: normalized,
      status: 'lobby',
      players: sdk.arrayUnion(nowPlayer(playerData)),
      updatedAt: sdk.serverTimestamp()
    }, {merge:true});
    return {code:normalized, id:normalized};
  }

  async function listenRoom(code, callback){
    const normalized = String(code || '').trim();
    const fb = await initFirebase();
    if(!fb || !normalized || typeof callback !== 'function') return noopUnsubscribe();
    const sdk = fb.sdk;
    return sdk.onSnapshot(sdk.doc(fb.db, 'rooms', normalized), snap=>{
      callback(snap.exists() ? Object.assign({id:snap.id}, snap.data()) : null);
    }, ()=>callback(null));
  }

  async function sendChatMessage(targetId, message, playerData){
    if(arguments.length === 1) return fallback('sendChatMessage', [targetId], null);
    const text = String(message || '').trim();
    const fb = await initFirebase();
    if(!fb || !targetId || !text) return fallback('sendChatMessage', [message || targetId], null);
    const sdk = fb.sdk;
    const payload = {
      from: nowPlayer(playerData),
      text: text.slice(0, 160),
      createdAt: sdk.serverTimestamp()
    };
    await sdk.addDoc(sdk.collection(fb.db, 'rooms', String(targetId), 'chat'), payload);
    return payload;
  }

  function firebaseMatchPayload(matchId, data, userId){
    const player1 = data.player1 || {};
    const player2 = data.player2 || {};
    return {
      id: matchId,
      matchId,
      status: data.status || 'ready',
      player1,
      player2,
      score1: Number(data.score1) || 0,
      score2: Number(data.score2) || 0,
      winner: data.winner || null,
      playerSlot: player1.userId === userId ? 'player1' : 'player2'
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
    if(!fb) return fallback('findMatch', arguments, null);
    const sdk = fb.sdk;
    const player = nowPlayer(playerData);
    const elo = Math.max(500, Math.min(2500, Math.round(Number(player.elo) || 1000)));
    const userId = String(player.userId || player.id);
    const queueRef = sdk.doc(fb.db, 'matchmakingQueue', userId);
    const queuePayload = {
      userId,
      name: String(player.name || 'Oyuncu').slice(0, 24),
      avatar: player.avatar || '⭐',
      elo,
      status: 'searching',
      joinedAt: sdk.serverTimestamp(),
      joinedAtMs: Date.now()
    };
    try{
      await sdk.setDoc(queueRef, queuePayload, {merge:true});
      const q = sdk.query(
        sdk.collection(fb.db, 'matchmakingQueue'),
        sdk.where('status','in',['waiting','searching']),
        sdk.limit(20)
      );
      const snap = await sdk.getDocs(q);
      const candidates = [];
      snap.forEach(docSnap=>{
        const data = docSnap.data();
        const candidateElo = Number(data && data.elo) || 1000;
        if(data && data.userId !== userId && Math.abs(candidateElo - elo) <= 150) candidates.push({id:docSnap.id, ref:docSnap.ref, data});
      });
      candidates.sort((a,b)=>(Number(a.data.joinedAtMs)||0)-(Number(b.data.joinedAtMs)||0));
      const other = candidates[0];
      if(other){
        const matchRef = sdk.doc(sdk.collection(fb.db, 'matches'));
        const matchData = {
          player1: {
            userId: other.data.userId,
            name: other.data.name || 'Rakip',
            avatar: other.data.avatar || '🎱',
            elo: Number(other.data.elo) || 1000
          },
          player2: {
            userId,
            name: queuePayload.name,
            avatar: queuePayload.avatar,
            elo
          },
          score1: 0,
          score2: 0,
          status: 'ready',
          winner: null,
          createdAt: sdk.serverTimestamp(),
          updatedAt: sdk.serverTimestamp()
        };
        const batch = sdk.writeBatch(fb.db);
        batch.set(matchRef, matchData);
        batch.set(other.ref, {status:'matched', matchId:matchRef.id, matchedAt:sdk.serverTimestamp()}, {merge:true});
        batch.set(queueRef, {status:'matched', matchId:matchRef.id, matchedAt:sdk.serverTimestamp()}, {merge:true});
        await batch.commit();
        return {status:'matched', matchId:matchRef.id, match:firebaseMatchPayload(matchRef.id, matchData, userId)};
      }
      await sdk.setDoc(queueRef, {status:'waiting'}, {merge:true});
      return await waitForQueuedMatch(fb, userId, 9000);
    }catch(err){
      state.lastError = err && err.message ? err.message : 'Firebase matchmaking failed';
      return fallback('findMatch', arguments, null);
    }
  }

  async function listenMatch(matchId, callback){
    const fb = await initFirebase();
    if(!fb || !matchId || typeof callback !== 'function') return noopUnsubscribe();
    const sdk = fb.sdk;
    return sdk.onSnapshot(sdk.doc(fb.db, 'matches', String(matchId)), snap=>{
      callback(snap.exists() ? Object.assign({id:snap.id}, snap.data()) : null);
    }, ()=>callback(null));
  }

  async function submitMatchResult(matchId, result){
    const fb = await initFirebase();
    if(!fb || !matchId) return null;
    const sdk = fb.sdk;
    const payload = Object.assign({
      matchId: String(matchId),
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
  }

  async function createTournament(type, data){
    const fb = await initFirebase();
    if(!fb) return fallback('createTournament', [type], null);
    const sdk = fb.sdk;
    const payload = Object.assign({
      type: type || 'mini',
      status: 'open',
      players: [],
      createdAt: sdk.serverTimestamp(),
      updatedAt: sdk.serverTimestamp()
    }, data || {});
    const ref = await sdk.addDoc(sdk.collection(fb.db, 'tournaments'), payload);
    return {id:ref.id, data:payload};
  }

  async function joinTournament(tournamentId, playerData){
    const fb = await initFirebase();
    if(!fb || !tournamentId) return null;
    const sdk = fb.sdk;
    await sdk.setDoc(sdk.doc(fb.db, 'tournaments', String(tournamentId)), {
      players: sdk.arrayUnion(nowPlayer(playerData)),
      updatedAt: sdk.serverTimestamp()
    }, {merge:true});
    return {id:String(tournamentId)};
  }

  async function listenTournament(tournamentId, callback){
    const fb = await initFirebase();
    if(!fb || !tournamentId || typeof callback !== 'function') return noopUnsubscribe();
    const sdk = fb.sdk;
    return sdk.onSnapshot(sdk.doc(fb.db, 'tournaments', String(tournamentId)), snap=>{
      callback(snap.exists() ? Object.assign({id:snap.id}, snap.data()) : null);
    }, ()=>callback(null));
  }

  window.TopBulmacaFirebaseService = {
    config: FIREBASE_CONFIG,
    hasRealConfig,
    initFirebase,
    createRoom,
    joinRoom,
    listenRoom,
    sendChatMessage,
    findMatch,
    listenMatch,
    submitMatchResult,
    createTournament,
    joinTournament,
    listenTournament
  };

  window.createRoom = createRoom;
  window.joinRoom = joinRoom;
  window.listenRoom = listenRoom;
  window.sendChatMessage = sendChatMessage;
  window.findMatch = findMatch;
  window.listenMatch = listenMatch;
  window.submitMatchResult = submitMatchResult;
  window.createTournament = createTournament;
  window.joinTournament = joinTournament;
  window.listenTournament = listenTournament;
})();
