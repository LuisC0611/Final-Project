import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIF0VPUQmRzCfa8b-alHbAGzWRCqZe4wk",
  authDomain: "chatproject-32f48.firebaseapp.com",
  projectId: "chatproject-32f48",
  storageBucket: "chatproject-32f48.appspot.com",
  messagingSenderId: "1078980617985",
  appId: "1:1078980617985:web:d7daf59266a81852dd9d00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

