import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "store-tutorial-d1cb6.firebaseapp.com",
    projectId: "store-tutorial-d1cb6",
    storageBucket: "store-tutorial-d1cb6.appspot.com",
    messagingSenderId: "733431122470",
    appId: "1:733431122470:web:aa9ecec8a37349640174e7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);