// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAXOZyRlE6agoj3hZn-rja5saJzwsUq1kE",
  authDomain: "e-shopwebapp-8cbc6.firebaseapp.com",
  projectId: "e-shopwebapp-8cbc6",
  storageBucket: "e-shopwebapp-8cbc6.firebasestorage.app",
  messagingSenderId: "521865318420",
  appId: "1:521865318420:web:a89311b14ae998c52e5701",
  measurementId: "G-NGM056BPD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db=getFirestore(app);
export default app