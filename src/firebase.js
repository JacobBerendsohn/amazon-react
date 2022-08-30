// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtCgZINT6pOAz4y9EsEAM39HTREf42TfI",
  authDomain: "react-3a6cd.firebaseapp.com",
  projectId: "react-3a6cd",
  storageBucket: "react-3a6cd.appspot.com",
  messagingSenderId: "786722462498",
  appId: "1:786722462498:web:7f580ba75a6ff34601637b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);