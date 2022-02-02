import React from "react";
//Styled
import styled from "styled-components/macro";
import {
  Links,
  Project,
  ProjectHead,
  ProjectRight,
  Icons,
  Hide,
} from "../styles";
//Animation
import { motion } from "framer-motion";
import { fade, photoAnim, lineAnim, projectContainer } from "../animation";
import { useScroll } from "./useScroll";
//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
//Images
import mctastic_res from "../img/mctastic/mctastic_res.webp";
import McTasticLogo from "../img/mctastic/mclogo.png";

const McTastic = () => {
  const [element, controls] = useScroll();
  return (
    <McTasticProject
      className="mctastic"
      transition={{ duration: 0.5 }}
      ref={element}
      variants={projectContainer}
      animate={controls}
      initial="hidden"
    >
      <ProjectHead variants={fade} className="mctastic-head">
        <img
          className="mctastic-logo"
          src={McTasticLogo}
          alt="McTastic Recipes"
        />
        <h2 className="logo-head">McTastic Recipes</h2>
      </ProjectHead>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Hide>
        <Container>
          <Row>
            <Col md={6}>
              <motion.img
                variants={photoAnim}
                src={mctastic_res}
                alt="McTastic Recipes"
              />
            </Col>
            <Col md={6}>
              <ProjectRight variants={fade}>
                <div className="top">
                  <p>
                    McTastic Recipes is a recipe website where users may add not
                    just recipes but also ingredients.
                  </p>
                </div>
                <div className="bottom">
                  <Icons>
                    <ul>
                      <li>
                        <i class="devicon-html5-plain"></i>
                      </li>
                      <li>
                        <i class="devicon-css3-plain"></i>
                      </li>
                      <li>
                        <i class="devicon-javascript-plain"></i>
                      </li>
                      <li>
                        <i class="devicon-git-plain"></i>
                      </li>
                      <li>
                        <i class="devicon-github-original"></i>
                      </li>
                      <li>
                        <i class="devicon-bootstrap-plain"></i>
                      </li>
                      <li>
                        <i class="devicon-vscode-plain"></i>
                      </li>
                      <li>
                        <i class="devicon-flask-original"></i>
                      </li>
                      <li>
                        <i class="devicon-mongodb-plain"></i>
                      </li>
                    </ul>
                  </Icons>
                  <Links variants={fade}>
                    <a
                      rel="noopner"
                      target="blank"
                      href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/"
                    >
                      Live Site
                    </a>
                    <a
                      rel="noopner"
                      target="blank"
                      href="https://github.com/Sean-Mc-Mahon/ms2-seanmcmahon-digital-design"
                    >
                      Repo
                    </a>
                  </Links>
                </div>
              </ProjectRight>
            </Col>
          </Row>
        </Container>
      </Hide>
    </McTasticProject>
  );
};

const McTasticProject = styled(Project)`
  .mctastic-head {
    color: #37474f;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 0;
      font-family: "Pattaya", sans-serif;
    }
    img {
      min-height: 40px;
      min-width: 40px;
      height: calc(1.5rem + 2vw);
      width: calc(1.5rem + 2vw);
    }
  }
`;

export default McTastic;
