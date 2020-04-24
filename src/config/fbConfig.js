import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB-MDlZcUQqFXsHalcbpBMKE4hMZrNh4UE",
    authDomain: "react-redux-registration-2b5ea.firebaseapp.com",
    databaseURL: "https://react-redux-registration-2b5ea.firebaseio.com",
    projectId: "react-redux-registration-2b5ea",
    storageBucket: "react-redux-registration-2b5ea.appspot.com",
    messagingSenderId: "793157359295",
    appId: "1:793157359295:web:875d940d417af9d128980a"
};

firebase.initializeApp(config);

export default firebase;