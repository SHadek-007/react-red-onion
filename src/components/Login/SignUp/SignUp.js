import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from '../../../images/logo2.png';
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const navigateToSignIn = (e) => {
    navigate("/signin");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="login-container p-4 rounded">
      <div className="text-center mb-4">
        <img className="w-50" src={logo} alt="" />
      </div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control onBlur={handleEmailBlur} type="text" placeholder="Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          variant="danger"
          className="w-50 d-block mx-auto fs-5"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p className="mt-3">
        New to Red Onion?{" "}
        <span
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={navigateToSignIn}
        >
          Please Sign In
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
