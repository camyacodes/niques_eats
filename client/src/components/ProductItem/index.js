import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
  Container, Modal, ModalHeader, ModalBody, ModalFooter, NavItem
} from 'reactstrap';
import Calendar from '../Calendar';




function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
    quantity
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
    idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
  }
}



  return (
    <Container className="themed-container p-5" fluid={true} id="dish-card">
    <Col>
      <Card>
        <div>
          <Link to={`/products/${_id}`}>
          <CardImg top width="100%" src={`/images/${image}`} alt={name} id="dish-img" class="rounded mx-auto d-block" />
          </Link>
        </div>

        <CardBody>
          <div class="row align-items-center">
            <CardTitle tag="h5" class="col text-start">{name}</CardTitle>
            <CardSubtitle tag="h5" className="col text-end">${price}</CardSubtitle>
          </div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal"  onClick={addToCart}>
            Add to Cart
          </button>
        </CardBody>
      
      </Card>
    </Col>
  </Container>
  );
}

export default ProductItem;
