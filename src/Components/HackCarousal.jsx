import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import one from "./Hackathon Images/1.jpg";
import two from "./Hackathon Images/10.jpg";
import three from "./Hackathon Images/11.jpg";
import four from "./Hackathon Images/12.jpg";
import five from "./Hackathon Images/3.jpg";
import six from "./Hackathon Images/4.jpg";
import eight from "./Hackathon Images/7.jpg";
import nine from "./Hackathon Images/8.jpg";
import ten from "./Hackathon Images/9.jpg";
import './Components.css'

const HackCarousal = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  return (
    <div>
        <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={one} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={two} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={three} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={four} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={five} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={six} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={eight} alt="Seventh slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={nine} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={ten} alt="Seventh slide" />
      </Carousel.Item>
    </Carousel>
      {/* <Carousel>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item  className="car-img">
          <img className="d-block w-100" src={two} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={three} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={four} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={five} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={six} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={eight} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={nine} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="car-img">
          <img className="d-block w-100" src={ten} alt="Third slide" />
        </Carousel.Item>
      </Carousel> */}
      {/* <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={one}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={two}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={three}
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    */}
      {/* <Slider {...settings}>
        <div>
          <img src={one} />
        </div>
        <div>
          <img src={two} />
        </div>
        <div>
          <img src={three} />
        </div>
        <div>
          <img src={four} />
        </div>
        <div>
          <img src={five} />
        </div>
        <div>
          <img src={six} />
        </div>

        <div>
          <img src={eight} />
        </div>
        <div>
          <img src={nine} />
        </div>
        <div>
          <img src={ten} />
        </div>
      </Slider> */}
    </div>
  );
};

export default HackCarousal;
