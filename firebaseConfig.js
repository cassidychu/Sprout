// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2jqi7NENErc56G4OAKFt5djmp97estnE",
  authDomain: "sprout-6dcff.firebaseapp.com",
  projectId: "sprout-6dcff",
  storageBucket: "sprout-6dcff.appspot.com",
  messagingSenderId: "848047504850",
  appId: "1:848047504850:web:04762d2b1fb9e4f9951c0b",
  measurementId: "G-TBCEYF1KS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firestore
export const db = getFirestore(app);

//

