import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAhJTV5T68gZIySvpanLtnb3op9rrekopE",
  authDomain: "utube-fcbaf.firebaseapp.com",
  projectId: "utube-fcbaf",
  storageBucket: "utube-fcbaf.appspot.com",
  messagingSenderId: "915433749395",
  appId: "1:915433749395:web:4aaf0e457cdf9aebdf4666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

let login_btn= document.getElementById("login_btn")

login_btn .addEventListener("click",function(){

    let login_email = document.getElementById("login_email")
    let login_password = document.getElementById("login_password")

    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;{
        window.location.href="../youtube clone/index.html"
    }
    console.log("user==>", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("error==>",errorMessage);
  });
})