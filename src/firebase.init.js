// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtDQkReugqjWaumkkZNHd8owYeCttahCc",
    authDomain: "new-simple-authintication.firebaseapp.com",
    projectId: "new-simple-authintication",
    storageBucket: "new-simple-authintication.appspot.com",
    messagingSenderId: "1095879698671",
    appId: "1:1095879698671:web:df6b8cf2ef6597cdc6931a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;