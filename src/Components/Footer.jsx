import React from "react";
import logo from "../Images/ccc-white-logo.svg";
import instagram from "../Images/insta.svg";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github.svg";
import facebook from "../Images/facebook.svg";
const Footer = () => {
  return (
    <div id="footer">
      <div id="foot_content">
        <div>
          <img src={logo} alt="ccc_logo" id="foot_logo" />
        </div>
        <div id="foot_head">Cloud Computing Cell</div>
        <div id="foot_tail">
          AJAY KUMAR GARG ENGINEERING COLLEGE, UTTAR PRADESH-201009
        </div>
        <div id="foot-id">
          <div className="accounts">
            <img src={instagram} alt="instgram" />
          </div>
          <div className="accounts">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="accounts">
            <img src={github} alt="github" />
          </div>
          <div className="accounts">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
      <div id="map" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.46685076269!2d77.49942917441436!3d28.675678282122025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1689180454104!5m2!1sen!2sin"
          width="350vw"
          height="150vw"
          // style="border:0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
