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
  padding-bottom: 5rem;
  p {
    color: #282828;
  }
  .line {
    height: 0.5rem;
    background: var(--yellow);
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  h2 {
    padding-left: 1rem;
  }
  @media (min-width: 992px) {
    h2 {
      padding: 0;
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
export const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
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
    }
  }
  @media (min-width: 768px) {
    justify-content: start;
  }
`;
