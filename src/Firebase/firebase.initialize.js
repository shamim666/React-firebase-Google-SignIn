import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

//this comes from https://console.firebase.google.com/project/simple-firebase-auth-993a1/settings/general/web:M2M2ODY0MjItZDdiNC00NWJiLWEzNDgtMzRlMjViYTU3Mjgx

const firebaseAuthentication = () => {
// firebaseConfig comes from firebase.config.js
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication ; 