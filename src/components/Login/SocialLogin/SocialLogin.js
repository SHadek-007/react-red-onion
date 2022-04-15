import React from "react";
import './SocialLogin.css';
import google from '../../../images/social-logo/google.png';
import facebook from '../../../images/social-logo/facebook.png';
import github from '../../../images/social-logo/github.png';

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="w-50 bg-danger" style={{ height: "1px" }}></div>
        <p className="mt-3 mx-2">or</p>
        <div className="w-50 bg-danger" style={{ height: "1px" }}></div>
      </div>
      <div className="btn-container">
          <button className="google d-block mx-auto mb-3"> <img className="me-5" style={{height:'32px'}} src={google} alt="" /> Sign in with Google</button>
          <button className="fb d-block mx-auto mb-3"> <img className="me-4" src={facebook} alt="" /> Sign in with Facebook</button>
          <button className="git d-block mx-auto mb-3"> <img className="me-5 bg-white rounded-circle" src={github} alt="" /> Sign in with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
