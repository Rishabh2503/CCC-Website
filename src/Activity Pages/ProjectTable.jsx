import React from "react";
import "./actvities.css";

const ActivityTable = () => {
  return (
    <div className="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S. No.</th>
            <th scope="col">Projects</th>
            <th scope="col">By:-</th>
            <th scope="col">Technology Stack Used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Tourist Guide</td>
            <td>Kartikey Singhal and Team</td>
            <td>React js, Google Maps API,Rapid APIHTML CSS JS</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PACOME</td>
            <td>Avinesh and Team.</td>
            <td>React native, AWS amplify and app sync, dynamo DB.</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Protek IT Solution</td>
            <td>Sachin Kumar and Team</td>
            <td>
              HTML, CSS, JAVASCRIPT, Bootstrap, tailwind CSS, Firebase, Figma.
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Quiz Portal</td>
            <td>Sachin Kumar and Team</td>
            <td>
              HTML, CSS, JAVASCRIPT, Bootstrap, tailwind CSS, Firebase, Figma
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Restaurant Website</td>
            <td>Siddharth Srivastava and team</td>
            <td>HTML, CSS, JAVASCRIPT, Bootstrap</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>E-Drishti</td>
            <td>Nishtha Pandey and Team</td>
            <td>Flutter, Dart, Firebase, Machine learning</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Grameen Neeti</td>
            <td>
              Anjani Singhal ,Nidhi Solanki ,Shashwat Pandey,Sachin
              Kumar,Kamakshi Vashista,Harshit Saxena
            </td>
            <td>Flutter, Machine learning</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Docrafi</td>
            <td>Mrithunjay N. Pandey and Team</td>
            <td>
              HTML, CSS, JAVASCRIPT, AWS, Cognito ,S3, Lambda and API Gateway
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
