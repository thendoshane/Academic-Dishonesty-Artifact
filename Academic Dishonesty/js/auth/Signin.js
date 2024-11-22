import { auth } from "../FirebaseSDK.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
console.log("User signed in:", userCredential.user);
alert("Sign-in successful!");
window.location.href = "../Html/Dashboard.html"; // Redirect to Dashboard
} catch (error) {
    console.error("Error signing in:", error);
    alert(error.message);
}
};

// Attach to your form
document.getElementById("signin-form").addEventListener("submit", (event) => {
    event.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
signIn(email, password);
});
