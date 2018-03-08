import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import logo from './components/nyc_doe_logo.png';
import SchoolData from './components/SchoolData';
import Charted from './components/Charted.jsx';
import Login from './components/Login.jsx';
import Questionnaire from './components/Questionnaire.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="nyc-doe-logo" alt="logo" />
            <h1 className="App-title">BETA DASHBOARD</h1>
          </header>
          <Route exact path="/" render={() =>
            <Login />} />
          <Route exact path="/dashboard" render={() =>
            <Questionnaire />} />
          <Route exact path="/schools" render={() =>
            <SchoolData />} />
      </div>
      </Router>
    );
  }
}

export default App;
