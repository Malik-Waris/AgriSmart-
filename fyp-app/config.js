import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC8A-7dOoXAWy4x_ANrWuF77dvhQ5JP6mM",
    authDomain: "fyp2023-3d5b4.firebaseapp.com",
    projectId: "fyp2023-3d5b4",
    storageBucket: "fyp2023-3d5b4.appspot.com",
    messagingSenderId: "117818545006",
    appId: "1:117818545006:web:020e72c76515666c78e77f",
    measurementId: "G-VNBJD1XJCS"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
export {firebase};