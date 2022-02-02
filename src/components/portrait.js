import React from "react";
import styled from "styled-components/macro";
import profile from "../img/seanmc_poly.webp";
//Animation
import { motion } from "framer-motion";
import { fade, modelContainer, scrollRevealRightFast } from "../animation";
import { useScroll } from "./useScroll";

const PolyPortrait = () => {
  const [element, controls] = useScroll();
  return (
    <Portrait
      className="poly-portrait"
      transition={{ duration: 0.5 }}
      ref={element}
      variants={modelContainer}
      animate={controls}
      initial="hidden"
    >
      <div className="design-title-container">
        <a
          rel="noopener"
          target="_blank"
          href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/renders.html"
        >
          <motion.h2 className="design-title" variants={scrollRevealRightFast}>
            Poly Portaits
          </motion.h2>
        </a>
      </div>

      <img
        src={profile}
        alt="Poly Portrait"
        id="poly-portait"
        variants={fade}
      />
    </Portrait>
  );
};

const Portrait = styled(motion.div)`
  a {
    text-decoration: none;
  }
  h2 {
    margin: 0;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 330px;
  margin: 0 auto;
  overflow: hidden;
  border: 4px solid var(--yellow);
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 992px) {
    width: 450px;
    height: 450px;
  }
  .design-title-container {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 70%;
    /* background: rgba(255, 193, 7, 0.5); */
    background: rgba(0, 0, 0, 0.7);
  }
  .design-title {
    font-weight: bold;
    text-decoration: none !important;
    font-size: calc(1rem + 2vw);
    padding: 0.5rem;
    color: white;
    /* color: #1b1b1b; */
    z-index: 20;
    @media (min-width: 1500px) {
      font-size: 50px;
    }
  }
  #poly-portait {
    width: 330px;
    height: 330px;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 400px;
      height: 400px;
    }
    @media (min-width: 992px) {
      width: 450px;
      height: 450px;
    }
  }
`;

export default PolyPortrait;
