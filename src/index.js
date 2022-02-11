import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC_AWiXK7HwYxUwKQvGhla6l_G_uosJFdg",
  authDomain: "app-insucor.firebaseapp.com",
  projectId: "app-insucor",
  storageBucket: "app-insucor.appspot.com",
  messagingSenderId: "515232071977",
  appId: "1:515232071977:web:6734ce21349b4701b1b738",
  measurementId: "G-3WGFMKVBCC"
};
const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// Initialize Firebase


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
