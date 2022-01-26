import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useScroll, useScrollForward } from "./useScroll";
import { titleAnim, scrollRevealRight } from "../animation";

const Footer = () => {
  const [element, controls] = useScrollForward();
  const { pathname } = useLocation();
  return (
    <StyledFooter id="foot">
      <Container>
        <Row>
          <Col>
            <Hide
              variants={scrollRevealRight}
              ref={element}
              animate={controls}
              initial="hidden"
            >
              <h3>Get in Touch!</h3>
            </Hide>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="contact-details">
            <h4>Contact</h4>
            <div className="email">
              <i class="fas fa-envelope"></i> sean.mcmahon87@gmail.com
            </div>
            <div className="phone">
              <i class="fas fa-phone-alt"></i> 00353-87-4166-750
            </div>
          </Col>
          <Col md={6} className="connect">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://github.com/Sean-Mc-Mahon"
                >
                  <i class="devicon-github-original"></i>
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.linkedin.com/in/sean-mcmahon-profile/"
                >
                  <i class="devicon-linkedin-plain"></i>
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://codepen.io/McTastic"
                >
                  <i class="devicon-codepen-plain"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

const Hide = styled(motion.div)`
  overflow: hidden;
`;
const StyledFooter = styled(motion.div)`
  display: flex;
  flex-direction: row;
  min-height: 10vh;
  margin: auto;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  bottom: 0;
  .container {
    color: white;
    .row .col {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .contact-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      @media (min-width: 768px) {
        justify-content: start;
        align-items: flex-start;
      }
    }
    .connect {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0 2rem;
    margin: 0;
  }
  li {
    position: relative;
    padding: 0 1rem;
  }
  a {
    font-size: 2.2rem;
  }
  h3,
  a,
  .phone,
  .email,
  .connect h4,
  .contact-details h4 {
    :hover {
      color: var(--yellow);
      -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
      filter: drop-shadow(0px 0px 5px var(--yellow));
    }
  }
`;

export default Footer;
