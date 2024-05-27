// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjUCsrvr798mek5ixuZL5Hia9pBpsHGyc",
  authDomain: "leaderboard-581f9.firebaseapp.com",
  projectId: "leaderboard-581f9",
  storageBucket: "leaderboard-581f9.appspot.com",
  messagingSenderId: "983530584637",
  appId: "1:983530584637:web:6567be234e7eb1b74fc854",
  measurementId: "G-022299S2PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);