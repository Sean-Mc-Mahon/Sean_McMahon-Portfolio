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
import virtual_res from "../img/virtual/virtual_res.webp";

const Virtual = () => {
  const [element, controls] = useScroll();
  return (
    <VirtualProject
      className="virtual-ireland"
      transition={{ duration: 0.5 }}
      ref={element}
      variants={projectContainer}
      animate={controls}
      initial="hidden"
    >
      <ProjectHead variants={fade} className="virtual-head">
        <svg
          id="vi-heading"
          viewBox="0 0 424 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5559 1.096C28.9719 1.096 29.3239 1.24 29.6119 1.528C29.8999 1.784 30.0439 2.088 30.0439 2.44C30.0439 2.664 29.9959 2.904 29.8999 3.16L17.0839 33.784C16.9559 34.072 16.7639 34.312 16.5079 34.504C16.2519 34.664 15.9799 34.744 15.6919 34.744C15.4039 34.744 15.1319 34.664 14.8759 34.504C14.6519 34.344 14.4759 34.12 14.3479 33.832L1.57993 3.256C1.48393 3.064 1.43593 2.808 1.43593 2.488C1.43593 2.072 1.57993 1.736 1.86793 1.48C2.15593 1.224 2.47593 1.096 2.82793 1.096C3.49993 1.096 3.97993 1.448 4.26793 2.152L15.8359 29.8L27.2119 2.056C27.3719 1.768 27.5639 1.544 27.7879 1.384C28.0439 1.192 28.2999 1.096 28.5559 1.096Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M40.6538 33.256C40.6218 33.672 40.4618 34.024 40.1738 34.312C39.8858 34.6 39.5338 34.744 39.1178 34.744C38.6698 34.744 38.3018 34.616 38.0138 34.36C37.7578 34.072 37.6298 33.704 37.6298 33.256V2.632C37.6298 2.184 37.7738 1.832 38.0618 1.576C38.3498 1.288 38.7178 1.144 39.1658 1.144C39.5818 1.144 39.9338 1.288 40.2218 1.576C40.5098 1.864 40.6538 2.216 40.6538 2.632V33.256Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M75.5978 32.152C76.0778 32.472 76.3178 32.872 76.3178 33.352C76.3178 33.512 76.2538 33.72 76.1258 33.976C75.9978 34.2 75.8218 34.376 75.5978 34.504C75.3738 34.632 75.1338 34.696 74.8778 34.696C74.5578 34.696 74.2858 34.632 74.0618 34.504C73.1658 33.992 72.4458 33.16 71.9018 32.008C71.3578 30.856 71.0858 29.016 71.0858 26.488C71.0858 24.248 70.4618 22.68 69.2138 21.784C67.9658 20.856 66.4778 20.392 64.7498 20.392H54.0938V33.304C54.0938 33.72 53.9658 34.072 53.7098 34.36C53.4538 34.616 53.1178 34.744 52.7018 34.744C52.2538 34.744 51.8698 34.616 51.5498 34.36C51.2298 34.072 51.0698 33.72 51.0698 33.304V2.584C51.0698 2.168 51.1978 1.832 51.4538 1.576C51.7418 1.288 52.0938 1.144 52.5098 1.144H65.4698C67.2938 1.144 68.9258 1.544 70.3658 2.344C71.8058 3.112 72.9258 4.184 73.7258 5.56C74.5578 6.936 74.9738 8.488 74.9738 10.216C74.9738 12.264 74.4298 14.072 73.3418 15.64C72.2858 17.176 70.8938 18.232 69.1658 18.808C70.5738 19.352 71.7258 20.28 72.6218 21.592C73.5178 22.872 73.9818 24.44 74.0138 26.296C74.0458 28.28 74.1738 29.672 74.3978 30.472C74.6538 31.272 75.0538 31.832 75.5978 32.152ZM65.6138 17.752C66.7338 17.656 67.7738 17.288 68.7338 16.648C69.6938 16.008 70.4618 15.144 71.0378 14.056C71.6138 12.968 71.9018 11.72 71.9018 10.312C71.9018 8.488 71.2778 6.984 70.0298 5.8C68.8138 4.584 67.2138 3.976 65.2298 3.976H54.0938V17.752H65.6138Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M105.371 1.144C105.787 1.144 106.123 1.272 106.379 1.528C106.667 1.784 106.811 2.12 106.811 2.536C106.811 2.952 106.667 3.288 106.379 3.544C106.123 3.768 105.787 3.88 105.371 3.88H95.4349V33.304C95.4349 33.72 95.2909 34.072 95.0029 34.36C94.7149 34.616 94.3629 34.744 93.9469 34.744C93.4989 34.744 93.1309 34.616 92.8429 34.36C92.5869 34.072 92.4589 33.72 92.4589 33.304V3.88H82.5229C82.1069 3.88 81.7549 3.752 81.4669 3.496C81.2109 3.24 81.0829 2.904 81.0829 2.488C81.0829 2.104 81.2109 1.784 81.4669 1.528C81.7549 1.272 82.1069 1.144 82.5229 1.144H105.371Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M138.132 1.144C138.548 1.144 138.884 1.288 139.14 1.576C139.428 1.832 139.572 2.168 139.572 2.584V22.456C139.572 24.792 139.012 26.936 137.892 28.888C136.772 30.84 135.252 32.376 133.332 33.496C131.412 34.616 129.3 35.176 126.996 35.176C124.66 35.176 122.532 34.616 120.612 33.496C118.692 32.376 117.172 30.84 116.052 28.888C114.932 26.936 114.372 24.792 114.372 22.456V2.584C114.372 2.168 114.5 1.832 114.756 1.576C115.044 1.288 115.428 1.144 115.908 1.144C116.292 1.144 116.628 1.288 116.916 1.576C117.204 1.832 117.348 2.168 117.348 2.584V22.456C117.348 24.248 117.78 25.896 118.644 27.4C119.508 28.904 120.676 30.104 122.148 31C123.652 31.864 125.268 32.296 126.996 32.296C128.756 32.296 130.372 31.864 131.844 31C133.348 30.104 134.532 28.904 135.396 27.4C136.292 25.896 136.74 24.248 136.74 22.456V2.584C136.74 2.168 136.868 1.832 137.124 1.576C137.38 1.288 137.716 1.144 138.132 1.144Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M174.618 32.824C174.682 33.08 174.714 33.272 174.714 33.4C174.714 33.816 174.57 34.152 174.282 34.408C173.994 34.664 173.658 34.792 173.274 34.792C172.954 34.792 172.666 34.712 172.41 34.552C172.186 34.36 172.01 34.12 171.882 33.832L168.282 25.048H152.682L149.13 33.832C148.874 34.472 148.442 34.792 147.834 34.792C147.386 34.792 147.05 34.68 146.826 34.456C146.602 34.232 146.474 33.928 146.442 33.544V33.4C146.442 33.208 146.458 33.064 146.49 32.968L159.162 1.96C159.418 1.32 159.898 1 160.602 1C160.922 1 161.194 1.096 161.418 1.288C161.674 1.448 161.866 1.672 161.994 1.96L174.618 32.824ZM167.13 22.216L160.41 5.8L153.786 22.216H167.13Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M200.656 31.912C201.072 31.912 201.408 32.04 201.664 32.296C201.952 32.552 202.096 32.888 202.096 33.304C202.096 33.72 201.952 34.072 201.664 34.36C201.408 34.616 201.072 34.744 200.656 34.744H183.52C183.104 34.744 182.752 34.616 182.464 34.36C182.208 34.072 182.08 33.72 182.08 33.304V2.584C182.08 2.168 182.224 1.832 182.512 1.576C182.8 1.288 183.168 1.144 183.616 1.144C184.032 1.144 184.384 1.288 184.672 1.576C184.96 1.832 185.104 2.168 185.104 2.584V31.912H200.656Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M226.656 33.256C226.624 33.672 226.464 34.024 226.176 34.312C225.888 34.6 225.536 34.744 225.12 34.744C224.672 34.744 224.304 34.616 224.016 34.36C223.76 34.072 223.632 33.704 223.632 33.256V2.632C223.632 2.184 223.776 1.832 224.064 1.576C224.352 1.288 224.72 1.144 225.168 1.144C225.584 1.144 225.936 1.288 226.224 1.576C226.512 1.864 226.656 2.216 226.656 2.632V33.256Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M261.6 32.152C262.08 32.472 262.32 32.872 262.32 33.352C262.32 33.512 262.256 33.72 262.128 33.976C262 34.2 261.824 34.376 261.6 34.504C261.376 34.632 261.136 34.696 260.88 34.696C260.56 34.696 260.288 34.632 260.064 34.504C259.168 33.992 258.448 33.16 257.904 32.008C257.36 30.856 257.088 29.016 257.088 26.488C257.088 24.248 256.464 22.68 255.216 21.784C253.968 20.856 252.48 20.392 250.752 20.392H240.096V33.304C240.096 33.72 239.968 34.072 239.712 34.36C239.456 34.616 239.12 34.744 238.704 34.744C238.256 34.744 237.872 34.616 237.552 34.36C237.232 34.072 237.072 33.72 237.072 33.304V2.584C237.072 2.168 237.2 1.832 237.456 1.576C237.744 1.288 238.096 1.144 238.512 1.144H251.472C253.296 1.144 254.928 1.544 256.368 2.344C257.808 3.112 258.928 4.184 259.728 5.56C260.56 6.936 260.976 8.488 260.976 10.216C260.976 12.264 260.432 14.072 259.344 15.64C258.288 17.176 256.896 18.232 255.168 18.808C256.576 19.352 257.728 20.28 258.624 21.592C259.52 22.872 259.984 24.44 260.016 26.296C260.048 28.28 260.176 29.672 260.4 30.472C260.656 31.272 261.056 31.832 261.6 32.152ZM251.616 17.752C252.736 17.656 253.776 17.288 254.736 16.648C255.696 16.008 256.464 15.144 257.04 14.056C257.616 12.968 257.904 11.72 257.904 10.312C257.904 8.488 257.28 6.984 256.032 5.8C254.816 4.584 253.216 3.976 251.232 3.976H240.096V17.752H251.616Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M289.724 31.912C290.14 31.912 290.476 32.056 290.732 32.344C291.02 32.632 291.164 32.968 291.164 33.352C291.164 33.768 291.02 34.104 290.732 34.36C290.476 34.616 290.14 34.744 289.724 34.744H272.108C271.692 34.744 271.34 34.616 271.052 34.36C270.796 34.072 270.668 33.72 270.668 33.304V2.584C270.668 2.168 270.796 1.832 271.052 1.576C271.34 1.288 271.692 1.144 272.108 1.144H289.724C290.14 1.144 290.476 1.288 290.732 1.576C291.02 1.832 291.164 2.168 291.164 2.584C291.164 3 291.02 3.336 290.732 3.592C290.476 3.848 290.14 3.976 289.724 3.976H273.692V16.024H287.564C287.98 16.024 288.316 16.168 288.572 16.456C288.86 16.712 289.004 17.048 289.004 17.464C289.004 17.88 288.86 18.216 288.572 18.472C288.316 18.728 287.98 18.856 287.564 18.856H273.692V31.912H289.724Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M317.965 31.912C318.381 31.912 318.717 32.04 318.973 32.296C319.261 32.552 319.405 32.888 319.405 33.304C319.405 33.72 319.261 34.072 318.973 34.36C318.717 34.616 318.381 34.744 317.965 34.744H300.829C300.413 34.744 300.061 34.616 299.773 34.36C299.517 34.072 299.389 33.72 299.389 33.304V2.584C299.389 2.168 299.533 1.832 299.821 1.576C300.109 1.288 300.477 1.144 300.925 1.144C301.341 1.144 301.693 1.288 301.981 1.576C302.269 1.832 302.413 2.168 302.413 2.584V31.912H317.965Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M351.432 32.824C351.496 33.08 351.528 33.272 351.528 33.4C351.528 33.816 351.384 34.152 351.096 34.408C350.808 34.664 350.472 34.792 350.088 34.792C349.768 34.792 349.48 34.712 349.224 34.552C349 34.36 348.824 34.12 348.696 33.832L345.096 25.048H329.496L325.944 33.832C325.688 34.472 325.256 34.792 324.648 34.792C324.2 34.792 323.864 34.68 323.64 34.456C323.416 34.232 323.288 33.928 323.256 33.544V33.4C323.256 33.208 323.272 33.064 323.304 32.968L335.976 1.96C336.232 1.32 336.712 1 337.416 1C337.736 1 338.008 1.096 338.232 1.288C338.488 1.448 338.68 1.672 338.808 1.96L351.432 32.824ZM343.944 22.216L337.224 5.8L330.6 22.216H343.944Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M383.47 1.144C383.886 1.144 384.206 1.272 384.43 1.528C384.686 1.784 384.814 2.104 384.814 2.488V33.208C384.814 33.688 384.67 34.072 384.382 34.36C384.094 34.616 383.742 34.744 383.326 34.744C383.102 34.744 382.878 34.696 382.654 34.6C382.462 34.504 382.302 34.392 382.174 34.264L361.582 6.52V33.448C361.582 33.8 361.438 34.104 361.15 34.36C360.894 34.616 360.59 34.744 360.238 34.744C359.854 34.744 359.534 34.616 359.278 34.36C359.022 34.104 358.894 33.8 358.894 33.448V2.584C358.894 2.136 359.022 1.784 359.278 1.528C359.566 1.272 359.902 1.144 360.286 1.144C360.798 1.144 361.182 1.32 361.438 1.672L382.126 29.56V2.488C382.126 2.104 382.254 1.784 382.51 1.528C382.766 1.272 383.086 1.144 383.47 1.144Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M408.936 1.144C412.008 1.144 414.584 1.912 416.664 3.448C418.776 4.952 420.344 6.984 421.368 9.544C422.424 12.072 422.952 14.872 422.952 17.944C422.952 21.112 422.424 23.96 421.368 26.488C420.344 29.016 418.776 31.032 416.664 32.536C414.584 34.008 412.008 34.744 408.936 34.744H396.696C396.28 34.744 395.928 34.616 395.64 34.36C395.384 34.072 395.256 33.72 395.256 33.304V2.584C395.256 2.168 395.384 1.832 395.64 1.576C395.928 1.288 396.28 1.144 396.696 1.144H408.936ZM408.456 31.912C412.296 31.912 415.16 30.632 417.048 28.072C418.936 25.48 419.88 22.104 419.88 17.944C419.88 15.352 419.48 13.016 418.68 10.936C417.88 8.824 416.616 7.144 414.888 5.896C413.192 4.616 411.048 3.976 408.456 3.976H398.28V31.912H408.456Z"
            stroke="#047B17"
            stroke-width="1"
            mask="url(#path-1-outside-1)"
          />
        </svg>
      </ProjectHead>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Hide>
        <Container>
          <Row>
            <Col md={6}>
              <motion.img
                variants={photoAnim}
                src={virtual_res}
                alt="Virtual Ireland"
              />
            </Col>
            <Col md={6}>
              <ProjectRight variants={fade}>
                <div className="top">
                  <p>
                    VI is a virtual tour of Ireland showcasing some of Ireland’s
                    most beautiful sites.
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
                      href="https://sean-mc-mahon.github.io/ms1virtualireland/index.html"
                    >
                      Live Site
                    </a>
                    <a
                      rel="noopner"
                      target="blank"
                      href="https://github.com/Sean-Mc-Mahon/ms1virtualireland"
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
    </VirtualProject>
  );
};

