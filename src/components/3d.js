import React from "react";
import Library from "../3d/library.gltf";
//styles
import { Design, DesignLinks } from "../styles";

const Model3d = () => {
  return (
    <Design className="3dModel">
      <DesignLinks>
        <a
          rel="noopener"
          target="_blank"
          href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/3d.html"
        >
          <h3 className="design-title">3d Modelling</h3>
        </a>
      </DesignLinks>
      <model-viewer
        class="color"
        id="library-model"
        src={Library}
        alt="library"
        auto-rotate
        ios-scr="./3d/library.gltf"
      ></model-viewer>
    </Design>
  );
};

export default Model3d;
