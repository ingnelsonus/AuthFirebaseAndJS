import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm =document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (event)=>{
    event.preventDefault();
    
    let email = signupForm["signup-email"].value;
    let password = signupForm["signup-password"].value;    

    try {
        //Create user on FireBase
        let userCredentials = await createUserWithEmailAndPassword(auth,email,password);        

        //Colse signUp Modal
        let signupModal = document.querySelector("#signupModal");
        let modal =bootstrap.Modal.getInstance(signupModal)
        modal.hide();

        showMessage("Welsonce "+userCredentials.user.email);

    } catch (error) {       
        if(error.code==="auth/invalid-email"){            
            showMessage("Invalid email","error");
        } else if(error.code==="auth/weak-password"){            
            showMessage("Password is to wak","error");
        }else if(error.code==="auth/email-already-in-use"){            
            showMessage("email already in use","error");
        }else if(error.code){            
            showMessage("something went wrong","error");
        }
    }
});
