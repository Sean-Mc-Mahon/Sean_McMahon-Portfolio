import React from "react";
import profile from "../img/design/portrait.webp";
//styles
import { Design, DesignLinks } from "../styles";

const PolyPortrait = () => {
  return (
    <Design className="poly-portrait">
      <DesignLinks className="design-title-container">
        <a
          rel="noopener"
          target="_blank"
          href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/renders.html"
        >
          <h3 className="design-title">Poly Portaits</h3>
        </a>
      </DesignLinks>
      <img src={profile} alt="Poly Portrait" id="poly-portait" />
    </Design>
  );
};

export default PolyPortrait;
