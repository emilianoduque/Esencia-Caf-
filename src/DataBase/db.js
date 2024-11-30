import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA689noNrTg3uhX_kVhQgdWFKfxQR1fxFI",
  authDomain: "esenciacafe-8494f.firebaseapp.com",
  projectId: "esenciacafe-8494f",
  storageBucket: "esenciacafe-8494f.firebasestorage.app",
  messagingSenderId: "37574138431",
  appId: "1:37574138431:web:a05ee0c36616a15d2a768a"
};

const app = initializeApp(firebaseConfig);

const dataBase = getFirestore();

export default dataBase