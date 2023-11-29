// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvlC4n4eDQMuQtivnIm0n7Ff6STFzdM2s",
  authDomain: "gallery-d088e.firebaseapp.com",
  projectId: "gallery-d088e",
  storageBucket: "gallery-d088e.appspot.com",
  messagingSenderId: "954465719950",
  appId: "1:954465719950:web:e38c7ef44888b6cad15bdf",
  measurementId: "G-TDW8J23ZQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);