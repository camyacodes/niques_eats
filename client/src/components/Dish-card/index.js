import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
  Container, Modal, ModalHeader, ModalBody, ModalFooter, NavItem
} from 'reactstrap';
import Calendar from '../Calendar';
// import QtyPicker from 'react-quantity-picker';
import "../../styles/modal.css"


export default function Dish({ photo }) {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const i = 1

  // const handleDecrement = (i) => {
  //   this.i--
  // }

  // const handleIncrement = (i) => {
  //   this.i++
  // }

  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1)
  }

  function handleDecrement() {
    if(counter === 0){
      return;  
    }
    setCounter((prevCounter) => prevCounter - 1)
  }



  return (
    <div>
      <Container className="themed-container p-5" fluid={true} id="dish-card">
        <Col>
          <Card>


            <div>
              <CardImg top width="100%" src={photo.image} alt="Card image cap" id="dish-img" class="rounded mx-auto d-block" />
            </div>


            <CardBody>
              <div class="row ">
                <CardTitle tag="h5" class="col ">{photo.name}</CardTitle>
                <CardSubtitle tag="h5" className="col ">{photo.price}</CardSubtitle>
              </div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#meal${photo.id}`}>
                Add to Cart
              </button>
            </CardBody>
          </Card>
        </Col>
      </Container>


      <div class="dish-modal ">
        <div class="modal fade "
          id={`meal${photo.id}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">

              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>


              <div class="modal-body">
                <div class="row align-items-center">
                  <CardImg top width="100%" src={photo.image} alt="Card image cap" id="dish-img" class="rounded mx-auto d-block" />
                  <CardTitle tag="h5" class="col  text-start">{photo.name}</CardTitle>
                  <CardSubtitle tag="h5" className="col text-end">{photo.price}</CardSubtitle>
                </div>
              </div>

            <div class="container">
              <div class="modal-footer row justify-content-center">
                <Calendar class="col-2"/>

                <div className="input-group col-2">
                  <button type="button" onClick={handleDecrement} className="input-group-text col-1">-</button>
                  <div className="form-control text-center col-1">{counter}</div>
                  <button type="button" onClick={handleIncrement} className="input-group-text col-1">+</button>
                </div>

                <button type="button" class="btn btn-primary col-7 m-3">Add to Cart</button>
              </div>
              </div>



            </div>
          </div>
        </div>
      </div>



      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <p>Modal heading</p>
        </ModalHeader>
        <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal> */}


    </div>

  )
}