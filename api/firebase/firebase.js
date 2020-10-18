import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDN29jbyFMtwiSdEjJZ_OuW3Yf33bNnjuc",
    authDomain: "rn-social-app-64e8b.firebaseapp.com",
    databaseURL: "https://rn-social-app-64e8b.firebaseio.com",
    projectId: "rn-social-app-64e8b",
    storageBucket: "rn-social-app-64e8b.appspot.com",
    messagingSenderId: "603555109404",
    appId: "1:603555109404:web:2c93fa5c54a4766fce5dd9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;