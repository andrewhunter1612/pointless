import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdmoDGLhKtxNZXnECUTOwleqjiZHTzIxk",
  authDomain: "pointless-bd496.firebaseapp.com",
  databaseURL: "https://pointless-bd496-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pointless-bd496",
  storageBucket: "pointless-bd496.appspot.com",
  messagingSenderId: "697257414557",
  appId: "1:697257414557:web:c5c1db16b708475011a974",
  measurementId: "G-F07F5NE3WT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics()

export const auth = firebase.auth()

export default db;
