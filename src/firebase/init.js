import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCx6XmMyvC5ZBD6-syz2X-CWSWPOe5VzQI",
    authDomain: "jyun-burger.firebaseapp.com",
    databaseURL: "https://jyun-burger.firebaseio.com",
    projectId: "jyun-burger",
    storageBucket: "",
    messagingSenderId: "291111127425",
    appId: "1:291111127425:web:eafaf84a6d180f75fb4080"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()