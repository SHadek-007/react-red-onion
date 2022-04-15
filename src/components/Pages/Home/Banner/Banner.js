import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <div className="banner d-flex justify-content-center align-items-center">
        <div>
          <h1 className="mb-3">Best Food Waiting For Your Belly</h1>
          <InputGroup className="w-75 mx-auto mt-3">
            <FormControl
              placeholder="Enter Your Food Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button className="btn btn-danger">Search</Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Banner;
