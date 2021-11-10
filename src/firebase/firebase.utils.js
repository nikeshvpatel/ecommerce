import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBuu_h34jGWVYlGEo8uEBViP0iYODCTVdA",
    authDomain: "crown-db-home.firebaseapp.com",
    projectId: "crown-db-home",
    storageBucket: "crown-db-home.appspot.com",
    messagingSenderId: "1062393804563",
    appId: "1:1062393804563:web:34a0dd77c6e38a4a7ccce6",
    measurementId: "G-8VXCW34JXN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;