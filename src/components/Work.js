import React from "react";
//Styled
import styled from "styled-components/macro";
import { Links, Project, ProjectRight, McTastic, Icons } from "../styles";
//React Router Links
import { Link } from "react-router-dom";
//Images
import virtual from "../img/virtual/virtual_ireland.JPG";
import virtual_res from "../img/virtual/virtual_res.png";
import seanmc from "../img/seanmc/seanmc.JPG";
import mctastic from "../img/mctastic/mctastic.JPG";
import purr from "../img/purr/purr.JPG";
import ThreeMe from "./ThreeMe";
import McTasticLogo from "../img/mctastic/mclogo.png";
//Animations
import { motion } from "framer-motion";
import {
  fade,
  photoAnim,
  lineAnim,
  pageAnimation,
  projectContainer,
} from "../animation";
import { useScroll } from "./useScroll";
import ScrollTop from "./ScrollTop";
//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
//Projects
import Virtual from "../components/virtual";
import SeanMc from "../components/seanmc";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Work = () => {
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  return (
    <MyWork
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      className="my_work"
      style={{ background: "white" }}
    >
      <ScrollTop />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Virtual />
        </SwiperSlide>
        <SwiperSlide>
          <SeanMc />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Virtual />
      <Project
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={projectContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>Sean Mc Designs</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/seanmc">
          <img src={seanmc} alt="Sean Mc Designs" />
        </Link>
      </Project>
      <McTastic
        transition={{ duration: 0.5 }}
        ref={element3}
        variants={projectContainer}
        animate={controls3}
        initial="hidden"
        className="mctastic"
      >
        <h2>McTastic Recipes</h2>
        <img className="mctastic-logo" src={McTasticLogo} alt="" />
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/mctastic">
          <Hide>
            <img src={mctastic} alt="McTastic Recipes" />
          </Hide>
        </Link>
      </McTastic>
      <Project
        transition={{ duration: 0.5 }}
        ref={element4}
        variants={projectContainer}
        animate={controls4}
        initial="hidden"
      >
        <h2>Inner Purr</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/purr">
          <img src={purr} alt="Inner Purr" />
        </Link>
      </Project>
    </MyWork>
  );
};
const MyWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding-top: 1rem;
  @media (min-width: 992px) {
    padding: 3rem;
  }
  @media (min-width: 1200px) {
    padding: 5rem;
  }
  .swiper {
    transition: all 1s;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--yellow);
    background: #1b1b1b;
    padding: 1.3rem;
    border-radius: 50%;
    top: 30%;
    transition: all 1s;
    @media (min-width: 567px) {
      top: 40%;
    }
    @media (min-width: 768px) {
      top: 50%;
    }
    @media (min-width: 1200px) {
      padding: 2rem;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    filter: drop-shadow(0px 0px 5px var(--yellow));
    -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
    transform: scale(0.5);
    @media (min-width: 1200px) {
      transform: scale(1);
    }
  }
  .swiper-pagination-bullet {
    transition: all 1s;
  }
  .swiper-pagination-bullet-active {
    background: #ffc107;
    border: 0.5px solid black;
    font-size: 2rem;
    transform: scale(2);
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Work;
