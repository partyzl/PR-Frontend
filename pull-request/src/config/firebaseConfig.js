import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf-jkjHd4Eh6nhc23ZyDZ7Z8hnedieKRI",
  authDomain: "pull-request-6070b.firebaseapp.com",
  projectId: "pull-request-6070b",
  storageBucket: "pull-request-6070b.appspot.com",
  messagingSenderId: "94897899138",
  appId: "1:94897899138:web:cff988efb197729433d69b",
  measurementId: "G-CK7MZN45QD",
};
//initialise Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
