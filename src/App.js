import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//this is the mess up

//App components
import Header from "./components/Header";
import Home from "./components/Home";
import Car from "./components/Car";
import Wrench from "./components/Wrench";
import Time from "./components/Time";
import About from "./components/About";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyBUGJfi6yh4Gsn1ljsN74AgNz6_IG7Bhhk",
  authDomain: "wrenchtime-b4yt.firebaseapp.com",
  databaseURL: "https://wrenchtime-b4yt.firebaseio.com",
  projectId: "wrenchtime-b4yt",
  storageBucket: "wrenchtime-b4yt.appspot.com",
  messagingSenderId: "251706795155"
});

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/components/Car" component={Car} />
      <Route exact path="/components/Wrench" component={Wrench} />
      <Route exact path="/components/Time" component={Time} />
      <Route exact path="/components/About" component={About} />
    </div>
  </BrowserRouter>
);
export default App;
