import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword 
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

let Register_btn=document.getElementById("Register_btn");

Register_btn.addEventListener("click",function(){

    let email = document.getElementById("email")

    let password = document.getElementById("password")

    createUserWithEmailAndPassword(auth, email.value, password.value)
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

    console.log("erroe==>", errorMessage);

    // ..
  });

})