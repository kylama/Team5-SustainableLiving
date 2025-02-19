// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-bIVoz56uOIjVRUSLEi9HU2ElEq3RITk",
  authDomain: "sustainable-living-kpsrj.firebaseapp.com",
  projectId: "sustainable-living-kpsrj",
  storageBucket: "sustainable-living-kpsrj.appspot.com",
  messagingSenderId: "505683191256",
  appId: "1:505683191256:web:d47e6e2a880d8789c23ead",
  measurementId: "G-RS5DT7F9BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log(window.location.pathname);


// Check Authentication State and Redirect If Not Logged In
onAuthStateChanged(auth, (user) => {
  console.log("Auth State Changed:", user);
  const isLoginPage = window.location.pathname.includes("login.html");

  if (!user && !isLoginPage) {
    // Redirect to login page if user is NOT logged in and NOT already on login.html
    window.location.href = "login.html";
  } else if (user && isLoginPage) {
    // Redirect logged-in users away from the login page to index.html
    window.location.href = "index.html";
  }

  // Update UI with user info if logged in
  if (user) {
    document.getElementById("user-info")?.innerText = `Logged in as: ${user.email}`;
  } else {
    document.getElementById("user-info")?.innerText = "Not logged in";
  }
});

// Sign-Up Function
window.signUp = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registration Successful!");
      window.location.href = "index.html"; // Redirect after sign-up
    })
    .catch((error) => alert(error.message));
};

// Sign-In Function
window.signIn = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful!");
      window.location.href = "index.html"; // Redirect after login
    })
    .catch((error) => alert(error.message));
};

// Sign-Out Function
window.signOut = function () {
  signOut(auth)
    .then(() => {
      alert("Signed Out!");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => alert(error.message));
};
