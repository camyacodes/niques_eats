import React from 'react';
import  { MainDishes, Sides, Desserts } from '../photosdata'
import Dish from '../components/Dish-card';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
} from 'reactstrap';
import "../styles/dinner-menu.css"



const MenuDinner = () => {


    return (


<div id="dinner-menu"> 

<div id="title">
  <span >MENU </span>
</div>


<div id="menu-tabs"> 
<Row>
   <Col sm="6">
   <a href="/menu"> <h3 id='not-active-tab'>
     BRUNCH
   </h3></a>
   </Col>
   <Col sm="6">
   <a href="/menu/dinner"><h3 id="active-tab">
     DINNER
   </h3></a>
   </Col>
   </Row>
</div>




<div id="dinner-background"> 
<div >

<div id="nav-buttons">
   <Row>
     <Col xs="6" sm="4"> <h2 class="menu-nav-buttons-dinner">MAIN DISHES</h2></Col>
     <Col xs="6" sm="4"> <a href="#sides">
     <h2 class="menu-nav-buttons-dinner">SIDES</h2>
     </a></Col>
     <Col sm="4"><a href="#dessert">
     <h2 class="menu-nav-buttons-dinner">DESSERT</h2>
     </a></Col>
   </Row>
   </div>


    

   <div id="brunch-dishes">




      <div className='row row-cols-1 row-cols-md-2'>{MainDishes.map(meal => {return <Dish meal={meal}/>})}{MainDishes.map(meal => {return <Dish meal={meal}/>})}</div>



        {/* SIDES */}
        <Col xs="6" sm="4"><h2 id="sides" class="active-menu  menu-nav-buttons-dinner">SIDES</h2></Col>
        <div className='row row-cols-1 row-cols-md-3'>{Sides.map(meal => {return <Dish meal={meal}/>})}{Sides.map(meal => {return <Dish meal={meal}/>})}</div>
        


      

 



      {/* DESSERT */}
      <Col xs="6" sm="4"><h2 id="dessert" class="active-menu menu-nav-buttons-dinner">DESSERT</h2></Col>
        <div className='row row-cols-1 row-cols-md-3'>{Desserts.map(meal => {return <Dish meal={meal}/>})}{Desserts.map(meal => {return <Dish meal={meal}/>})}</div>
      

      </div>


</div>


<div id="scroll-to-top" className ="footer">
<a href="#title"> <h4>Scroll To Top ^</h4> </a>
</div>





</div>
</div>



    );
  };  
  
  export default MenuDinner;