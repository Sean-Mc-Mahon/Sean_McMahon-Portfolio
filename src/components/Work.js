import React from "react";
//Styled
import styled from "styled-components/macro";
import { Links, Project, ProjectRight, Icons } from "../styles";
//React Router Links
import { Link } from "react-router-dom";
//Images
import virtual from "../img/virtual/virtual_ireland.JPG";
import virtual_res from "../img/virtual/virtual_res.png";
import seanmc from "../img/seanmc/seanmc.JPG";
import ThreeMe from "./ThreeMe";
//Animations
import { motion } from "framer-motion";
import {
  fade,
  photoAnim,
  lineAnim,
  headerAnim,
  pageAnimation,
  projectContainer,
} from "../animation";
import { useScroll, useScrollForward } from "./useScroll";
import ScrollTop from "./ScrollTop";
//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
//Projects
import Virtual from "../components/virtual";
import SeanMc from "../components/seanmc";
import McTastic from "../components/mctastic";
import Purr from "../components/purr";
import Light from "./light";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Work = () => {
  const [element, controls] = useScrollForward();
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
      <Hide
        variants={headerAnim}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <motion.h2>
          Clean & <span>beautiful</span> UI/UX
        </motion.h2>
      </Hide>
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
        <SwiperSlide>
          <McTastic />
        </SwiperSlide>
        <SwiperSlide>
          <Purr />
        </SwiperSlide>
      </Swiper>
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
          <Light />
        </SwiperSlide>
        <SwiperSlide>
          <Light />
        </SwiperSlide>
      </Swiper>
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
    padding-bottom: 1rem;
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

const Hide = styled(motion.div)`
  overflow: hidden;
`;

export default Work;
