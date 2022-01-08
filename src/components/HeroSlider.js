import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSlider = ({ children, source, alt }) => {
  return (
    <div>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={source} alt={alt} />
      </Carousel.Item>
    </div>
  );
};

export default HeroSlider;
