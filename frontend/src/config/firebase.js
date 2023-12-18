import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC3OgUuxbj1A0q1ctFyt1PS8KWh22B3sqM",
  authDomain: "evercart-0501.firebaseapp.com",
  databaseURL: "https://evercart-0501-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "evercart-0501",
  storageBucket: "evercart-0501.appspot.com",
  messagingSenderId: "145334889702",
  appId: "1:145334889702:web:caba9ef067fd033af6df27",
  measurementId: "G-M1YS0S78ZG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);