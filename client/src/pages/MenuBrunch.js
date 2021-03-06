import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Col,
	Row,
} from "reactstrap";
import "../styles/menus.css";


import ProductList from "../components/ProductList";
import CategoryMenuBrunch from "../components/CategoryMenuBrunch";
import Cart from '../components/Cart';
import BrunchDishes from '../components/BrunchDishes'



const MenuBrunch = () => {
	return (
		<div>
<Cart />

<div id="title">
    <span>MENU </span>
</div>

<div id="menu-tabs">
    <Row>
        <Col sm="6">
            <h3 id="active-tab">BRUNCH</h3>
        </Col>
        <Col sm="6">
            <a href="/menu/dinner">
                <h3 id="not-active-tab">DINNER</h3>
            </a>
        </Col>
    </Row>
</div>

<div id="brunch-background">
    <div id="brunch">
        <div id="nav-buttons-container" className="container">
           <CategoryMenuBrunch />
        </div>

        <div id="brunch-dishes">
            {/* <ProductList /> */}
		  <BrunchDishes />
		
        </div>
    </div>
		
        {/* <div id="scroll-to-top" className ="footer">
  <a href="#title"> <h4>Scroll To Top ^</h4> </a>
  </div> */}
</div>


</div>
	);
};

export default MenuBrunch;
