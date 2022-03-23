import React from 'react';
import profile from "../../assets/profile.jpg"

const About = () => {
  return (
    
      <div class="row g-0">


        <div class="col-md-4">
        <img src={ profile } class="img-fluid rounded-3 p-4"  alt="owner of Nique's Eats" />
        </div>

       <div class="col-md-8">
           <div class="card-body">
       <h5 class="card-title text-center p-4" id="about">ABOUT ME</h5>
       <p class="card-text about">Chocolate cake apple pie powder brownie cupcake pastry gummies cupcake. Icing brownie pie chupa chups tart pie bonbon lemon drops. I love sweet marshmallow I love jelly croissant.</p>
       <p class="card-text about">Powder I love wafer topping tart cupcake pie I love. Topping sugar plum tart sweet roll danish cotton candy croissant croissant. Chocolate marshmallow gummi bears chocolate cake sweet I love sweet roll. I love cupcake chocolate caramels cake soufflé marshmallow chocolate muffin.</p>
       </div>
       </div>



        </div>
       
  );
};

export default About;
