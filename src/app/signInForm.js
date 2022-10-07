import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from "./firebase.js";
import {showMessage} from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit",async(event)=>{
    event.preventDefault();

    let email = signInForm["login-email"].value;
    let password = signInForm["login-password"].value;

    try {
        let credentials = await signInWithEmailAndPassword(auth,email,password);
        console.log(credentials);

         //Colse sign In Modal         
         let modal =bootstrap.Modal.getInstance(document.querySelector("#SigninModal"));
         modal.hide();

         showMessage("Welcome "+credentials.user.email);

    } catch (error) {

        if(error.code ==="auth/wrong-password"){
            showMessage("wrong password","error");
        }else if (error.code ==="auth/user-not-found"){
            showMessage("User not found","error");
        }else{
            showMessage(error.message,"error");
        }

        console.log(error);
    }    
    
});