const VirtualProject = styled(Project)`
  #vi-heading path:nth-child(1) {
    stroke-dasharray: 450px;
    stroke-dashoffset: 450px;
    animation: line-anim 6s ease forwards 2s;
  }

  #vi-heading path:nth-child(2) {
    stroke-dasharray: 450px;
    stroke-dashoffset: 450px;
    animation: line-anim 6s ease forwards 2.3s;
  }

  #vi-heading path:nth-child(3) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 2.3s;
  }

  #vi-heading path:nth-child(4) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 2.6s;
  }

  #vi-heading path:nth-child(5) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 2.9s;
  }

  #vi-heading path:nth-child(6) {
    stroke-dasharray: 750px;
    stroke-dashoffset: 750px;
    animation: line-anim 6s ease forwards 3.2s;
  }

  #vi-heading path:nth-child(7) {
    stroke-dasharray: 650px;
    stroke-dashoffset: 650px;
    animation: line-anim 6s ease forwards 3.5s;
  }

  #vi-heading path:nth-child(8) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 2s;
  }

  #vi-heading path:nth-child(9) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 2s;
  }

  #vi-heading path:nth-child(10) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 2.3s;
  }

  #vi-heading path:nth-child(11) {
    stroke-dasharray: 550px;
    stroke-dashoffset: 550px;
    animation: line-anim 6s ease forwards 2.6s;
  }

  #vi-heading path:nth-child(12) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 3.2s;
  }

  #vi-heading path:nth-child(13) {
    stroke-dasharray: 500px;
    stroke-dashoffset: 500px;
    animation: line-anim 6s ease forwards 3s;
  }

  #vi-heading path:nth-child(14) {
    stroke-dasharray: 615px;
    stroke-dashoffset: 615px;
    animation: line-anim 6s ease forwards 3.8s;
  }

  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default Virtual;
