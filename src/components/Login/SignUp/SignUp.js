import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from '../../../images/logo2.png';
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import  auth  from "../../../firebase.init";
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState('');
  const [agree, setAgree] = useState(false);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const navigate = useNavigate();

  if(user){
    navigate('/');
    console.log(user);
  };
  const handleNameBlur = (e) =>{
    setDisplayName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value);
  }
  const navigateToSignIn = (e) => {
    navigate("/signin");
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(agree){
    await createUserWithEmailAndPassword(email, password, confirmPassword);
    await updateProfile({ displayName});
    }
    // console.log('Updated profile');
  };

  return (
    <div className="login-container p-4 rounded">
      <div className="text-center mb-4">
        <img className="w-50" src={logo} alt="" />
      </div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control onBlur={handleNameBlur} type="text" placeholder="Name"/>
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
            onBlur={handleConfirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className={agree ? 'text-dark': 'text-secondary'} onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" label="Accept Terms & Conditions" />
        </Form.Group>
        <Button disabled={!agree}
          variant="danger"
          className="w-50 d-block mx-auto fs-5"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p className="mt-3">
        Already Have an Account?{" "}
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
