import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo2.png';
import cart from '../../../images/icons/shopping-cart.png';
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><img style={{height:'32px'}} className="w-100" src={logo} alt="Red Onion Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="cart"><img style={{height:'25px'}} className="w-100" src={cart} alt="Shopping Cart Logo" /></Nav.Link>
              {user ? <button className="btn btn-link text-decoration-none text-dark nav-style" onClick={handleSignOut}>Sign Out</button> :<Nav.Link className="nav-style text-dark" as={Link} to="signin">Sign In</Nav.Link>}
              <Nav.Link className="nav-style text-dark" as={Link} to="signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
