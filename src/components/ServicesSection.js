import React from "react";
//Styled
import styled from "styled-components/macro";
import { About, HomeDescription, Image, Hide } from "../styles";
//animation
import { fade, scrollRevealRight } from "../animation";
//Scroll
import { useScroll } from "./useScroll";

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollRevealRight}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <HomeDescription>
        <h2>
          Clean and <span>beautiful</span> UX design
        </h2>
        <Cards>
          <Card>
            <div className="icon"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, pariatur!
            </p>
          </Card>
          <Card>
            <div className="icon"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, pariatur!
            </p>
          </Card>
          <Card>
            <div className="icon">
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, pariatur!
            </p>
          </Card>
          <Card>
            <div className="icon">
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, pariatur!
            </p>
          </Card>
          <Card>
            <div className="icon">
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, pariatur!
            </p>
          </Card>
          <Card>
            <div className="icon">
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, pariatur!
            </p>
          </Card>
        </Cards>
      </HomeDescription>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
