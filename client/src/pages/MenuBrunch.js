import React from 'react';
import  { MainDishes, Sides, Desserts } from '../photosdata'
import Photo from '../components/Photo/index';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
} from 'reactstrap';


const MenuBrunch = () => {


    return (
 <div id="brunch-background"> 

   <div id="title">
     <h1 class="fs-1 text">MENU</h1> 
   </div>


   <div id="menu-tabs"> 
   <Row>
   <Col sm="6">
      <h3 id='brunch-tab'>
        BRUNCH
      </h3>
      </Col>
      <Col sm="6">
      <h3 id="dinner-tab">
        DINNER
      </h3>
      </Col>
      </Row>
   </div>

   <div id="brunch">

      <div id="nav-buttons">
      <Row>
        <Col xs="6" sm="4"> <h2 class="active-menu">MAIN DISHES</h2></Col>
        <Col xs="6" sm="4"> <a href="#sides">
        <Button outline color="warning">SIDES</Button>
        </a></Col>
        <Col sm="4"><a href="#dessert">
        <Button outline color="warning">DESSERT</Button>
        </a></Col>
      </Row>
      </div>


       

      <div id="brunch-dishes">




      <div className='row row-cols-1 row-cols-md-3'>{MainDishes.map(photo => {return <Photo photo={photo}/>})}{MainDishes.map(photo => {return <Photo photo={photo}/>})}</div>


        {/* {photos.map(photo =>{
          return <div className='col-md-6'> 
                  <div>
                    <Photo photo={photo}/>
                  </div>                  
              </div>
   })} */}


 
  

        {/* SIDES */}
        <Col xs="6" sm="4"><h2 id="sides" class="active-menu">SIDES</h2></Col>
        <div className='row row-cols-1 row-cols-md-3'>{Sides.map(photo => {return <Photo photo={photo}/>})}{Sides.map(photo => {return <Photo photo={photo}/>})}</div>
        


      





      {/* DESSERT */}
      <Col xs="6" sm="4"><h2 id="dessert" class="active-menu">DESSERT</h2></Col>
        <div className='row row-cols-1 row-cols-md-3'>{Desserts.map(photo => {return <Photo photo={photo}/>})}{Desserts.map(photo => {return <Photo photo={photo}/>})}</div>
      

      </div>

   </div>


  <div id="scroll-to-top" className ="footer">
  <a href="#title"> <h4>Scroll To Top ^</h4> </a>
  </div>

 </div>
    );
  };
  
  export default MenuBrunch;