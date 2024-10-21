// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcaMy0aKqoloRDsa-CMO4aAPTFYpAk0H0",
  authDomain: "proyectomascotas-d1f62.firebaseapp.com",
  projectId: "proyectomascotas-d1f62",
  storageBucket: "proyectomascotas-d1f62.appspot.com",
  messagingSenderId: "318485452633",
  appId: "1:318485452633:web:602793fc029fee71559e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default {
  firebase,
  db
}