import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyCP12tkAAs7L8ScltoGAsiKW-EB5z1BBJc",
    authDomain: "dili-16490.firebaseapp.com",
    databaseURL: "https://dili-16490.firebaseio.com",
    projectId: "dili-16490",
    storageBucket: "dili-16490.appspot.com",
    messagingSenderId: "620460241347",
    appId: "1:620460241347:web:dcb1b13e0e66d63e"
};

export default firebase.initializeApp(firebaseConfig);
