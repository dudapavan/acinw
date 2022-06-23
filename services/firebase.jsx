// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0oAvEouXp2xoqk5hWmRod11C-ytI06pE",
  authDomain: "crud-e43e5.firebaseapp.com",
  projectId: "crud-e43e5",
  storageBucket: "crud-e43e5.appspot.com",
  messagingSenderId: "1015155435765",
  appId: "1:1015155435765:web:dd8d757c58522ba4d6fdbc",
  measurementId: "G-QB3XQSC9YF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)