// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCv98gWqpF4-BimP5JbMfXhjnTbgusytVQ",
//   authDomain: "netflix-auth-cc206.firebaseapp.com",
//   projectId: "netflix-auth-cc206",
//   storageBucket: "netflix-auth-cc206.appspot.com",
//   messagingSenderId: "268299568558",
//   appId: "1:268299568558:web:804dedb765aeff8e2ff43f"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyCv98gWqpF4-BimP5JbMfXhjnTbgusytVQ",
//   authDomain: "netflix-auth-cc206.firebaseapp.com",
//   projectId: "netflix-auth-cc206",
//   storageBucket: "netflix-auth-cc206.appspot.com",
//   messagingSenderId: "268299568558",
//   appId: "1:268299568558:web:e9990e06eebc00f22ff43f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD36Ravuj9poanqVygutteNbrNOostRoxw",
  authDomain: "netflix-auth-new.firebaseapp.com",
  projectId: "netflix-auth-new",
  storageBucket: "netflix-auth-new.appspot.com",
  messagingSenderId: "589112382859",
  appId: "1:589112382859:web:8d35a188fbf9415d2bcb8e"
};

// Initialize Firebase
// export const app = firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
console.log(provider);
export { auth, provider };
export default db;