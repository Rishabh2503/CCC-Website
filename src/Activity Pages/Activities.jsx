import React from "react";
import activity from "../Images/activities.svg";
import "./actvities.css";

const Activities = () => {
  return (
    <div>
      <div id="activity">
        <div id="head">
          <div id="headings">
            <span>EVENTS </span>
            <span className="inline">& </span>
            <span>PROJECTS</span>
          </div>
          <div id="activity-cont">
            <span className="inline">Cloud Computing Cell</span> has been a part
            of Ajay Kumar Garg Engineering College since February 2016.The
            members are exposed to the latest Cloud Technologies that enable
            them to be market ready thereby increasing their op
          </div>
        </div>
        <div>
          <img src={activity} alt="team" id="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Activities;
