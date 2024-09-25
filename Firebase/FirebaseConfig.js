// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCs-ci9Qllf2XFaupqyvfv1jq9Jf9u0hgI",
  authDomain: "e-commerce-38a1d.firebaseapp.com",
  projectId: "e-commerce-38a1d",
  storageBucket: "e-commerce-38a1d.appspot.com",
  messagingSenderId: "521591357224",
  appId: "1:521591357224:web:64be784e08eeab132fda1d",
  measurementId: "G-NDKELSWLXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export default app;