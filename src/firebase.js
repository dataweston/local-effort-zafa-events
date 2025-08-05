import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace these with your actual Firebase config values from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBpIJrvNZqdYkiFzxWsHguRxj6uy8PHm9c",
  authDomain: "local-effort-zafa-events.firebaseapp.com",
  projectId: "local-effort-zafa-events",
  storageBucket: "local-effort-zafa-events.firebasestorage.app",
  messagingSenderId: "860443300900",
  appId: "1:860443300900:web:5c2ed3d4f0ccba4f3b34b1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;