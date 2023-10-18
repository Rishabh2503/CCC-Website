import React from "react";
import home from "../Images/home.svg";
import "./Home.css";
import team from "../Images/team.svg";
import web from "../Images/web.svg";
import app from "../Images/app.svg";
import ml from "../Images/ml.svg";
import design from "../Images/design.svg";
import think from "../Images/think.svg";
import develop from "../Images/develop.svg";
import deploy from "../Images/deploy.svg";
import Carousal2 from "./Carousal2";

const Home = () => {
  return (
    <div>
      <div id="first-part">
        <div id="head">
          <div id="heading" style={{ fontSize: "3vw" }}>
            <span>Accelerating</span>
            <span className="inline"> Cloud</span>
            <span> Transformations.</span>
          </div>
          <div id="moto" style={{ fontSize: "3vw" }}>
            <span>THINK |</span>
            <span className="inline">DEVELOP</span>
            <span>| DEPLOY</span>
          </div>
        </div>
        <div>
          <img
            src={home}
            alt="home"
            id="illustration"
            style={{ height: "30vw" }}
          />
        </div>
      </div>
      <div id="about-us">
        <div className="title">
          <span>ABOUT</span>
          <span className="inline"> US</span>
        </div>
        <div id="about">
          <div id="teampic">
            <img src={team} alt="team photo" style={{ height: "30vw" }} />
          </div>
          <div className="content">
            <span className="inline">Cloud Computing Cell </span>
            <span>
              has been a part of Ajay Kumar Garg Engineering College since
              February 2016.The members are exposed to the latest Cloud
              Technologies that enable them to be market ready thereby
              increasing their opportunities in placements and research.It
              provides a platform to the students to compute, manage and deploy
              the cloud and related services.The Cell is coordinated by Dr. J.
              K. Seth, Ms. Anupama Sharma and Dr. Parneet Kaur, faculty members,
              IT department.
            </span>
          </div>
        </div>
      </div>
      <div className="title">
        <span>WHAT</span>
        <span className="inline"> WE</span>
        <span> DO</span>
      </div>
      {/* <div id="what-we-do">
        <div className="boxFlex">
          <img src={web} alt="web development" className="domain_pic" />
          <p className="domain_name">WEB DEVELOPMENT</p>
          <p className="domain_content">
            As web developers, we ensure that the website is visually appealing
            and easy to navigate with absolute care for website’s performance
            and capacity.
          </p>
        </div>
        <div className="boxFlex">
          <img src={app} alt="app development" className="domain_pic" />
          <p className="domain_name">APP DEVELOPMENT</p>
          <p className="domain_content">
            Work on different application development softwares like flutter,
            react native and NetBeans and provide the required solutions
          </p>
        </div>
        <div className="boxFlex">
          <img src={ml} alt="machine learning" className="domain_pic" />
          <p className="domain_name">MACHINE LEARNING</p>
          <p className="domain_content">
            Machine Learning is the field of study that gives computers the
            capability to learn without being explicitly programmed.
          </p>
        </div>
        <div className="boxFlex">
          <img src={design} alt="machine learning" className="domain_pic" />
          <p className="domain_name">UI/UX DESIGNING</p>
          <p className="domain_content">
            UI/UX designing and graphic designing so as to provide an edge in
            web and application development.
          </p>
        </div>
      </div> */}
      <div id="whatWeDo">
        <div className="boxFlex">
          <img src={web} alt="web development" className="domainPic" />
          <p className="domainName">WEB DEVELOPMENT</p>
          <p className="domainContent">
            As web developers, we ensure that the website is visually appealing
            and easy to navigate with absolute care for website’s performance
            and capacity.
          </p>
        </div>
        <div className="boxFlex">
          <img src={app} alt="app development" className="domainPic" />
          <p className="domainName">APP DEVELOPMENT</p>
          <p className="domainContent">
            Work on different application development softwares like flutter,
            react native and NetBeans and provide the required solutions
          </p>
        </div>
        <div className="boxFlex">
          <img src={ml} alt="machine learning" className="domainPic" />
          <p className="domainName">MACHINE LEARNING</p>
          <p className="domainContent">
            Machine Learning is the field of study that gives computers the
            capability to learn without being explicitly programmed.
          </p>
        </div>
        <div className="boxFlex">
          <img src={design} alt="machine learning" className="domainPic" />
          <p className="domainName">UI/UX DESIGNING</p>
          <p className="domainContent">
            UI/UX designing and graphic designing so as to provide an edge in
            web and application development.
          </p>
        </div>
      </div>
      <div className="title">
        <span>OUR</span>
        <span className="inline"> DOMAIN</span>
      </div>
      <div id="whatWeDo">
        <div className="boxFlex">
          <img src={think} alt="think" className="domainPic" />
          <p className="domainName">THINK</p>
          <p className="domainContent">
            As web developers, we ensure that the website is visually appealing
            and easy to navigate with absolute care for website’s performance
            and capacity.
          </p>
        </div>
        <div className="boxFlex">
          <img src={develop} alt="develop" className="domainPic" />
          <p className="domainName">DEVELOP</p>
          <p className="domainContent">
            Work on different application development softwares like flutter,
            react native and NetBeans and provide the required solutions
          </p>
        </div>
        <div className="boxFlex">
          <img src={deploy} alt="deploy" className="domainPic" />
          <p className="domainName">DEPLOY</p>
          <p className="domainContent">
            Machine Learning is the field of study that gives computers the
            capability to learn without being explicitly programmed.
          </p>
        </div>
      </div>
      <Carousal2 />
    </div>
  );
};

export default Home;
