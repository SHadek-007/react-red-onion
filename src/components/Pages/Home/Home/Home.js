import React from "react";
import {  Outlet } from "react-router-dom";
import ChooseUs from "../../ChooseUs/ChooseUs";
import Banner from "../Banner/Banner";
import CustomLink from "../CustomLink/CustomLink";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="">
        <nav className="d-flex justify-content-center my-3 ">
          <CustomLink to={"/"}>Breakfast</CustomLink>
          <CustomLink to={"/launch"}>Launch</CustomLink>
          <CustomLink to={"/dinner"}>Dinner</CustomLink>
        </nav>
        <Outlet></Outlet>
      </div>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
