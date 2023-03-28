// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN4JXJLNvUAscnO-XQD8iOh2ArG3WVOik",
  authDomain: "loginatp-9e12a.firebaseapp.com",
  projectId: "loginatp-9e12a",
  storageBucket: "loginatp-9e12a.appspot.com",
  messagingSenderId: "1024212473633",
  appId: "1:1024212473633:web:20fe146ca41fa3dc3e5060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase auth init
const auth = getAuth();

export { app, auth };
