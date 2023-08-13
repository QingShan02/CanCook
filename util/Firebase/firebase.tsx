
import 'firebase/database';
import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, onValue, push, ref, set } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDvQXkcn08MCLboaUPScAju08SAd8hUDX4",
    authDomain: "ptbt-5627a.firebaseapp.com",
    databaseURL: "https://ptbt-5627a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ptbt-5627a",
    storageBucket: "ptbt-5627a.appspot.com",
    messagingSenderId: "579409071608",
    appId: "1:579409071608:web:60cf1c8f016f4511ddda0d",
    measurementId: "G-EHVJRQC9HE"
};

const app = initializeApp(firebaseConfig)

const database = getDatabase(app);

export { database, ref, push, set, onValue };






