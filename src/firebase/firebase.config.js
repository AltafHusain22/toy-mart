// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAix23GYIG4mwfCHLB3tmnTqE2j5xdQMEY",
  authDomain: "toys-mart-78a65.firebaseapp.com",
  projectId: "toys-mart-78a65",
  storageBucket: "toys-mart-78a65.appspot.com",
  messagingSenderId: "361043696232",
  appId: "1:361043696232:web:71876aea2ee9ba970879dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}