import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGFPIbOTnHI2-PlRnDFr9zf6O8csYZS9k",
    authDomain: "clone-3a9c0.firebaseapp.com",
    databaseURL: "https://clone-3a9c0.firebaseio.com",
    projectId: "clone-3a9c0",
    storageBucket: "clone-3a9c0.appspot.com",
    messagingSenderId: "803466283734",
    appId: "1:803466283734:web:3f170384e7968ac0d19777",
    measurementId: "G-H2PKY0JLLZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };