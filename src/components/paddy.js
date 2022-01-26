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
import paddy_res from "../img/paddy/paddy_res.webp";
import PaddyLogo from "../img/paddy/paddy_logo.webp";

const Paddy = () => {
  const [element, controls] = useScroll();
  return (
    <PaddyProject
      className="paddy"
      transition={{ duration: 0.5 }}
      ref={element}
      variants={projectContainer}
      animate={controls}
      initial="hidden"
    >
      <ProjectHead variants={fade} className="paddy-head">
        <img className="paddy-logo" src={PaddyLogo} alt="Ask Paddy" />
        <h2 className="logo-head">Ask Paddy</h2>
      </ProjectHead>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Hide>
        <Container>
          <Row>
            <Col md={6}>
              <motion.img
                variants={photoAnim}
                src={paddy_res}
                alt="Ask Paddy"
              />
            </Col>
            <Col md={6}>
              <ProjectRight variants={fade}>
                <div className="top">
                  <p>
                    A resource to ask St Patrick all the things you wanted to
                    now but were too afraid to ask...
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
                    </ul>
                  </Icons>
                  <Links variants={fade}>
                    <a
                      rel="noopner"
                      target="blank"
                      href="https://sean-mc-mahon.github.io/ask_paddy/"
                    >
                      Live Site
                    </a>
                    <a
                      rel="noopner"
                      target="blank"
                      href="https://github.com/Sean-Mc-Mahon/ask_paddy"
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
    </PaddyProject>
  );
};

const PaddyProject = styled(Project)`
  .paddy-head {
    font-family: "Marcellus", serif;
    color: #105300;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 0;
    }
    img {
      min-height: 40px;
      min-width: 40px;
      height: calc(1.5rem + 2vw);
      width: calc(1.5rem + 2vw);
    }
  }
`;

export default Paddy;
