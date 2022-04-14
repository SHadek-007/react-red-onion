import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from '../../../images/logo2.png';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="login-container p-4 rounded">
      <div className="text-center mb-4">
        <img className="w-50" src={logo} alt="" />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="danger" className="w-50 d-block mx-auto fs-5" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
