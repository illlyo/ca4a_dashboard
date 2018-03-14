import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import Auth from './modules/Auth';
import logo from './components/nyc_doe_logo.png';
import SchoolData from './components/SchoolData';
import Charted from './components/Charts/Charted.jsx';
import Login from './components/Login.jsx';
import Questionnaire from './components/Questionnaire.jsx';
import Results from './components/Results.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
  }


  render() {
    return (
      <Router>
        <div>
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
          <Route exact path="/results" render={() =>
            <Results />} />
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
