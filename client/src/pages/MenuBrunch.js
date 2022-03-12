import React from 'react';
import  { MainDishes, Sides, Desserts } from '../photosdata'
import Dish from '../components/Dish-card';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
} from 'reactstrap';
import "../styles/brunch-menu.css"

const MenuBrunch = () => {


    return (
 <div > 

<div id="title">
  <span >MENU </span>
</div>


   <div id="menu-tabs"> 
   <Row>
      <Col sm="6">
      <h3 id='active-tab'>
        BRUNCH
      </h3>
      </Col>
      <Col sm="6">
      <a href="/menu/dinner"><h3 id="not-active-tab">
        DINNER
      </h3></a>
      </Col>
      </Row>
   </div>




   <div id="brunch-background">
   <div id="brunch">

   <div id="nav-buttons">
      <Row>
        <Col xs="6" sm="4"> <h2 class="menu-nav-buttons">MAIN DISHES</h2></Col>
        <Col xs="6" sm="4"> <a href="#sides">
        <h2 class="menu-nav-buttons">SIDES</h2>
        </a></Col>
        <Col sm="4"><a href="#dessert">
        <h2 class="menu-nav-buttons">DESSERT</h2>
        </a></Col>
      </Row>
      </div>


       

      <div id="brunch-dishes">




      <div className='row row-cols-1 row-cols-md-2'>{MainDishes.map(photo => {return <Dish photo={photo}/>})}{MainDishes.map(photo => {return <Dish photo={photo}/>})}</div>



        {/* SIDES */}
        <Col xs="6" sm="4"><h2 id="sides" class="active-menu  menu-nav-buttons">SIDES</h2></Col>
        <div className='row row-cols-1 row-cols-md-3'>{Sides.map(photo => {return <Dish photo={photo}/>})}{Sides.map(photo => {return <Dish photo={photo}/>})}</div>
        


      

 



      {/* DESSERT */}
      <Col xs="6" sm="4"><h2 id="dessert" class="active-menu menu-nav-buttons">DESSERT</h2></Col>
        <div className='row row-cols-1 row-cols-md-3'>{Desserts.map(photo => {return <Dish photo={photo}/>})}{Desserts.map(photo => {return <Dish photo={photo}/>})}</div>
      

      </div>


   </div>


  <div id="scroll-to-top" className ="footer">
  <a href="#title"> <h4>Scroll To Top ^</h4> </a>
  </div>





</div>
 </div>
    );
  };
  
  export default MenuBrunch;