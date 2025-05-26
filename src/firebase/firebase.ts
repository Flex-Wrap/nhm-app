// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBbELkSRwTb4fS0ti8d0LErBxTVG6PkRA",
  authDomain: "nhm-exam.firebaseapp.com",
  projectId: "nhm-exam",
  storageBucket: "nhm-exam.firebasestorage.app",
  messagingSenderId: "909982371658",
  appId: "1:909982371658:web:5f6dfb00a905b516f53bb3",
  measurementId: "G-H3YCH6LQTW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
