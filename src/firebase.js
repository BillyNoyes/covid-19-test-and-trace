import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAen8-5bsA-a3xLzOpWW1jJFAxRO_QTctY",
  authDomain: "covid-19-test-and.firebaseapp.com",
  databaseURL: "https://covid-19-test-and.firebaseio.com",
  projectId: "covid-19-test-and",
  storageBucket: "covid-19-test-and.appspot.com",
  messagingSenderId: "433959631286",
  appId: "1:433959631286:web:516800db67d86f34b3e917",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
