// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIoXP2A1W8ro_BwS-D_rQSuaGjirWiCOo",
  authDomain: "fir-auth-b4be6.firebaseapp.com",
  projectId: "fir-auth-b4be6",
  storageBucket: "fir-auth-b4be6.appspot.com",
  messagingSenderId: "884240602885",
  appId: "1:884240602885:web:68fffefbbf29bead12496c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };

// Initialize Firebase Authentication and get a reference to the service
