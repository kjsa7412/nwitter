import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDBvFMsBPCdPIDRisWDu7XzoeHpofJpgtE",
    authDomain: "nwitter-33838.firebaseapp.com",
    databaseURL: "https://nwitter-33838.firebaseio.com",
    projectId: "nwitter-33838",
    storageBucket: "nwitter-33838.appspot.com",
    messagingSenderId: "899067891414",
    appId: "1:899067891414:web:5437f5dc4f6d9045464377"
  };

  export default firebase.initializeApp(firebaseConfig);