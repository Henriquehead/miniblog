// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuvZArnojX0IEo9cM5cc3T4IJvzWDcJKM",
    authDomain: "miniblog-55bc8.firebaseapp.com",
    projectId: "miniblog-55bc8",
    storageBucket: "miniblog-55bc8.appspot.com",
    messagingSenderId: "317303247486",
    appId: "1:317303247486:web:c8f6363e55a67a45693e2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };