import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBGd8ldy5wyUQvx7qPCvogVPmriXOe4j28",
    authDomain: "todolist-app-24cb2.firebaseapp.com",
    projectId: "todolist-app-24cb2",
    storageBucket: "todolist-app-24cb2.appspot.com",
    messagingSenderId: "781168698553",
    appId: "1:781168698553:web:4794b0bf67e1b7ac76a768",
    measurementId: "G-K7W5TK0QMZ"
  };
  
try {
    firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;