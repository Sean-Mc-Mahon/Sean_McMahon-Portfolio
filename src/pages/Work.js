import React from "react";
//Styled
import styled from "styled-components/macro";
//React Router Links
import { Link } from "react-router-dom";
//Images
import virtual from "../img/virtual_ireland.gif";
import seanmc from "../img/seanmc.gif";
import mctastic from "../img/mctastic.gif";
import purr from "../img/purr.gif";

const Work = () => {
  return (
    <MyWork>
      <Project>
        <h2>Virtual Ireland</h2>
        <div className="line"></div>
        <Link to="/virtual">
          <img src={virtual} alt="Virtual Ireland" />
        </Link>
      </Project>
      <Project>
        <h2>Sean Mc Designs</h2>
        <div className="line"></div>
        <Link to="/work/seanmc">
          <img src={seanmc} alt="Sean Mc Designs" />
        </Link>
      </Project>
      <Project>
        <h2>McTastic Recipes</h2>
        <div className="line"></div>
        <Link to="/work/mctastic">
          <img src={mctastic} alt="McTastic Recipes" />
        </Link>
      </Project>
      <Project>
        <h2>Inner Purr</h2>
        <div className="line"></div>
        <Link to="/work/purr">
          <img src={purr} alt="Inner Purr" />
        </Link>
      </Project>
    </MyWork>
  );
};

const MyWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 70%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Work;
