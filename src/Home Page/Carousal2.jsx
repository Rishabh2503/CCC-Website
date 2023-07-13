import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import one from "./Carousal Images/_DSC8199.jpg";
import two from "./Carousal Images/_DSC4980 (1).jpg";
import three from "./Carousal Images/_DSC1826.jpg";
import four from "./Carousal Images/_DSC8655.jpg";
import five from "./Carousal Images/_DSC8488.jpg";
import six from "./Carousal Images/_DSC8473.jpg";
import seven from "./Carousal Images/_DSC1913.jpg";
import './Home.css'

const Carousal2 = () => {
  const items = [
    { id: 1, title: two },
    { id: 2, title: one },
    { id: 3, title: three },
    { id: 4, title: four },
    { id: 5, title: five },
    { id: 6, title: six },
    { id: 7, title: seven },
  ];
  return (
    <>
      <Carousel>
        {items.map((item) => (
          <div key={item.id} id="imgCar">
            <img src={item.title} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousal2;
