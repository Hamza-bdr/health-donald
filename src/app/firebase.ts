// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "health-donald-5ec18.firebaseapp.com",
  projectId: "health-donald-5ec18",
  storageBucket: "health-donald-5ec18.firebasestorage.app",
  messagingSenderId: "786170043704",
  appId: "1:786170043704:web:aae16ed974e62fcb8035cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
