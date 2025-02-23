import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfF57rqGKG2G37D0XnACGN6410i0u1KPE",
  authDomain: "eshop-819a3.firebaseapp.com",
  projectId: "eshop-819a3",
  storageBucket: "eshop-819a3.firebasestorage.app",
  messagingSenderId: "904076168266",
  appId: "1:904076168266:web:8f75e6ae0157ccb07f6ab3",
  measurementId: "G-E183WFMRM9"
};

// Check if Firebase app is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Analytics (if needed)
const analytics = getAnalytics(app);

// Export auth
export const auth = getAuth(app);
export default app;
