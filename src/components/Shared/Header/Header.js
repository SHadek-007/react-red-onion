import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo2.png';
import cart from '../../../images/icons/shopping-cart.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><img style={{height:'32px'}} className="w-100" src={logo} alt="Red Onion Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="cart"><img style={{height:'25px'}} className="w-100" src={cart} alt="Shopping Cart Logo" /></Nav.Link>
              <Nav.Link as={Link} to="signin">Sign In</Nav.Link>
              <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
