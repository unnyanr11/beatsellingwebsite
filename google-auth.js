// Import Firebase services  
import { auth } from "./firebase-config.js"; // Import initialized Firebase Auth  
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";  

// Create a GoogleAuthProvider instance  
const googleProvider = new GoogleAuthProvider();  

// Add an event listener for the Google login button  
document.getElementById("google-login").addEventListener("click", async () => {  
    try {  
        // Sign in the user with a popup  
        const result = await signInWithPopup(auth, googleProvider);  

        // Display a success message  
        alert(`Welcome, ${result.user.displayName}`);  
    } catch (error) {  
        // Display an error message  
        alert(`Error: ${error.message}`);  
    }  
});  