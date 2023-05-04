import React from "react";
import home from "../Images/home.svg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div id="first-part">
        <img src={home} alt="home" id="illustration" />
        <div id="head">
        <div id="heading">
          <span>Accelerating</span>
          <span className="inline"> Cloud</span>
          <span>  Transformations.</span>
          </div>
          <div id="moto">
          <span>THINK |</span><span className="inline">DEVELOP</span><span>| DEPLOY</span>
        </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Home;
