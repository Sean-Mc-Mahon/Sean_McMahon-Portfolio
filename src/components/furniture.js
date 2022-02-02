import React from "react";
import styled from "styled-components/macro";
import FurniturePic from "../img/design/furniture.webp";

const Furniture = () => {
  return (
    <FurnitureDiv className="furniture">
      <a
        rel="noopener"
        target="_blank"
        href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/furniture.html"
      >
        <h2 className="design-title">Furniture</h2>
      </a>
      <img id="furniture-image" src={FurniturePic} alt="Furniture" />
    </FurnitureDiv>
  );
};

const FurnitureDiv = styled.div`
  display: flex;
  position: relative;
  .design-title {
    position: absolute;
    font-weight: bold;
    font-size: calc(1rem + 2vw);
    top: 65%;
    right: 50%;
    transform: translate(50%, 50%);
    color: white;
    /* color: var(--yellow); */
    text-shadow: 1px 1px 5px #1b1b1b;
    z-index: 20;
    @media (min-width: 1500px) {
      font-size: 50px;
    }
  }
  #furniture-image {
    width: 330px;
    height: 330px;
    margin: 0 auto;
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
  }
`;

export default Furniture;
