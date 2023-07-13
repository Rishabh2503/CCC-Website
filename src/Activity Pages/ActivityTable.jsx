import React from "react";
import "./actvities.css";

const ActivityTable = () => {
  return (
    <div className="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Serial Number</th>
            <th scope="col">Events</th>
            <th scope="col">Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>SPOCC'22</td>
            <td>22nd September 2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>HACKOVERFLOW 2022</td>
            <td>September 17, 2022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>GRAPHICON 2022</td>
            <td>September 18,2022</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>CLOUDSPLORE 2022</td>
            <td>OCTOBER 3, 2021</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>CLOUDSPLORE 2021</td>
            <td>October 7, 2021.</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>SPOCC’21</td>
            <td>September 20, 2020</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>SPOCC’20</td>
            <td>28TH FEB TO 1ST MARCH 2020</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>CLOUDSPLORE 2021</td>
            <td>22ND TO 23RD OCTOBER 2019</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>ERUDITION’20</td>
            <td>28TH FEB TO 1ST MARCH 2020</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>QUIZARD</td>
            <td>22ND TO 23RD OCTOBER 2019</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>WORKSHOP ON FLUTTER & FIREBASE</td>
            <td>5TH MARCH TO 9TH MARCH 2019</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>Workshop on Amazon Web Services with Alexa</td>
            <td>12th April to 15th April 2018</td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td>Workshop on Cloud Essentials & Linux</td>
            <td>9th to 11th November 2017.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
