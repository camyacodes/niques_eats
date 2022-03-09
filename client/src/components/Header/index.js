import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand page-title" href="#">NIQUE'S EATS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">MENU</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">CONTACT US</a>
              </li>
              <li>
              <Link to="/login" class="nav-item">LOG IN</Link>
              </li>
              <li>
                <Link to="/login" class="nav-item">SIGNUP</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

  );
};

export default Header;
