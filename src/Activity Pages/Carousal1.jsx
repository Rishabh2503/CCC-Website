import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import one from "./Hackathon Images/1.jpg";
import two from "./Hackathon Images/10.jpg";
import three from "./Hackathon Images/11.jpg";
import four from "./Hackathon Images/12.jpg";
import five from "./Hackathon Images/3.jpg";
import six from "./Hackathon Images/4.jpg";
import eight from "./Hackathon Images/7.jpg";
import nine from "./Hackathon Images/8.jpg";
import ten from "./Hackathon Images/9.jpg";

const Carousal1 = () => {
  const items = [
    { id: 1, title: one },
    { id: 2, title: two },
    { id: 3, title: three },
    { id: 4, title: four },
    { id: 5, title: five },
    { id: 6, title: six },
    { id: 7, title: eight },
    { id: 8, title: nine },
    { id: 9, title: ten },
  ];
  return (
    <>
      <Carousel>
        {items.map((item) => (
          <div key={item.id} id="img-car">
            <img src={item.title} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousal1;
