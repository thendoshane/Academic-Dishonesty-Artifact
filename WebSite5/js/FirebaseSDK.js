// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9d78x1She0sBMzZ4bLFDWT5njYNRa8gQ",
    authDomain: "academic-dishonesty.firebaseapp.com",
    projectId: "academic-dishonesty",
    storageBucket: "academic-dishonesty.firebasestorage.app",
    messagingSenderId: "951390234868",
    appId: "1:951390234868:web:97ee9943f76436ddc516a1",
    measurementId: "G-TS6W0RGWMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
