import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {


  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (

    <nav className="navbar navbar-expand-md navbar-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-fill w-100" id="navbarNav">
        <ul className="navbar-nav nav-fill w-100">
          <li className="nav-item">
          <Link to="/">
          <h3>HOME</h3>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/menu">
          <h3>MENU</h3>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/#about">
          <h3>ABOUT</h3>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/#contact">
          <h3>CONTACT</h3>
          </Link>
          </li>

        {Auth.loggedIn() ? (
            <>
          <li className="nav-item">
          <Link to="/" onClick={logout}>      
            <h3>LOGOUT</h3>
          </Link>
                </li>
            </>
        ) : ( 
          <>
          <li className="nav-item">
          <Link to="/login">
          <h3>LOGIN</h3>
          </Link>
          </li>
          
          </>
        )}
        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Header;
