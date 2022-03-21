import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
} from 'reactstrap';
import "../styles/menus.css"

import ProductList from "../components/ProductList";
import CategoryMenuDinner from "../components/CategoryMenuDinner";
import Cart from '../components/Cart';


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
        <div id="dinner">

          <div id="nav-buttons-container" className="container">
          <CategoryMenuDinner  />
          </div>

          <div id="dinner-dishes">
          <ProductList />
          </div>
        </div>
        <Cart />
      </div>
    </div>

  );
};

export default MenuDinner;