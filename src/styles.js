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
    background: #ffc107;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
    color: black;
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
export const Links = styled.div`
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    width: 3px;
    height: 15px;
    background: #1b1b1b;
    @media (min-width: 992px) {
      width: 5px;
      height: 25px;
    }
  }
  a {
    text-decoration: none;
    color: #1b1b1b;
    padding: 1rem;
    :hover {
      font-size: 1.5rem;
    }
    @media (min-width: 992px) {
      font-size: 1.5rem;
    }
  }
`;
