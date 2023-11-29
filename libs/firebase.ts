// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjOpJyMTO23HbHWtd8unHoQpPUrnIztcM",
  authDomain: "yakacik.firebaseapp.com",
  projectId: "yakacik",
  storageBucket: "yakacik.appspot.com",
  messagingSenderId: "805121667102",
  appId: "1:805121667102:web:446ea0904b932a9b907e0f",
  measurementId: "G-1Q72T4D724",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;


// 
