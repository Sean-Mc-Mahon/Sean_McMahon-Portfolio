import React from "react";
//Styled
import styled from "styled-components/macro";
import { About } from "../styles";
//animation
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
//Scroll
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <span className="anchor" id="about"></span>
      <h2>
        Any Questions? <span>About Me</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              hic.
            </p>
          </div>
        </Toggle>
        <Toggle title="What is the schedule?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              hic.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              optio.
            </p>
          </div>
        </Toggle>
        <Toggle title="payment methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              hic.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              suscipit qui totam corporis. Non, rerum.
            </p>
          </div>
        </Toggle>
        <Toggle title="what do we offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              hic.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              rerum iure aliquid atque veritatis modi?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  position: relative;
  .anchor {
    position: absolute;
    top: 0;
  }
  display: block;
  padding-top: 2rem;
  margin-top: 8rem;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    padding-top: 4rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 0.25rem 0rem;
    }
  }
`;

export default FaqSection;
