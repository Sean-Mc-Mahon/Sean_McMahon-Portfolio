import React from "react";
import styled from "styled-components/macro";
import Library from "../3d/library.gltf";

const Model3d = () => {
  return (
    <Libby className="3dModel">
      <a
        rel="noopener"
        target="_blank"
        href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/3d.html"
      >
        <h2 className="design-title">3d Modelling</h2>
      </a>
      <model-viewer
        class="color"
        id="library-model"
        src={Library}
        alt="library"
        auto-rotate
        ios-scr="./3d/library.gltf"
      ></model-viewer>
    </Libby>
  );
};

const Libby = styled.div`
  position: relative;
  .design-title {
    position: absolute;
    font-weight: bold;
    font-size: calc(1rem + 2vw);
    top: 60%;
    right: 50%;
    transform: translate(50%, 50%);
    color: white;
    text-shadow: 1px 1px 10px #1b1b1b;
    z-index: 20;
    @media (min-width: 1500px) {
      font-size: 50px;
    }
  }
  #library-model {
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

export default Model3d;
