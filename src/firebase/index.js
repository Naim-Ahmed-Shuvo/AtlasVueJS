// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBGgQbMop9SyOm31xhHtde_oIzsz27jUXs",

  authDomain: "atlas-39657.firebaseapp.com",

  projectId: "atlas-39657",

  storageBucket: "atlas-39657.appspot.com",

  messagingSenderId: "89691281595",

  appId: "1:89691281595:web:890ec613ecccab392eb19e",

  measurementId: "G-52Y77YPYNL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);

export { getAuth, signInWithPopup, GoogleAuthProvider };