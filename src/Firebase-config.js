// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA33j2muFnNaPNPEZvKrt1qD43ou84lsT0",
  authDomain: "blog-b37b7.firebaseapp.com",
  projectId: "blog-b37b7",
  storageBucket: "blog-b37b7.appspot.com",
  messagingSenderId: "344245594373",
  appId: "1:344245594373:web:7d903482f8ff605c202f6c",
  measurementId: "G-X69E1XBYEB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();