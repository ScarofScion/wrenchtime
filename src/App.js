import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthService from "./components/AuthService";
import SignInDialog from "./components/SignInDialog";
import Store from "./components/Store";

//this is the mess up
import { from as observableFrom } from "rxjs";
import { switchMap } from "rxjs/operators";

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

class App extends Component {
  constructor() {
    super();
    this.store = new Store();
    this.authService = new AuthService();
    this.state = {};

    this.onDestinationCreate = this.onDestinationCreate.bind(this);
    this.onDestinationDelete = this.onDestinationDelete.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    this.currentUserSubscription = this.authService.currentUser$.subscribe(
      user => this.setState({ user })
    );
    this.authService.currentUser$
      .pipe(switchMap(u => (u ? this.store.destinations$ : observableFrom([]))))
      .subscribe(destinations => this.setState({ destinations }));
  }

  componentWillUnmount() {
    this.currentUserSubscription.unsubscribe();
    this.destinationsSubscription.unsubscribe();
  }

  onDestinationCreate(dest) {
    this.store.createDestination(dest);
  }

  onDestinationDelete(dest) {
    this.store.deleteDestination(dest.id);
  }

  handleSignOut() {
    this.authService.signOut();
  }

  render() {
    let body;
    if (!this.state.user) {
      body = <SignInDialog authService={this.authService} />;
    } else if (this.state.destinations == null) {
      body = (
        <div>
          <p>
            Signed in as: {this.state.user.displayName}
            <button onClick={this.handleSignOut}>Sign out</button>
          </p>
          <p>Loading data...</p>
        </div>
      );
    } else {
      body = (
        <div>
          <p>
            Signed in as: {this.state.user.displayName}
            <button onClick={this.handleSignOut}>Sign out</button>
          </p>

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
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wrenchtime</h1>
        </header>

        <div className="App-body-container">
          <div className="App-body">{body}</div>
        </div>
      </div>
    );
  }
}

export default App;
