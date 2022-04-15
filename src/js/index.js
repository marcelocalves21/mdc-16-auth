//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)


//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
