import React from "react";
//Styled
import styled from "styled-components/macro";
//Animations
import { motion } from "framer-motion";
import { headerAnim, pageAnimation, fade } from "../animation";
import { useScroll, useScrollForward } from "./useScroll";
import ScrollTop from "./ScrollTop";
//Projects
import Virtual from "../components/virtual";
import SeanMc from "../components/seanmc";
import McTastic from "../components/mctastic";
import Purr from "../components/purr";
//Hackathons
import Light from "./light";
import Paddy from "./paddy";
//Design
import Model3d from "./3d";
import PolyPortrait from "./portrait";
import LibraryRender from "./renders";
import Furniture from "./furniture";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Work = () => {
  const [element, controls] = useScrollForward();
  const [element2, controls2] = useScrollForward();
  const [element3, controls3] = useScrollForward();
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
      <WorkSection>
        <HeaderBlock
          variants={headerAnim}
          ref={element}
          animate={controls}
          initial="hidden"
        >
          <motion.h2>
            Clean & <span>beautiful</span> UI/UX
          </motion.h2>
          <motion.h3>
            both <span>Individually</span>...
          </motion.h3>
        </HeaderBlock>
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
      </WorkSection>
      <WorkSection>
        <HeaderBlock
          variants={headerAnim}
          ref={element2}
          animate={controls2}
          initial="hidden"
        >
          <motion.h3>
            ...and part of a <span>Team</span>.<br /> I like to participate in
            hackathons
          </motion.h3>
        </HeaderBlock>
        <Swiper
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
            <Paddy />
          </SwiperSlide>
        </Swiper>
      </WorkSection>
      <HeaderBlock
        variants={headerAnim}
        ref={element3}
        animate={controls3}
        initial="hidden"
      >
        <motion.h3>...as well as other forms of digital design</motion.h3>
      </HeaderBlock>
      <motion.div
        variants={fade}
        ref={element4}
        animate={controls4}
        initial="hidden"
      >
        <Swiper
          className="design-slides"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="render-slide">
            <LibraryRender />
          </SwiperSlide>
          <SwiperSlide>
            <Model3d className="3d-model-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <PolyPortrait className="poly-portrait-slide" />
          </SwiperSlide>
          <SwiperSlide className="furniture-slide">
            <Furniture />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </MyWork>
  );
};
const MyWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding-top: 1rem;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    height: 100px;
    text-align: center;
  }
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
  .design-slides .swiper-button-next,
  .design-slides .swiper-button-prev {
    top: 45%;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    transform: scale(0.5);
    @media (min-width: 1200px) {
      transform: scale(1);
    }
  }
  .swiper-button-next:hover::after,
  .swiper-button-prev:hover::after {
    filter: drop-shadow(0px 0px 5px var(--yellow));
    -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
  }
  .design-slides {
    padding-bottom: 2.5rem;
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

const WorkSection = styled.div`
  min-height: 90vh;
`;

const HeaderBlock = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: 20vh;
`;

export default Work;
