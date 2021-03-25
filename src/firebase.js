import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDscdZgjOr43p2Te7EUm8_ygKOzTW_D-bw",
  authDomain: "mail-clone-nur.firebaseapp.com",
  projectId: "mail-clone-nur",
  storageBucket: "mail-clone-nur.appspot.com",
  messagingSenderId: "918542077069",
  appId: "1:918542077069:web:997a60873a242938d9e6c4",
  measurementId: "G-EE634ZKQ70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
