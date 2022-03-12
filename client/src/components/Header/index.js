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
          <a className="nav-link" href="/home#about">ABOUT</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/home#contact">CONTACT</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/login">LOGIN</a>
          </li>
<<<<<<< HEAD
          <li class="nav-item">
          <a class="nav-link" href="/signup">SIGNUP</a>
            </li>
            <li class="nav-item">
          <a class="nav-link" href="/checkout">CHECKOUT</a>
=======
          <li className="nav-item">
          <a className="nav-link" href="/signup">SIGNUP</a>
>>>>>>> 10fde97361e09c1daf96d681aeb1453d6d99e855
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Header;
