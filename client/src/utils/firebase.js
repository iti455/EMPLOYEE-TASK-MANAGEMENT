// client/src/firebase.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "ems-1-8f176.firebaseapp.com",
  projectId: "ems-1-8f176",
  storageBucket: "ems-1-8f176.appspot.com",
  messagingSenderId: "158069190951",
  appId: "1:158069190951:web:2986a4a3ca29c55dbbb902"
};

export const app = initializeApp(firebaseConfig);
