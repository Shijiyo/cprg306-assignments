// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1kzLRWxP9MDs89cWo74Hzd4rbpne7vDo",
  authDomain: "cprg306-assignments-51177.firebaseapp.com",
  projectId: "cprg306-assignments-51177",
  storageBucket: "cprg306-assignments-51177.firebasestorage.app",
  messagingSenderId: "29495821809",
  appId: "1:29495821809:web:400bf331d00b6832ffb050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log("✅ Firebase Config Loaded:", firebaseConfig);
export const db = getFirestore(app);
