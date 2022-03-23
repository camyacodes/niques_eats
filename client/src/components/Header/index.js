import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Header = () => {


  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-fill w-100" id="navbarNav">
        <ul class="navbar-nav nav-fill w-100">
          <li class="nav-item">
          <Link to="/">
          <h3>HOME</h3>
          </Link>
          </li>
          <li class="nav-item">
          <Link to="/menu">
          <h3>MENU</h3>
          </Link>
          </li>
          <li class="nav-item">      
          <a href="/#about">
          <h3>ABOUT</h3>
          </a>         
          </li>
          <li class="nav-item">
          <a href="/#contact">         
          <h3>CONTACT</h3>
          </a>
          </li>
        {Auth.loggedIn() ? (
            <>
          <li class="nav-item">
          <Link to="/" onClick={logout}>      
            <h3>LOGOUT</h3>
          </Link>
                </li>
            </>
        ) : ( 
          <>
          <li class="nav-item">
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
