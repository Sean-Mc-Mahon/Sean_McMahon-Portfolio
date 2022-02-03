import React from "react";
import LibraryRender from "../img/design/render.webp";
//styles
import { Design, DesignLinks } from "../styles";

const Renders = () => {
  return (
    <Design className="renders">
      <DesignLinks className="design-title-container">
        <a
          rel="noopener"
          target="_blank"
          href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/renders.html"
        >
          <h3 className="design-title">Renders</h3>
        </a>
      </DesignLinks>
      <img id="render-image" src={LibraryRender} alt="Library Render" />
    </Design>
  );
};

export default Renders;
