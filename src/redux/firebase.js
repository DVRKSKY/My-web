// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {addDoc, collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC4BrLhsTDgwcuGPlc9_kQgaiOfs8yv4lU",
  authDomain: "insomnio-98e06.firebaseapp.com",
  projectId: "insomnio-98e06",
  storageBucket: "insomnio-98e06.appspot.com",
  messagingSenderId: "1018968559055",
  appId: "1:1018968559055:web:77197179ce1e47e2c796ba",
  measurementId: "G-4ELE735WCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app)
export const crearEmail = (item) => addDoc(collection(firestore,"email"),item)
