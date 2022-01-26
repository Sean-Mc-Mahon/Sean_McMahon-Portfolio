import React from "react";
//Styled
import styled from "styled-components/macro";
//Animations
import { motion } from "framer-motion";
import { headerAnim, pageAnimation } from "../animation";
import { useScrollForward } from "./useScroll";
import ScrollTop from "./ScrollTop";
//Projects
import Virtual from "../components/virtual";
import SeanMc from "../components/seanmc";
import McTastic from "../components/mctastic";
import Purr from "../components/purr";
import Light from "./light";
import Paddy from "./paddy";
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
      <HeaderBlock
        variants={headerAnim}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <motion.h3>
          ...and part of a <span>Team</span>
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

const HeaderBlock = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: 20vh;
`;

export default Work;
