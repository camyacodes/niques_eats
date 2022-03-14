import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
  Container, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';



export default function Dish({ photo }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <Container className="themed-container p-5" fluid={true} id="dish-card">
        <Col>
          <Card>


            <div>
              <CardImg top width="100%" src={photo.image} alt="Card image cap" id="dish-img" class="rounded mx-auto d-block" />
            </div>


            <CardBody>
              <div class="row align-items-center">
                <CardTitle tag="h5" class="col">{photo.name}</CardTitle>
                <CardSubtitle tag="h5" className="col text-end">{photo.price}</CardSubtitle>
              </div>
              <Button >Add to Cart</Button>
            </CardBody>
          </Card>
        </Col>
      </Container>






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