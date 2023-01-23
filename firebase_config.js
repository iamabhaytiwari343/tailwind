// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ244-8QGbJ4Qf-MNV5QhtxHoXHsdEPNQ",
  authDomain: "hosting-d6498.firebaseapp.com",
  projectId: "hosting-d6498",
  storageBucket: "hosting-d6498.appspot.com",
  messagingSenderId: "440855941742",
  appId: "1:440855941742:web:9a3b78f9fa44ce3a1c4c7f",
  measurementId: "G-P4DY6LW5X2"
};

// Initialize Firebase
export app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);