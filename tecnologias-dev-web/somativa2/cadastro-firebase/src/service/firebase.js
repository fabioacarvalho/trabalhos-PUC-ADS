import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDw5Aj2iBYnR_1Cq5f1oXREBs2joVce61E",
    authDomain: "somativa2-4becc.firebaseapp.com",
    projectId: "somativa2-4becc",
    storageBucket: "somativa2-4becc.appspot.com",
    messagingSenderId: "743993715932",
    appId: "1:743993715932:web:8e3369242b0f9bdbf49819"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;