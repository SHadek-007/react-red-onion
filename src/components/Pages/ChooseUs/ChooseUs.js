import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import fdelevery from '../../../images/adult-blur-blurred-background-687824.png';
import cooking from '../../../images/chef-cook-food-33614.png';
import hdelevery from '../../../images/architecture-building-city-2047397.png';

const ChooseUs = () => {
  return (
    <div className="my-5">
      <Container>
        <Row className="g-4">
          <div className="w-75 mx-auto">
            <h2 className="">Why You Choose Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              officia corporis fuga ipsum repellat non consectetur eius, debitis
              ea cupiditate cum illum maxime? Unde a quia eum corrupti,
              cupiditate accusantium!
            </p>
          </div>
        </Row>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <Card className="h-100 shadow">
              <Card.Img className=" mx-auto" variant="top" src={fdelevery} />
              <Card.Body className="">
                <Card.Title>Fast Delevery</Card.Title>
                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</Card.Text>
              </Card.Body>
              <button type="button" className="btn btn-link text-decoration-none">See More &raquo;</button>
            </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card className="h-100 shadow">
              <Card.Img className=" mx-auto" variant="top" src={cooking} />
              <Card.Body className="">
                <Card.Title>A Good Auto Responder</Card.Title>
                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</Card.Text>
              </Card.Body>
              <button type="button" className="btn btn-link text-decoration-none">See More &raquo;</button>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100 shadow">
              <Card.Img className=" mx-auto" variant="top" src={hdelevery} />
              <Card.Body className="">
                <Card.Title>Home Delevery</Card.Title>
                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</Card.Text>
              </Card.Body>
              <button type="button" className="btn btn-link text-decoration-none">See More &raquo;</button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUs;
