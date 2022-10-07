// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSfK-cqcTVUBaZuICH2YpFx0TdFCp-R1U",
  authDomain: "authfirebaseandjs.firebaseapp.com",
  projectId: "authfirebaseandjs",
  storageBucket: "authfirebaseandjs.appspot.com",
  messagingSenderId: "928774794174",
  appId: "1:928774794174:web:9b8df8839a15feb5d467ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);