import React from "react";
//Styled
import styled from "styled-components/macro";
import { About, AboutIcons } from "../styles";
//animation
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
//Scroll
import { useScrollForward } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScrollForward();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <span className="anchor" id="about"></span>
      <h2>
        <span>About Me</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Who am I?">
          <div className="answer">
            <p>
              I’m a front end developer with a background in design and project
              management in many forms as well as an interest in Digital
              Marketing. Prior to attaining my diploma in Software Development I
              trained as an architect developing creative skills as well as
              discipline, attention to detail and a strong focus on the needs of
              an end user.
            </p>
            <p>
              Outside of web development I take part in volunteering including
              clean up projects and I regulary foster cats. In my spare time I
              attend acting classes and like to surf, play tennis, football and
              cook and bake at any opportunity.
            </p>
          </div>
        </Toggle>
        <Toggle title="What do I offer?">
          <div className="answer">
            <p>
              I offer custom, beautiful crips UI/UX design with a focus on
              accessibility. I also offer custom imagery/animation.
            </p>
          </div>
        </Toggle>
        <Toggle title="How do I do it?">
          <div className="answer">
            <p>I work with the following languages/frameworks/resources...</p>
            <AboutIcons>
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
                  <i className="devicon-amazonwebservices-original"></i>
                </li>
                <li>
                  <i className="devicon-django-plain"></i>
                </li>
                <li>
                  <i className="devicon-flask-original"></i>
                </li>
                <li>
                  <i className="devicon-react-original"></i>
                </li>
                <li>
                  <i className="devicon-heroku-original"></i>
                </li>
                <li>
                  <i className="devicon-python-plain"></i>
                </li>
                <li>
                  <i className="devicon-jquery-plain"></i>
                </li>
                <li>
                  <i className="devicon-slack-plain"></i>
                </li>
                <li>
                  <i className="devicon-codepen-plain"></i>
                </li>
                <li>
                  <i className="devicon-sass-original"></i>
                </li>
              </ul>
            </AboutIcons>
            <p>as well as the following dsign resources...</p>
            <AboutIcons>
              <ul>
                <li>
                  <i className="devicon-figma-plain"></i>
                </li>
                <li>
                  <i className="devicon-photoshop-plain"></i>
                </li>
                <li>
                  <img
                    src="https://cdn.serif.com/affinity/img/global/logos/affinity-logo-190920160826.svg"
                    alt="affinity"
                    height={48}
                  />
                </li>
              </ul>
            </AboutIcons>
          </div>
        </Toggle>
        <Toggle title="when can I do it?">
          <div className="answer">
            <p>
              Just get in
              <AboutLink href="#foot"> Contact </AboutLink>
              and we can figure it out.
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
    top: -120px;
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

const AboutLink = styled.a`
  font-size: 1.4rem;
  color: var(--yellow);
  :hover {
    color: var(--yellow);
    text-shadow: 0px 0px 3px var(--yellow);
  }
`;

export default FaqSection;
