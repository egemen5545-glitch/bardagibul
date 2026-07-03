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
    return Object.assign({
      id: 'player-' + Date.now(),
      name: 'Oyuncu',
      avatar: '⭐',
      ready: false,
      joinedAt: Date.now()
    }, extra || {});
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

  async function findMatch(playerData){
    const fb = await initFirebase();
    if(!fb) return fallback('findMatch', arguments, null);
    const sdk = fb.sdk;
    const payload = {
      player: nowPlayer(playerData),
      status: 'searching',
      elo: Number(playerData && playerData.elo) || 1000,
      createdAt: sdk.serverTimestamp()
    };
    const ref = await sdk.addDoc(sdk.collection(fb.db, 'matchRequests'), payload);
    return {requestId:ref.id, data:payload};
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
