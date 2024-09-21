// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyChpDQMNvZPguxfgmwczvKgHzrDDWTktck",
  authDomain: "iamabieyuwa.firebaseapp.com",
  projectId: "iamabieyuwa",
  storageBucket: "iamabieyuwa.appspot.com",
  messagingSenderId: "870146696291",
  appId: "1:870146696291:web:29b903f4a9414337e40456",
  measurementId: "G-0G7HSP14VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
