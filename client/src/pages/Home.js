import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenuBrunch from "../components/CategoryMenuBrunch";
import Cart from '../components/Cart';
import Hero from "../components/Hero";
import HomeInfoCards from "../components/home-info-cards";
import About from "../components/About";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <body>
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
