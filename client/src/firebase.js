// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "appp-658d1.firebaseapp.com",
  projectId: "appp-658d1",
  storageBucket: "appp-658d1.appspot.com",
  messagingSenderId: "400487562014",
  appId: "1:400487562014:web:c58702c886d663934b270f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);