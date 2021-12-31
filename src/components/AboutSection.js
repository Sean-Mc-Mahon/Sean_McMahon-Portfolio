import React from "react";
import profile from "../img/profile.jpg";
//Styled
import styled from "styled-components/macro";
import { About, HomeDescription, Image, Hide } from "../styles";

const aboutSection = () => {
  return (
    <About>
      <HomeDescription>
        <div className="title">
          <Hide>
            <h2>let me make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dream</span> website
            </h2>
          </Hide>
        </div>
        <p>Contact me for any projects you have in mind.</p>
        <button>Contact</button>
      </HomeDescription>
      <Image>
        <img src={profile} alt="profile pic" />
      </Image>
    </About>
  );
};

export default aboutSection;
