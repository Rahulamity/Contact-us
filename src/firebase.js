import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCz6RLeHgKMlqwqD2WRoAf5kBfwQp3-560",
        authDomain: "contact-us-ed728.firebaseapp.com",
        projectId: "contact-us-ed728",
        storageBucket: "contact-us-ed728.appspot.com",
        messagingSenderId: "560259977053",
        appId: "1:560259977053:web:5ab96f2f225c96eef2e2b4"
       
});

var db = firebaseApp.firestore();

export { db };