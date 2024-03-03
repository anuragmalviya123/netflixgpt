// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8zg16cjubdMuEDNbYdOR__-ywvlgKr00",
  authDomain: "netflixgpt-95264.firebaseapp.com",
  projectId: "netflixgpt-95264",
  storageBucket: "netflixgpt-95264.appspot.com",
  messagingSenderId: "655264776160",
  appId: "1:655264776160:web:9e40154db3dc4c69cf7585",
  measurementId: "G-MKG44SD6E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);