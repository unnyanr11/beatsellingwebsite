// Import Firebase libraries  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";  
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";  

// Replace this with your Firebase configuration  
const firebaseConfig = {  
    apiKey: "YOUR_FIREBASE_API_KEY",  
    authDomain: "YOUR_FIREBASE_PROJECT_ID.firebaseapp.com",  
    projectId: "YOUR_FIREBASE_PROJECT_ID",  
    storageBucket: "YOUR_FIREBASE_PROJECT_ID.appspot.com",  
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",  
    appId: "YOUR_FIREBASE_APP_ID"  
};  

// Initialize Firebase  
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);  

// Export Auth for use in other files  
export { auth };  