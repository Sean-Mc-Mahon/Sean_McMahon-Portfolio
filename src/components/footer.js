import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <StyledFooter id="foot">
      <Container>
        <Row>
          <Col md={6} className="contact-details">
            <div className="email">
              <i class="fas fa-envelope"></i> sean.mcmahon87@gmail.com
            </div>
            <div className="phone">
              <i class="fas fa-phone-alt"></i> 00353-87-4166-750
            </div>
          </Col>
          <Col md={6}>
            <ul>
              <li>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://github.com/Sean-Mc-Mahon"
                >
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.linkedin.com/in/sean-mcmahon-profile/"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 10vh;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  bottom: 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 !important;
    color: white;
    .row {
      width: 100%;
    }
    .col-md-6 {
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
  a,
  .phone,
  .email {
    :hover {
      color: var(--yellow);
      -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
      filter: drop-shadow(0px 0px 5px var(--yellow));
    }
  }
  @media (min-width: 992px) {
    padding: 0;
  }
  @media (min-width: 1200px) {
    li {
      padding-left: 10rem;
    }
  }
`;

export default Footer;
