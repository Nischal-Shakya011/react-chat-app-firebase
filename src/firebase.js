// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT_CPaLSFooisgf3BB4piWKpsI-YoPf6Q",
  authDomain: "react-chat-app-1b4ec.firebaseapp.com",
  projectId: "react-chat-app-1b4ec",
  storageBucket: "react-chat-app-1b4ec.appspot.com",
  messagingSenderId: "399009897400",
  appId: "1:399009897400:web:d8b06cd65e35a62b5c8d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);