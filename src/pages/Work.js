import React from "react";
//Styled
import styled from "styled-components/macro";
import { Image } from "../styles";
//React Router Links
import { Link } from "react-router-dom";
//Images
import virtual from "../img/virtual/virtual_ireland.JPG";
import seanmc from "../img/seanmc.JPG";
import mctastic from "../img/mctastic.JPG";
import purr from "../img/purr.JPG";
//Animations
import { motion } from "framer-motion";
import {
  fade,
  photoAnim,
  lineAnim,
  slider,
  pageAnimation,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <MyWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <sliderContainer>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </sliderContainer>
      <Container>
        <Project>
          <motion.h2 initial="hidden" variants={fade} animate="show">
            Virtual Ireland
          </motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/virtual">
            <Hide>
              <motion.img
                variants={photoAnim}
                src={virtual}
                alt="Virtual Ireland"
              />
            </Hide>
          </Link>
        </Project>
        <Project
          ref={element}
          variants={fade}
          animate={controls}
          initial="hidden"
        >
          <h2>Sean Mc Designs</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/seanmc">
            <img src={seanmc} alt="Sean Mc Designs" />
          </Link>
        </Project>
        <Project
          ref={element2}
          variants={fade}
          animate={controls2}
          initial="hidden"
        >
          <h2>McTastic Recipes</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/mctastic">
            <Hide>
              <img src={mctastic} alt="McTastic Recipes" />
            </Hide>
          </Link>
        </Project>
        <Project
          ref={element3}
          variants={fade}
          animate={controls3}
          initial="hidden"
        >
          <h2>Inner Purr</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/purr">
            <img src={purr} alt="Inner Purr" />
          </Link>
        </Project>
      </Container>
    </MyWork>
  );
};

const MyWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Work;
