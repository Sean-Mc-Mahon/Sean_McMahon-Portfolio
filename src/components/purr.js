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
import purr_res from "../img/purr/purr_res.webp";

const Purr = () => {
  const [element, controls] = useScroll();
  return (
    <PurrProject
      className="purr"
      transition={{ duration: 0.5 }}
      ref={element}
      variants={projectContainer}
      animate={controls}
      initial="hidden"
    >
      <ProjectHead variants={fade} className="purr-head">
        <div className="logo">
          <svg
            width={80}
            height={64}
            viewBox="0 0 100 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-buttons"
          >
            <g className="head" id="head">
              <g id="ear-left">
                <path
                  id="Vector"
                  d="M21.4524 50.7379C25.9956 50.7379 29.6785 42.6341 29.6785 32.6375C29.6785 22.6409 25.9956 14.537 21.4524 14.537C16.9093 14.537 13.2263 22.6409 13.2263 32.6375C13.2263 42.6341 16.9093 50.7379 21.4524 50.7379Z"
                  fill="#50862E"
                />
              </g>
              <g id="ear-right">
                <path
                  id="Vector_2"
                  d="M72.4536 53.1927C76.8033 54.5763 82.5471 47.9393 85.2827 38.3683C88.0183 28.7974 86.7098 19.9169 82.3601 18.5332C78.0104 17.1495 72.2666 23.7866 69.531 33.3576C66.7954 42.9285 68.1039 51.809 72.4536 53.1927Z"
                  fill="#5BEB00"
                />
              </g>
              <g id="Head">
                <path
                  id="Vector_3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.0657 28.5348L86.1287 37.4858C86.167 38.6357 86.1508 39.7968 86.0781 40.9671C84.8212 61.1815 67.1408 76.5573 46.6201 75.2813C26.0994 74.0054 10.4598 56.5579 11.7167 36.3435C11.8845 33.6448 12.345 31.0324 13.0657 28.5348Z"
                  fill="#8AB95E"
                />
              </g>
              <g className="eye" id="eye-left">
                <g id="eye-left1">
                  <path
                    id="Vector_4"
                    d="M31.7123 51.1686C35.931 51.1686 39.3509 47.5607 39.3509 43.1101C39.3509 38.6596 35.931 35.0517 31.7123 35.0517C27.4937 35.0517 24.0738 38.6596 24.0738 43.1101C24.0738 47.5607 27.4937 51.1686 31.7123 51.1686Z"
                    fill="#605B83"
                  />
                  <path
                    id="Vector_5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.7123 35.0517C35.9281 35.0517 39.3509 38.6626 39.3509 43.1101C39.3509 47.5576 35.9281 51.1686 31.7123 51.1686C27.4966 51.1686 24.0738 47.5576 24.0738 43.1101C24.0738 38.6626 27.4966 35.0517 31.7123 35.0517ZM31.7123 35.4219C35.7295 35.4219 38.9804 38.8722 38.9804 43.1101C38.9804 47.3481 35.7295 50.7984 31.7123 50.7984C27.6952 50.7984 24.4442 47.3481 24.4442 43.1101C24.4442 38.8722 27.6952 35.4219 31.7123 35.4219Z"
                    fill="black"
                  />
                </g>
                <g className="stitches" id="stitches">
                  <g id="holes">
                    <g id="Group">
                      <path
                        id="Vector_6"
                        d="M29.1612 45.3789C29.6647 45.4102 30.0996 45.0051 30.1327 44.474C30.1657 43.9429 29.7843 43.487 29.2808 43.4557C28.7773 43.4244 28.3424 43.8296 28.3094 44.3606C28.2763 44.8917 28.6577 45.3476 29.1612 45.3789Z"
                        fill="black"
                      />
                    </g>
                    <g id="Group_2">
                      <path
                        id="Vector_7"
                        d="M32.8554 46.5736C33.3589 46.605 33.7938 46.1998 33.8268 45.6688C33.8598 45.1377 33.4784 44.6818 32.9749 44.6505C32.4715 44.6192 32.0365 45.0243 32.0035 45.5554C31.9705 46.0865 32.3519 46.5423 32.8554 46.5736Z"
                        fill="black"
                      />
                    </g>
                    <g id="Group_3">
                      <path
                        id="Vector_8"
                        d="M30.3224 41.4192C30.8259 41.4505 31.2608 41.0454 31.2939 40.5143C31.3269 39.9833 30.9455 39.5274 30.442 39.4961C29.9385 39.4648 29.5036 39.8699 29.4706 40.401C29.4375 40.932 29.8189 41.3879 30.3224 41.4192Z"
                        fill="black"
                      />
                    </g>
                    <g id="Group_4">
                      <path
                        id="Vector_9"
                        d="M34.2515 42.6292C34.755 42.6606 35.19 42.2554 35.223 41.7244C35.256 41.1933 34.8746 40.7374 34.3711 40.7061C33.8676 40.6748 33.4327 41.0799 33.3997 41.611C33.3667 42.1421 33.7481 42.5979 34.2515 42.6292Z"
                        fill="black"
                      />
                    </g>
                  </g>
                  <g id="Group_5">
                    <path
                      id="Vector_10"
                      d="M31.3351 42.3417C29.7207 43.2339 28.5813 44.3009 28.7901 44.725C28.999 45.1492 30.4769 44.7698 32.0913 43.8776C33.7057 42.9855 34.8451 41.9184 34.6362 41.4943C34.4274 41.0702 32.9494 41.4496 31.3351 42.3417Z"
                      fill="#6E1A1A"
                      stroke="black"
                      strokeWidth="0.00357523"
                      strokeMiterlimit="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g id="Group_6">
                    <path
                      id="Vector_11"
                      d="M30.9855 43.5183C31.8303 45.2096 32.8413 46.3978 33.2436 46.1723C33.646 45.9468 33.2873 44.3929 32.4424 42.7016C31.5976 41.0104 30.5866 39.8221 30.1843 40.0476C29.782 40.2731 30.1407 41.827 30.9855 43.5183Z"
                      fill="#6E1A1A"
                      stroke="black"
                      strokeWidth="0.00318871"
                      strokeMiterlimit="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
              <g className="eye" id="eye-right">
                <g id="eye-right1">
                  <path
                    id="Vector_12"
                    d="M61.8912 54.4851C66.1098 54.4851 69.5297 50.8772 69.5297 46.4266C69.5297 41.9761 66.1098 38.3682 61.8912 38.3682C57.6725 38.3682 54.2526 41.9761 54.2526 46.4266C54.2526 50.8772 57.6725 54.4851 61.8912 54.4851Z"
                    fill="#392E5E"
                  />
                  <path
                    id="Vector_13"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.8912 38.3682C66.1069 38.3682 69.5297 41.9791 69.5297 46.4266C69.5297 50.8741 66.1069 54.4851 61.8912 54.4851C57.6754 54.4851 54.2526 50.8741 54.2526 46.4266C54.2526 41.9791 57.6754 38.3682 61.8912 38.3682ZM61.8912 39.096C65.7163 39.096 68.802 42.3912 68.802 46.4266C68.802 50.462 65.7163 53.7573 61.8912 53.7573C58.066 53.7573 54.9803 50.462 54.9803 46.4266C54.9803 42.3912 58.066 39.096 61.8912 39.096Z"
                    fill="black"
                  />
                </g>
                <g className="stitches" id="stitches1">
                  <g id="holes1">
                    <g id="Group_7">
                      <path
                        id="Vector_14"
                        d="M60.6734 49.7062C61.1337 49.4998 61.3303 48.9389 61.1125 48.4533C60.8948 47.9677 60.3451 47.7414 59.8849 47.9478C59.4246 48.1542 59.228 48.7152 59.4458 49.2007C59.6635 49.6863 60.2131 49.9126 60.6734 49.7062Z"
                        fill="black"
                      />
                    </g>
                    <g id="Group_8">
                      <path
                        id="Vector_15"
                        d="M64.4988 49.047C64.959 48.8406 65.1556 48.2797 64.9379 47.7941C64.7202 47.3086 64.1705 47.0822 63.7103 47.2886C63.25 47.495 63.0534 48.056 63.2711 48.5415C63.4889 49.0271 64.0385 49.2534 64.4988 49.047Z"
                        fill="black"
                      />
                    </g>
                    <g id="Group_9">
                      <path
                        id="Vector_16"
                        d="M59.8601 45.6611C60.3204 45.4547 60.517 44.8938 60.2992 44.4082C60.0815 43.9226 59.5319 43.6963 59.0716 43.9027C58.6113 44.1091 58.4147 44.6701 58.6325 45.1556C58.8502 45.6412 59.3998 45.8675 59.8601 45.6611Z"
                        fill="black"
                      />
                    </g>
                    <g id="Group_10">
                      <path
                        id="Vector_17"
                        d="M63.9006 44.9058C64.3609 44.6994 64.5575 44.1384 64.3397 43.6529C64.122 43.1673 63.5724 42.941 63.1121 43.1474C62.6519 43.3538 62.4552 43.9147 62.673 44.4003C62.8907 44.8859 63.4404 45.1122 63.9006 44.9058Z"
                        fill="black"
                      />
                    </g>
                  </g>
                  <g id="Group_11">
                    <path
                      id="Vector_18"
                      d="M61.4368 47.1274C62.9711 48.2318 64.4187 48.8136 64.67 48.4269C64.9213 48.0401 63.8813 46.8313 62.3469 45.7269C60.8126 44.6224 59.365 44.0406 59.1137 44.4274C58.8624 44.8141 59.9024 46.023 61.4368 47.1274Z"
                      fill="#8D4B34"
                      stroke="black"
                      strokeWidth="0.00318871"
                      strokeMiterlimit="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g id="Group_12">
                    <path
                      id="Vector_19"
                      d="M61.2007 45.9226C60.1864 47.4631 59.6739 48.9376 60.056 49.216C60.4381 49.4944 61.5701 48.4712 62.5845 46.9307C63.5988 45.3902 64.1113 43.9157 63.7292 43.6373C63.3471 43.359 62.2151 44.3821 61.2007 45.9226Z"
                      fill="#8D4B34"
                      stroke="black"
                      strokeWidth="0.00357523"
                      strokeMiterlimit="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h2 className="logo-head" id="purr-head">
          The Inner Purr
        </h2>
      </ProjectHead>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Hide>
        <Container>
          <Row>
            <Col md={6}>
              <motion.img
                variants={photoAnim}
                src={purr_res}
                alt="The Inner Purr"
              />
            </Col>
            <Col md={6}>
              <ProjectRight variants={fade}>
                <div className="top">
                  <p>
                    The Inner Purr is an e-commerce site for a charity that
                    rescues stray cats around Dublin.
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
                        <i className="devicon-django-plain"></i>
                      </li>
                      <li>
                        <i className="devicon-amazonwebservices-original"></i>
                      </li>
                    </ul>
                  </Icons>
                  <Links variants={fade}>
                    <a
                      rel="noopner"
                      target="blank"
                      href="https://inner-purr.herokuapp.com/"
                    >
                      Live Site
                    </a>
                    <a
                      rel="noopner"
                      target="blank"
                      href="https://github.com/Sean-Mc-Mahon/inner-purr"
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
    </PurrProject>
  );
};

const PurrProject = styled(Project)`
  .purr-head {
    font-size: calc(1.3rem + 2vw);
    color: #447924;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 0;
      font-family: "Architects Daughter", cursive;
    }
    .logo {
      display: flex;
      align-items: center;
    }
  }
`;

export default Purr;
