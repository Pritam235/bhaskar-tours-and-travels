// Import Firebase core and analytics
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBiAhKA2JMSrbi9H_Rmamo_gYHClNFp7d0",
  authDomain: "bhaskar-tours-and-travels.firebaseapp.com",
  projectId: "bhaskar-tours-and-travels",
  storageBucket: "bhaskar-tours-and-travels.appspot.com",
  messagingSenderId: "352120755314",
  appId: "1:352120755314:web:ca041b914bf2baca929eeb",
  measurementId: "G-76NLW48FYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firebase app instance
export default app;
