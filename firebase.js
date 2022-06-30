// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeLLG2hQI3n_mfGMQNzd5o10bOc9lpLAk",
  authDomain: "instagram-clone-183c9.firebaseapp.com",
  projectId: "instagram-clone-183c9",
  storageBucket: "instagram-clone-183c9.appspot.com",
  messagingSenderId: "591388164053",
  appId: "1:591388164053:web:a003870ce4647c78d3075c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };