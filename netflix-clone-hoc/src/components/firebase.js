import firebase from "firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0_oXaSvgOyp5x4pwt8Bp-YPQ2IQhVOwg",
  authDomain: "netflix-auth-18894.firebaseapp.com",
  projectId: "netflix-auth-18894",
  storageBucket: "netflix-auth-18894.appspot.com",
  messagingSenderId: "747173043308",
  appId: "1:747173043308:web:4b2881d0946c48a54e0c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);