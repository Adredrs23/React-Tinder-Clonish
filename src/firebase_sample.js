import firebase from "firebase";

const firebaseConfig = YOUR_FIREBASE_CONFIG_FILE_HERE;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;