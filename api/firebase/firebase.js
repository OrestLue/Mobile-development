import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyClkunpbzMA72gYwTdeup9AnmPngQFi2lU",
    authDomain: "gangshit-6e1c1.firebaseapp.com",
    databaseURL: "https://gangshit-6e1c1.firebaseio.com",
    projectId: "gangshit-6e1c1",
    storageBucket: "gangshit-6e1c1.appspot.com",
    messagingSenderId: "402327787819",
    appId: "1:402327787819:web:07548a85846cbb7a974d6e",
    measurementId: "G-E2XDRFRCTE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;