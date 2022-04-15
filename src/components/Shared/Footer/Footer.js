import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Container fluid className='bg-dark text-white'>
                <Row className='py-3 mx-auto'>
                <Col xs={12} md={6}>
                    <div className='text-center'>
                    <img className='w-50' src={logo} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={3} className='footer-text'>
                    <p><small>About Online Food</small></p>
                    <p><small>Read Our Blog</small></p>
                    <p><small>Sign up to Delever</small></p>
                    <p><small>Add Your Resturant</small></p>
                </Col>
                <Col xs={12} md={3} className='footer-text'>
                    <div className=''>
                    <p><small>Get Help</small></p>
                    <p><small>Read FAQs</small></p>
                    <p><small>View all Cities</small></p>
                    <p><small>Resturants Near me</small></p>
                    </div>
                </Col>
                </Row>
                <Row className='pt-4'>
                <Col className='order-md-1' md={6}>
                    <p className='text-center'><small>Copyright &copy; 2021 Online Food</small></p>
                </Col>
                <Col className='order-md-2'  md={6}>
                    <div className='d-flex justify-content-center'>
                        <p className='ms-3'><small>Privacy Policy</small></p>
                        <p className='ms-3'><small>Terms of Use</small></p>
                        <p className='ms-3'><small>Pricing</small></p>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;