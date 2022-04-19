// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTWsnZLmkMmYwyJnGGJ2FLqwjf8nELbf0",
  authDomain: "e-clone-f21a2.firebaseapp.com",
  projectId: "e-clone-f21a2",
  storageBucket: "e-clone-f21a2.appspot.com",
  messagingSenderId: "1027589884532", 
  appId: "1:1027589884532:web:875940386ec9cfb967df21",
  measurementId: "G-Y5JYT53ZGC"
};

const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var db = firebase.firestore();