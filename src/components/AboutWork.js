import React from "react";
//Styled
import styled from "styled-components/macro";
import { About, HomeDescription, Image, Hide } from "../styles";
//animation
import { fade, scrollRevealRight } from "../animation";
//Scroll
import { useScroll } from "./useScroll";
//GIF's
import virtual_tour from "../img/virtual/virtual_tour.gif";
import seanmc_tour from "../img/seanmc/seanmc_tour.gif";
import mctastic_tour from "../img/mctastic/mctastic_tour.gif";
import purr_tour from "../img/purr/purr_tour.gif";
//React Router Links
import { Link } from "react-router-dom";

function AboutWork() {
  const [element, controls] = useScroll();
  return (
    <Work
      variants={scrollRevealRight}
      animate={controls}
      initial="hidden"
      ref={element}
      className="work"
    >
      <WorkCards>
        <h2>
          Clean and <span>beautiful</span> UX design
        </h2>
        <Cards>
          <Link to="/virtual">
            <Card>
              <img src={virtual_tour} alt="virtual ireland" />
            </Card>
          </Link>
          <Card>
            <img src={seanmc_tour} alt="seanmc design" />
          </Card>
          <Card>
            <img src={mctastic_tour} alt="mctastic recipes" />
          </Card>
          <Card>
            <img src={purr_tour} alt="inner purr" />
          </Card>
        </Cards>
      </WorkCards>
    </Work>
  );
}

const Work = styled(About)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const WorkCards = styled.div``;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Card = styled.div`
  padding: 2rem;
`;

export default AboutWork;
