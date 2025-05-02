// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6uiYp3sev3J-JXUbCSPKL3HFnyYNXyaY",
  authDomain: "dragon-news-bd-19c0f.firebaseapp.com",
  projectId: "dragon-news-bd-19c0f",
  storageBucket: "dragon-news-bd-19c0f.firebasestorage.app",
  messagingSenderId: "634962246324",
  appId: "1:634962246324:web:c9cec776c5d4f1683f35e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;