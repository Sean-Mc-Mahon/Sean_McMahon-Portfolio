import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ThreeMe from "../components/ThreeMe";
import Work from "../components/Work";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
//styled components
import styled from "styled-components";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <AboutSection />
      <WorkContainer>
        <Work />
      </WorkContainer>

      <FaqSection />
      <NewFill>
        <ThreeMe />
      </NewFill>
    </motion.div>
  );
};

const NewFill = styled.div`
  .fill {
    :hover {
      .mee {
        opacity: 0.08;
      }
      svg path {
        fill: var(--yellow);
        -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
        filter: drop-shadow(0px 0px 5px var(--yellow));
      }
    }
  }
`;

const WorkContainer = styled.div`
  background: #fff;
  position: relative;
  :before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -50px;
    height: 150px;
    background: white;
    transform: skewY(-3deg);
  }
`;

export default AboutUs;
