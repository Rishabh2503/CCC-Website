import React from "react";
import picture from "../Images/Me.jpg";
import github from "../Images/github.svg";
import insta from "../Images/insta.svg";
import linkedin from "../Images/linkedin.svg";

const TeamCard = () => {
  return (
    <div id="cards-design">
      <div className="card">
        <img src={picture} alt="card img" className="card-img" />
        <div className="card-body">
          <h1 className="card-title">Taru Pathak</h1>
          <p className="Card-sub-title">UI/UX Designer and React Developer</p>
          <div className="card-info">
            <img src={github} alt="github" />
            <img src={insta} alt="instagram" />
            <img src={linkedin} alt="linedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
