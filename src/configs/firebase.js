import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlR_N4gwiX6BWHUvaw7EKDqtOVpFDknhE",
  authDomain: "vuerouter-bbfd0.firebaseapp.com",
  projectId: "vuerouter-bbfd0",
  storageBucket: "vuerouter-bbfd0.appspot.com",
  messagingSenderId: "110342951584",
  appId: "1:110342951584:web:411958c2aec5970ec0efc5",
  measurementId: "G-CPQTXBQ0ZQ",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore service
const db = getFirestore();

export default db;
