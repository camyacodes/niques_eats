import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <nav className="navbar navbar-expand-md navbar-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-fill w-100" id="navbarNav">
        <ul className="navbar-nav nav-fill w-100">
          <li className="nav-item">
          <a className="nav-link" href="/home">HOME</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/menu">MENU</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#about">ABOUT US</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#contact">CONTACT US</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/login">LOGIN</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/signup">SIGNUP</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Header;
