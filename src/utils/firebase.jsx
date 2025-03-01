// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk_sA66j1kCj7zTNRuMkW1OMpilaIj_8E",
  authDomain: "netflixgpt-9b986.firebaseapp.com",
  projectId: "netflixgpt-9b986",
  storageBucket: "netflixgpt-9b986.firebasestorage.app",
  messagingSenderId: "200201033783",
  appId: "1:200201033783:web:785cea7f9efc6b390f87b2",
  measurementId: "G-JWRGQ9EKDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
