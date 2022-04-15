import React from "react";
import { Card, Col } from "react-bootstrap";

const Items = ({ food }) => {
  const { name, img, des, price } = food;
  return (
    <Col>
      <Card className="h-100 shadow">
        <Card.Img className="w-50 mx-auto p-4" variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text> <small> ❝ {des} ❞</small> </Card.Text>
          <Card.Title>${price}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Items;
