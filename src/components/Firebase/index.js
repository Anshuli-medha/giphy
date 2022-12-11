// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3W9E0nSnleCSdVLrrTxery4xjCgNmKEU",
  authDomain: "email-authentication-2be7e.firebaseapp.com",
  projectId: "email-authentication-2be7e",
  storageBucket: "email-authentication-2be7e.appspot.com",
  messagingSenderId: "255333193980",
  appId: "1:255333193980:web:7ca38b7e3fb8705e721f79",
  measurementId: "G-YFQK2RRSK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;