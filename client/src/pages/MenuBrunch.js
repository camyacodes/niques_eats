import React from 'react';
import Dish1 from '../assets/shrimp-n-grits.jpg';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
} from 'reactstrap';


const MenuBrunch = () => {


    return (
 <div> 

   <div id="title">
     <h1>MENU</h1> 
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
        <Button outline color="warning">MAIN DISHES</Button>
        <Button href="#sides" outline color="warning">SIDES</Button>
        <Button href="#dessert" outline color="warning">DESSERT</Button>
      </div>

      <div id="brunch-dishes">
    
      <div>
        <Col sm="3">
      <Card>
        <CardImg top width="100%" src={Dish1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Shrimp and Grits</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">$ 12</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
      </Col>
    </div>

 
  

        {/* SIDES */}
        <h2 id="sides">SIDES</h2>


      





      {/* DESSERT */}
      <h2 id="dessert">DESSERT</h2>

      </div>

   </div>




 </div>
    );
  };
  
  export default MenuBrunch;