import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import ThreeMe from "../components/ThreeMe";
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
      <ServiceSection />
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
        fill: #ffc107;
        -webkit-filter: drop-shadow(0px 0px 5px #ffc107);
        filter: drop-shadow(0px 0px 5px #ffc107);
      }
    }
  }
`;

export default AboutUs;
