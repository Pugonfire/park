// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr2Ui8lJqUuQInF1qwl2oP5eJjP0BpH84",
  authDomain: "park-af812.firebaseapp.com",
  projectId: "park-af812",
  storageBucket: "park-af812.appspot.com",
  messagingSenderId: "289604663167",
  appId: "1:289604663167:web:69ecaf62839e75efdfcc4a",
  measurementId: "G-WNQTL5KKNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);