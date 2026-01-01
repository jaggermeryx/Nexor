
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-VfOvVribJBZPbbumyanXDwY1xyvZH7Qw",
  authDomain: "nexor-668e3.firebaseapp.com",
  projectId: "nexor-668e3",
  storageBucket: "nexor-668e3.firebasestorage.app",
  messagingSenderId: "7814905306",
  appId: "1:7814905306:web:030580c0168a9d7ef98c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Auto sign-in anonymously
signInAnonymously(auth).catch((error) => {
  console.error("Auth error:", error);
});

export default app;
