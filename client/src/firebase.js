// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c1665.firebaseapp.com",
  projectId: "mern-auth-c1665",
  storageBucket: "mern-auth-c1665.appspot.com",
  messagingSenderId: "253983878232",
  appId: "1:253983878232:web:338d330103ac5e92262e2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);