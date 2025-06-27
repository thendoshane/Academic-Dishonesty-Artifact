import { auth } from "../FirebaseSDK.js";
import { signInWithEmailLink } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const completeSignIn = async () => {
    if (auth.isSignInWithEmailLink(window.location.href)) {
    const email = window.localStorage.getItem("emailForSignIn") || prompt("Please provide your email for confirmation:");
try {
    await signInWithEmailLink(auth, email, window.location.href);
    alert("Sign-in successful!");
    window.localStorage.removeItem("emailForSignIn");
    window.location.href = "Dashboard.html"; // Redirect to dashboard

} catch (error) {
    console.error("Error signing in:", error);
    alert("Sign-in failed.");
}
}
};

// Call the function when the page loads
window.addEventListener("load", completeSignIn);
