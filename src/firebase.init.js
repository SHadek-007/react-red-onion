// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMizseNjWqvCIkTtpPl6_uKDeBT-fr_5w",
  authDomain: "react-red-onion-f44cb.firebaseapp.com",
  projectId: "react-red-onion-f44cb",
  storageBucket: "react-red-onion-f44cb.appspot.com",
  messagingSenderId: "576012577505",
  appId: "1:576012577505:web:8be47fd04e747f2ce565a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;