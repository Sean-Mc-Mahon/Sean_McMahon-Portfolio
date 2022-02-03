import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: white;
  @media (min-width: 1200px) {
    padding: 5rem 10rem;
  }
  .container {
    .row {
      display: flex;
      align-items: center;
      .col-lg-5,
      .col-md-12 {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
export const HomeDescription = styled.div`
  h2 {
    font-weight: lighter;
  }
  text-align: center;
  padding-top: 2rem;

  @media (min-width: 992px) {
    padding: 0 2.5rem;
    text-align: start;
  }
  @media (min-width: 1200px) {
    padding: 0 2.5rem;
  }
`;
export const Image = styled.div`
  overflow: hidden;
  padding: 0 2.5rem;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
export const HeroImage = styled.div`
  overflow: hidden;
  padding: 0 2.5rem;
  min-width: 300px;
  max-width: 550px;
  margin: auto;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
  }
  @media (min-width: 992px) {
    min-width: 490px;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

//Project Pages
export const Project = styled(motion.div)`
  padding-bottom: 1rem;
  p {
    color: #282828;
  }
  .line {
    height: 0.5rem;
    background: var(--yellow);
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  h2 {
    padding-left: 1rem;
  }
  @media (min-width: 768px) {
    .container {
      padding: 0 2rem;
    }
  }
  @media (min-width: 992px) {
    .container {
      padding: 0 5rem;
    }
    h2 {
      padding: 0;
    }
  }
`;

export const ProjectHead = styled(motion.div)`
  padding: 0.5rem;
  max-width: 600px;
  margin: auto;
  @media (min-width: 992px) {
    padding: 2rem 3rem;
  }
  @media (min-width: 1200px) {
    max-width: 700px;
  }
`;

export const Icons = styled(motion.div)`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    position: relative;
    padding-right: 0.75rem;
    font-size: 1.5rem;
    color: #282828;
  }
`;

export const ProjectRight = styled(motion.div)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  .top {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
  }
`;

//Virtual Ireland
export const Virtual = styled(Project)`
  .virtual-head {
    padding: 1rem;
    max-width: 600px;
    margin: auto;
    @media (min-width: 992px) {
      padding: 2rem 5rem;
    }
    @media (min-width: 992px) {
      max-width: 700px;
      padding: 3rem 5rem;
    }

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
  }
`;

export const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 90%;
  }
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const DescriptionStyle = styled.div`
  h3 {
    font-size: 2rem;
    color: white;
  }
  .line {
    width: 100%;
    background: var(--yellow);
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
export const Links = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  a {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #282828;
    background: transparent;
    color: #282828;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      background-color: #282828;
      color: var(--yellow);
      -webkit-filter: drop-shadow(0px 0px 5px #282828);
      filter: drop-shadow(0px 0px 5px #282828);
      text-shadow: 0px 0px 3px var(--yellow);
    }
  }
  @media (min-width: 768px) {
    justify-content: start;
  }
`;
export const Design = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 330px;
  margin: 0 auto;
  overflow: hidden;
  border: 4px solid var(--yellow);
  border-radius: 50%;
  background: #1b1b1b;
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 992px) {
    width: 450px;
    height: 450px;
  }
  .design-title-container {
  }
  .design-title {
    font-weight: bold;
    text-decoration: none !important;
    font-size: calc(0.8rem + 1vw);
    z-index: 20;
  }
  img {
    width: 330px;
    height: 330px;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 400px;
      height: 400px;
    }
    @media (min-width: 992px) {
      width: 450px;
      height: 450px;
    }
  }
  model-viewer {
    width: 330px;
    height: 330px;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 400px;
      height: 400px;
    }
    @media (min-width: 992px) {
      width: 450px;
      height: 450px;
    }
  }
`;

export const DesignLinks = styled(motion.div)`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;

  a {
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 3px solid var(--yellow);
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    text-shadow: 1px 1px 5px #1b1b1b;
    transition: all 0.5s ease;
    text-decoration: none;
    h3 {
      margin: 0;
    }
    &:hover {
      background-color: var(--yellow);
      color: #282828;
      -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
      filter: drop-shadow(0px 0px 5px var(--yellow));
      text-shadow: 0px 0px 3px var(--yellow);
    }
  }
`;
