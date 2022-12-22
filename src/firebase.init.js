// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxZChjQQ020aiW5Iw-nUmBSETk_SRL4_g",
    authDomain: "hammer-and-saw.firebaseapp.com",
    projectId: "hammer-and-saw",
    storageBucket: "hammer-and-saw.appspot.com",
    messagingSenderId: "1032085621849",
    appId: "1:1032085621849:web:f5a9f555ae7de5128af548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;