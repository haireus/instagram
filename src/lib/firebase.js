import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// call the seed file only one time;

const config = {
  apiKey: "AIzaSyCn1ua7JWSdejsoDisfC0Amep34NtR5Q0A",
  authDomain: "instagram-dfc92.firebaseapp.com",
  projectId: "instagram-dfc92",
  storageBucket: "instagram-dfc92.appspot.com",
  messagingSenderId: "545714562725",
  appId: "1:545714562725:web:8f38435ba8197e1634cf4c",
  measurementId: "G-YNML7Y46SR",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);
export { firebase, FieldValue };
