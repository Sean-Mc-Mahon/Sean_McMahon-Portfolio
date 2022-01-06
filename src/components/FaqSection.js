import React from "react";
//Styled
import styled from "styled-components/macro";
import { About } from "../styles";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
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
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
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
