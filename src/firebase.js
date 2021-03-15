// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4BXEetfp6WARz2QW46y6TuFxYcL7AJPk",
  authDomain: "unimap-timetable.firebaseapp.com",
  databaseURL: "https://unimap-timetable.firebaseio.com",
  projectId: "unimap-timetable",
  storageBucket: "unimap-timetable.appspot.com",
  messagingSenderId: "1098889396352",
  appId: "1:1098889396352:web:d639704a053b04fd976665",
  measurementId: "G-R2M9CPND7Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
