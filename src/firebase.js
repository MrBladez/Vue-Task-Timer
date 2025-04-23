// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpVkxMb7lpgl_9pw9QOTJkcCtCyPVM2sY",
  authDomain: "task-timer-app-fb8bd.firebaseapp.com",
  projectId: "task-timer-app-fb8bd",
  storageBucket: "task-timer-app-fb8bd.firebasestorage.app",
  messagingSenderId: "372540581603",
  appId: "1:372540581603:web:e6bad23cee7858969b87d6",
  measurementId: "G-YMBYWHPWQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)