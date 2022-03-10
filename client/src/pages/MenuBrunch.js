import React from 'react';
import Dish1 from '../assets/shrimp-n-grits.jpg';

const MenuBrunch = () => {


    return (
 <div> 

   <div id="title">
     <h1>MENU</h1> 
   </div>


   <div id="menu-tabs"> 
      <h3 id='brunch-tab'>
        BRUNCH
      </h3>
      <h3 id="dinner-tab">
        DINNER
      </h3>
   </div>

   <div id="brunch">
      <div id="nav-buttons">
        <button>MAIN DISHES</button>
        <button src="#sides">SIDES</button>
        <button src="#dessert">DESSERT</button>
      </div>

      <div id="brunch-dishes">
        {/* <div class="dishes card"  style="width: 18rem;" id="brunch-dish-1">
          <img class="dish-img card-img-top" alt="brunch dish 1 image" src={ Dish1 } />
          <div class="card-body">
          <p class="dish-name">Dish 1</p>
          <p class="dish-price">$24</p>
          </div>
        </div> */}

        <div class="dishes" id="brunch-dish-2">
          <img class="dish-img" alt="brunch dish 1 image" />
          <p class="dish-name">Dish 2</p>
          <p class="dish-price">$24</p>
        </div>

        <div class="dishes" id="brunch-dish-3">
          <img class="dish-img" alt="brunch dish 1 image" />
          <p class="dish-name">Dish 3</p>
          <p class="dish-price">$24</p>
        </div>

        <div class="dishes" id="brunch-dish-4">
          <img class="dish-img" alt="brunch dish 1 image" />
          <p class="dish-name">Dish 4</p>
          <p class="dish-price">$24</p>
        </div>

        <div class="dishes" id="brunch-dish-5">
          <img class="dish-img" alt="brunch dish 1 image" />
          <p class="dish-name">Dish 5</p>
          <p class="dish-price">$24</p>
        </div>

        <div class="dishes" id="brunch-dish-6">
          <img class="dish-img" alt="brunch dish 1 image" />
          <p class="dish-name">Dish 6</p>
          <p class="dish-price">$24</p>
        </div>


        {/* SIDES */}
        <h2 id="sides">SIDES</h2>
        <div class="dishes" id="brunch-dish-7">
          <img class="dish-img" alt="brunch dish 1 image" />
          <p class="dish-name">Dish 7</p>
          <p class="dish-price">$24</p>


        </div>

      </div>

   </div>




 </div>
    );
  };
  
  export default MenuBrunch;