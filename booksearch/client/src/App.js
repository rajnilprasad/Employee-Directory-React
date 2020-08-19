import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
import Saved from './pages/saved';
import Nav from './components/nav'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg-dark">
          <Nav />
          <Route exact path="/" component={Main} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
