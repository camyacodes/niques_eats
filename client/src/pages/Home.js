import React, { useState } from "react";
import Hero from "../components/Hero";
import HomeInfoCards from "../components/home-info-cards";
import About from "../components/About";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import '../components/home-info-cards/style.css'



const Home = () => {
  return (
    <body>
      <div id="cart">
        <Cart />
        </div>
    <div>
      <Hero />
    </div>
    <div>
      <HomeInfoCards />
    </div>
    <div>
      <About />
    </div>
    <div>
      <Contact />
    </div>
  </body>
  );
};

export default Home;
