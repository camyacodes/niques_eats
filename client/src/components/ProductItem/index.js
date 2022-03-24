import React, { useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
  Container,  
} from 'reactstrap';
import Calendar from '../Calendar';
import  './style.css';




function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
   description, 
  } = item;

  const [state, dispatch] = useStoreContext();



const { cart } = state;

const addToCart = () => {
  const itemInCart = cart.find((cartItem) => cartItem._id === _id)
  if (itemInCart) {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: _id,
      purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    });
    idbPromise('cart', 'put', {
      ...itemInCart,
      purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    });
  } else {
    dispatch({
      type: ADD_TO_CART,
      product: { ...item, purchaseQuantity: 1 }
    });
    idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 })
    console.log (itemInCart)
  }
}



  return (
    <div>
    <Container className="themed-container p-5" fluid={true} id="dish-card">
    <Col>
      <Card>
        <div>
          {/* <Link to={`/products/${_id}`}> */}
          <CardImg top width="100%" src={`/images/${image}`} alt={name} id="dish-img" class="rounded mx-auto d-block" />
          {/* </Link> */}
        </div>

        <CardBody>
          <div class="row align-items-center">
            <CardTitle tag="h5" class="col text-start">{name}</CardTitle>
            <CardSubtitle tag="h5" className="col text-end">${price}</CardSubtitle>
          </div>
          {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal"  onClick={addToCart}> */}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${_id}`}>
            Add to Cart
          </button> 
        </CardBody>
      
      </Card>
    </Col>   
  </Container>



  <div class="modal fade" id={`modal${_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">   
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body row">       
            <CardImg top width="100%" src={`/images/${image}`} alt={name} id="dish-img-nav" class="rounded mx-auto d-block col" />   
            <h6 class="col" id="description">{description}</h6>      
            <div class="row align-items-center">
             
            <CardTitle tag="h5" class="col text-start">{name}</CardTitle>
            <CardSubtitle tag="h5" className="col text-end">${price}</CardSubtitle>
            <Calendar />
          </div>



            </div>


            <div class="modal-footer">
             
              <button type="button"  data-bs-dismiss="modal" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

  </div>
  );
}

export default ProductItem;
