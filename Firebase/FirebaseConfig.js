// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs-ci9Qllf2XFaupqyvfv1jq9Jf9u0hgI",
  authDomain: "e-commerce-38a1d.firebaseapp.com",
  projectId: "e-commerce-38a1d",
  storageBucket: "e-commerce-38a1d.appspot.com",
  messagingSenderId: "521591357224",
  appId: "1:521591357224:web:f946a18a91a1ae582fda1d",
  measurementId: "G-N6LVTTK7E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);