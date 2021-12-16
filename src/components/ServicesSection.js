import React from "react";
//import Images
import me3 from "../img/me3.jpg";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

function ServicesSection() {
  return (
    <Services>
      <Description>
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
      </Description>
      <Image>
        <img src={me3} alt="3 of me" />
      </Image>
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
