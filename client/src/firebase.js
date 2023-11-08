// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-8becd.firebaseapp.com",
  projectId: "mern-auth-8becd",
  storageBucket: "mern-auth-8becd.appspot.com",
  messagingSenderId: "1052507265933",
  appId: "1:1052507265933:web:37666e78a54ff895b7fbc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);