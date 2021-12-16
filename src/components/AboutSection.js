import React from "react";
import profile from "../img/profile.jpg";
import styled from "styled-components";

const aboutSection = () => {
  return (
    <About>
      <Description>
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
      </Description>
      <Image>
        <img src={profile} alt="profile pic" />
      </Image>
    </About>
  );
};

//styled component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default aboutSection;
