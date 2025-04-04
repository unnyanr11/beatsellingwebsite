// Import Firebase modules  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";  
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";  

// Your Firebase configuration  
const firebaseConfig = {  
    apiKey: "YOUR_API_KEY",  
    authDomain: "YOUR_AUTH_DOMAIN",  
    projectId: "YOUR_PROJECT_ID",  
    storageBucket: "YOUR_STORAGE_BUCKET",  
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  
    appId: "YOUR_APP_ID",  
};  

// Initialize Firebase  
const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);  

// Google Auth Provider for Gmail login  
export const googleAuthProvider = new GoogleAuthProvider();  