import React from 'react';
import logo from './nyc_doe_logo.png';
import { Link } from 'react-router-dom';

const Nav = props => {

  return(
    <header>
    <div className="App-header">
      <img src={logo} className="nyc-doe-logo" alt="logo" />
        <h1 className="App-title">BETA DASHBOARD</h1>
        <span onClick={props.handleLogout} className="logout-link" >Logout</span>
    </div>
    </header>
  )
}

export default Nav;
