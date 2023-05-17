import React from "react";
import "./Team.css";
import TeamCard from "../Components/TeamCard(2nd)";
import team from "../Images/teampage.svg";


const Team = () => {
  return (
    <div>
      <div id="first-part">
        <img src={team} alt="team" id="illustration" />
        <div id="head">
          <div id="head_ing">
            <span>
              The Cloud Computing Cell is more than just a scientific community,
            </span>
          </div>
          <div className="inline" id="fam">
            It's a FAMILY!
          </div>
        </div>
      </div>
      <div className="title">
        <span>OUR </span>
        <span className="inline">TEAM</span>
      </div>
      <div>
        <div className="year-title">Members from Fourth Year : </div>
      </div>
      <div>
        <div className="year-title">Members from Third Year : </div>
      </div>
      <div>
        <div className="year-title">Members from Second Year : </div>
      </div>
      <TeamCard />
      <div>
        <div className="year-title">Our Alumni : </div>
        <div></div>
      </div>
    </div>
  );
};

export default Team;
