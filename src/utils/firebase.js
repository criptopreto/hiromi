import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBR-54QEZHiZ01hVGObye6mc3hc8rhBKs0",
  authDomain: "hiromito-go.firebaseapp.com",
  projectId: "hiromito-go",
  storageBucket: "hiromito-go.appspot.com",
  messagingSenderId: "699977759863",
  appId: "1:699977759863:web:b5f4f6c8e7ec0e52979a72",
  databaseURL: "https://hiromito-go-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});

/*if(window.location.hostname === "localhost"){
    firebase.firestore().useEmulator("localhost", 8080);
}*/

firebase.firestore().enablePersistence();

export default firebase;
