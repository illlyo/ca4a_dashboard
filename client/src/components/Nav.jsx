import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {

  return(
    <header className="App-header">


      <Link to="/dash-nav"> <h1 className="nyc-doe-logo">NYC Department <br></br> of Education</h1> </Link>
        <button onClick={props.handleLogout} className="logout-button" >Logout</button>
        <h1 className="App-title">BETA DASHBOARD</h1>




    </header>
  )
}

export default Nav;
