import firebase from "firebase";
import "firebase/firestore";

// config info removed for security purposes

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
