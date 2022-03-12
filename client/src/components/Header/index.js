import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-fill w-100" id="navbarNav">
        <ul class="navbar-nav nav-fill w-100">
          <li class="nav-item">
          <a class="nav-link" href="/home">HOME</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/menu">MENU</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#about">ABOUT US</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#contact">CONTACT US</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/login">LOGIN</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/signup">SIGNUP</a>
            </li>
            <li class="nav-item">
          <a class="nav-link" href="/checkout">CHECKOUT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Header;
