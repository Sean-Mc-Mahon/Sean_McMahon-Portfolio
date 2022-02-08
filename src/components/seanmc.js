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
import seanmc_res from "../img/seanmc/seanmc_res.webp";

const SeanMc = () => {
  const [element, controls] = useScroll();
  return (
    <SeanMcProject
      className="seanmc"
      transition={{ duration: 0.5 }}
      ref={element}
      variants={projectContainer}
      animate={controls}
      initial="hidden"
    >
      <ProjectHead variants={fade} className="seanmc-head">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 160 80"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <g className="cog2">
            <g transform="matrix(0.624005,-0.78142,0.755498,0.603305,24.9044,89.3303)">
              <path
                d="M96.856,1.744C94.429,1.515 91.986,1.515 89.559,1.744L86.61,8.485C84.272,8.969 81.994,9.709 79.818,10.692L73.47,6.972C71.372,8.213 69.395,9.649 67.566,11.261L69.142,18.448C67.536,20.214 66.128,22.151 64.945,24.225L57.623,24.947C56.655,27.185 55.9,29.508 55.368,31.888L60.867,36.776C60.605,39.149 60.605,41.543 60.867,43.916L55.368,48.804C55.9,51.183 56.655,53.507 57.623,55.745L64.945,56.467C66.128,58.54 67.536,60.478 69.142,62.244L67.566,69.43C69.395,71.043 71.372,72.479 73.47,73.72L79.818,70C81.994,70.982 84.272,71.722 86.61,72.207L89.559,78.947C91.986,79.177 94.429,79.177 96.856,78.947L99.806,72.207C102.143,71.722 104.421,70.982 106.597,70L112.945,73.72C115.043,72.479 117.02,71.043 118.849,69.43L117.273,62.244C118.88,60.478 120.287,58.54 121.47,56.467L128.792,55.745C129.76,53.507 130.516,51.183 131.047,48.804L125.548,43.916C125.81,41.543 125.81,39.149 125.548,36.776L131.047,31.888C130.516,29.508 129.76,27.185 128.792,24.947L121.47,24.225C120.287,22.151 118.88,20.214 117.273,18.448L118.849,11.261C117.02,9.649 115.043,8.213 112.945,6.972L106.597,10.692C104.421,9.709 102.143,8.969 99.806,8.485L96.856,1.744ZM93.208,15.143C107.117,15.143 118.41,26.436 118.41,40.346C118.41,54.256 107.117,65.549 93.208,65.549C79.298,65.549 68.005,54.256 68.005,40.346C68.005,26.436 79.298,15.143 93.208,15.143Z"
                style={{
                  stroke: "#fcfcfc",
                  strokeWidth: "1.02px",
                  fill: "#212121",
                }}
              />
            </g>
            <g transform="matrix(1,0,0,1,25.3883,0)">
              <circle
                cx="88.159"
                cy="40.531"
                r="25.388"
                style={{ stroke: "#fcfcfc", strokeWidth: 1, fill: "#212121" }}
              />
            </g>
            <g transform="matrix(0.583924,0,0,0.833659,46.1887,5.49114)">
              <text
                className="cog-text"
                x="88.774px"
                y="62.39px"
                style={{
                  fontFamily: '"LilyScriptOne-Regular", "Lily Script One"',
                  fontSize: "56.378px",
                  fill: "#fcfcfc",
                }}
              >
                M
              </text>
            </g>
          </g>
          <g className="cog1">
            <g transform="matrix(1,0,0,1,-53.0818,0)">
              <path
                d="M96.856,1.744C94.429,1.515 91.986,1.515 89.559,1.744L86.789,9.351C84.515,9.822 82.299,10.542 80.182,11.498L73.47,6.972C71.372,8.213 69.395,9.649 67.566,11.261L69.796,19.043C68.233,20.761 66.864,22.646 65.713,24.663L57.623,24.947C56.655,27.185 55.9,29.508 55.368,31.888L61.746,36.873C61.491,39.181 61.491,41.511 61.746,43.819L55.368,48.804C55.9,51.183 56.655,53.507 57.623,55.745L65.713,56.028C66.864,58.046 68.233,59.931 69.796,61.648L67.566,69.43C69.395,71.043 71.372,72.479 73.47,73.72L80.182,69.194C82.299,70.15 84.515,70.87 86.789,71.341L89.559,78.947C91.986,79.177 94.429,79.177 96.856,78.947L99.626,71.341C101.901,70.87 104.116,70.15 106.233,69.194L112.945,73.72C115.043,72.479 117.02,71.043 118.849,69.43L116.619,61.648C118.182,59.931 119.551,58.046 120.702,56.028L128.792,55.745C129.76,53.507 130.516,51.183 131.047,48.804L124.669,43.819C124.924,41.511 124.924,39.181 124.669,36.873L131.047,31.888C130.516,29.508 129.76,27.185 128.792,24.947L120.702,24.663C119.551,22.646 118.182,20.761 116.619,19.043L118.849,11.261C117.02,9.649 115.043,8.213 112.945,6.972L106.233,11.498C104.116,10.542 101.901,9.822 99.626,9.351L96.856,1.744ZM93.208,15.143C107.117,15.143 118.41,26.436 118.41,40.346C118.41,54.256 107.117,65.549 93.208,65.549C79.298,65.549 68.005,54.256 68.005,40.346C68.005,26.436 79.298,15.143 93.208,15.143Z"
                style={{ stroke: "#fcfcfc", strokeWidth: 1, fill: "#212121" }}
              />
            </g>
            <g transform="matrix(1,0,0,1,-25.3351,-8.88178e-16)">
              <circle
                cx="65.329"
                cy="40.346"
                r="25.203"
                style={{ stroke: "#fcfcfc", strokeWidth: 1, fill: "#212121" }}
              />
            </g>
            <g transform="matrix(1,0,0,1,8.41393,1.1192)">
              <text
                className="cog-text"
                x="18.053px"
                y="57.592px"
                style={{
                  fontFamily: '"LilyScriptOne-Regular", "Lily Script One"',
                  fontSize: "48.522px",
                  fill: "#fcfcfc",
                }}
              >
                S
              </text>
            </g>
          </g>
        </svg>
        <div className="logo-text">
          <h2 className="logo-head1">SeanMc</h2>
          <h2 className="logo-head2">-Digital Design</h2>
        </div>
      </ProjectHead>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Hide>
        <Container>
          <Row>
            <Col md={6}>
              <motion.img variants={photoAnim} src={seanmc_res} alt="Sean Mc" />
            </Col>
            <Col md={6}>
              <ProjectRight variants={fade}>
                <div className="top">
                  <p>
                    SM Digital Design is a website for a digital designer
                    offering services such as artistic rendering and 3D models.
                  </p>
                </div>
                <div className="bottom">
                  <Icons>
                    <ul>
                      <li>
                        <i className="devicon-html5-plain"></i>
                      </li>
                      <li>
                        <i className="devicon-css3-plain"></i>
                      </li>
                      <li>
                        <i className="devicon-javascript-plain"></i>
                      </li>
                      <li>
                        <i className="devicon-git-plain"></i>
                      </li>
                      <li>
                        <i className="devicon-github-original"></i>
                      </li>
                      <li>
                        <i className="devicon-bootstrap-plain"></i>
                      </li>
                      <li>
                        <i className="devicon-vscode-plain"></i>
                      </li>
                      <li>
                        <i className="devicon-sass-original"></i>
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
    </SeanMcProject>
  );
};

