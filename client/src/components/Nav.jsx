import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {

  return(
    <header>
    <div className="App-header">
      <h1 className="nyc-doe-logo">NYC Department <br></br>of Education</h1>
    </div><div>
        <h1 className="App-title">BETA DASHBOARD</h1>
        </div>
        <span onClick={props.handleLogout} className="logout-link" >Logout</span>

    </header>
  )
}

export default Nav;
