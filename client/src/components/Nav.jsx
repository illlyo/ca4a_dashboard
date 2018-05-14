import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

const Nav = props => {

  return(
    <header className="App-header">
      <Link to="/dash-nav"> <img src={Logo} /> </Link>
        <ul className="ul-nav">
          <Link to="/dash-nav">Home | </Link>
          <Link to="/" onClick={props.handleLogout} >Logout</Link>
        </ul>

        <h1 className="App-title">BETA DASHBOARD</h1>

    </header>
  )
}

export default Nav;
