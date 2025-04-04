// Import Firebase services  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";  
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";  
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";  
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";  

// Your Firebase configuration  
const firebaseConfig = {  
    apiKey: "AIzaSyBhJyFsPwo_oBdNwK_ptLtzt4zTY0c79Ss",  
    authDomain: "beatsellingwebsite-94196.firebaseapp.com",  
    projectId: "beatsellingwebsite-94196",  
    storageBucket: "beatsellingwebsite-94196.firebasestorage.app", // Your correct storage bucket  
    messagingSenderId: "406150768488",  
    appId: "1:406150768488:web:e0ca848b632d16e4b898dd",  
    measurementId: "G-TFDMRFEE0X" // Optional for Google Analytics  
};  

// Initialize Firebase  
const app = initializeApp(firebaseConfig);  

// Firebase services initialization  
const auth = getAuth(app);           // Initialize Firebase Authentication  
const db = getFirestore(app);        // Initialize Firestore  
const storage = getStorage(app);     // Initialize Firebase Storage  

// Export Firebase services  
export { auth, db, storage };  