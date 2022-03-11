import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row,
    Container
  } from 'reactstrap';

export default function Photo({photo}) {
    return (
 
        <Container className="themed-container" fluid={true}>
        <Col>
        <Card>
          <CardImg top width="100%" src={photo.image} alt="Card image cap" id="dish-img" class="rounded mx-auto d-block"/>
          <CardBody>
              <div class="row align-items-center">
            <CardTitle tag="h5" class="col">{photo.name}</CardTitle>
            <CardSubtitle tag="h5" className="col text-end">{photo.price}</CardSubtitle>
            </div>
            <Button>Add to Cart</Button>
          </CardBody>
        </Card>
        </Col> 
        </Container>                                                     
      
    )
}