const SeanMcProject = styled(Project)`
  .seanmc-head {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      margin: 0;
      font-family: "Lily Script One", cursive;
    }
    .logo-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 576px) {
        flex-direction: row;
      }
    }
    .logo-head1 {
      font-size: calc(1.3rem + 1vw);
      @media (min-width: 576px) {
        font-size: calc(1.7rem + 1vw);
      }
      @media (min-width: 1400px) {
        font-size: 41.2px;
      }
    }
    .logo-head2 {
      font-size: calc(0.5rem + 1vw);
      @media (min-width: 576px) {
        font-size: calc(1.7rem + 1vw);
      }
      @media (min-width: 1400px) {
        font-size: 41.2px;
      }
    }
    svg {
      max-width: 100px;
    }
    .cog1 {
      animation: cog1 3.5s ease-in-out;
      transform-box: fill-box;
      transform-origin: center;
    }

    .cog2 {
      animation: cog2 3.5s ease-in-out;
      transform-box: fill-box;
      transform-origin: center;
    }

    .cog-text {
      z-index: 100;
    }

    @keyframes cog1 {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg);
      }
    }

    @keyframes cog2 {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(-360deg);
      }
    }
    svg {
      text-shadow: 0 0 25px #aaaf, 0 0 25px #aaaf, 0 0 15px #aaaf,
        0 0 15px #aaaf, 0 0 5px #aaaf, 0 0 5px #aaaf;
      animation: flicker 3s linear infinite;
    }
    svg:hover {
      text-shadow: 0 0 25px #aaaf, 0 0 25px #aaaf, 0 0 15px #aaaf,
        0 0 15px #aaaf, 0 0 5px #aaaf, 0 0 5px #aaaf;
      animation: Multicolor 3s linear infinite;
    }
    svg:hover .cog1 {
      animation: cog1 4s linear infinite;
      animation-play-state: running;
    }
    svg:hover .cog2 {
      animation: cog2 4s linear infinite;
      animation-play-state: running;
    }
  }
  @keyframes flicker {
    10%,
    30%,
    60%,
    75% {
      opacity: 1;
    }
    20%,
    40%,
    70% {
      opacity: 0.85;
    }
  }

  @keyframes Multicolor {
    0% {
      text-shadow: 0 0 25px #aaaf, 0 0 25px #aaaf, 0 0 15px #aaaf,
        0 0 15px #aaaf, 0 0 5px #aaaf, 0 0 5px #aaaf;
    }
    33% {
      text-shadow: 0 0 25px rgb(255, 187, 0), 0 0 25px rgb(255, 187, 0),
        0 0 15px rgb(255, 187, 0), 0 0 15px rgb(255, 187, 0),
        0 0 5px rgb(255, 187, 0), 0 0 5px rgb(255, 187, 0);
    }
    67% {
      text-shadow: 0 0 25px rgb(255, 187, 0), 0 0 25px rgb(255, 187, 0),
        0 0 15px rgb(255, 187, 0), 0 0 15px rgb(255, 187, 0),
        0 0 5px rgb(255, 187, 0), 0 0 5px rgb(255, 187, 0);
    }
    100% {
      text-shadow: 0 0 25px #aaaf, 0 0 25px #aaaf, 0 0 15px #aaaf,
        0 0 15px #aaaf, 0 0 5px #aaaf, 0 0 5px #aaaf;
    }
  }
`;

export default SeanMc;
