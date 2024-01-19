// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXm318P8kLAmF5GfcsXeQv4RWFbbrIXZM",
  authDomain: "greater-finance-firebase.firebaseapp.com",
  projectId: "greater-finance-firebase",
  storageBucket: "greater-finance-firebase.appspot.com",
  messagingSenderId: "153512542306",
  appId: "1:153512542306:web:e1338bb2be6029283dd13b",
  measurementId: "G-KRVC5BC8WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()