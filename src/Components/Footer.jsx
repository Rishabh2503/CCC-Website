import React from "react";
import logo from "../Images/CCC_logo.svg";
import instagram from "../Images/insta.svg";
import linkedin from "../Images/linkedin.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div id="foot_content">
        <div>
          <img src={logo} alt="ccc_logo" id="foot_logo"/>
        </div>
        <div id="foot_head">Cloud Computing Cell</div>
        <div id="foot_tail">AJAY KUMAR GARG ENGINEERING COLLEGE, UTTAR PRADESH-201009</div>
        <div id="foot-id">
          <div>
            <img src={instagram} alt="instgram" />
          </div>
          <div>
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
};

export default Footer;
