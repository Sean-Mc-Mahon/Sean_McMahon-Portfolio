import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const HomeDescription = styled.div`
  padding: 0 2.5rem;
  h2 {
    font-weight: lighter;
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
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
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
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
export const DescriptionStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
    color: white;
  }
  .line {
    width: 100%;
    background: #23d997;
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
export const Links = styled.div`
  font-weight: bolder;
  display: flex;
  justify-content: center;
  hr {
    width: 5px;
    background: white;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 0 1rem;
  }
`;
