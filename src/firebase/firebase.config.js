// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV0-NZ4fCb76sVGuMoRWuwUW1BBvCBgoU",
    authDomain: "auth-firebase-practice-645c3.firebaseapp.com",
    projectId: "auth-firebase-practice-645c3",
    storageBucket: "auth-firebase-practice-645c3.appspot.com",
    messagingSenderId: "324801321794",
    appId: "1:324801321794:web:1f0e8144c14a689be886db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);