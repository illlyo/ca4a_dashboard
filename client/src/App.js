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
      username: '',
      password: '',
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

    handleChange(e) {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
          [name]: val,
        });
        console.log(val)
    }

    handleLoginSubmit(e, data){
      e.preventDefault();
      console.log(data);
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.token) {
            Auth.authenticateToken(res.token);
            this.setState({
              auth: Auth.isUserAuthenticated(),
              username: '',
              password: '',
            })
          }
        }).catch(err => {
          console.log(err)
        })
    }

    handleLogout(){
      fetch('/logout', {
        method: 'DELETE',
        headers: {
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`,
        }
      }).then(res => {
        Auth.deauthenticateUser();
        this.setState({
          auth: Auth.isUserAuthenticated(),
          username: '',
          password: '',
        })
      })
    }

  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="nyc-doe-logo" alt="logo" />
              <h1 className="App-title">BETA DASHBOARD</h1>
              <h2 logoutUser={this.logoutUser}>Logout</h2>
              <br></br>
              <br></br>
              <br></br>
            </header>
            <Route exact path="/" render={() => (this.state.auth) ?
                           <Redirect to="/dashboard" />
                           :
                           <Login handleLoginSubmit={this.handleLoginSubmit}
                                  handleChange={this.handleChange}
                                  auth={this.state.auth}
                                  username={this.state.username}
                                  password={this.state.password}
                                  />} />
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
