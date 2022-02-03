import React from "react";
import FurniturePic from "../img/design/furniture.webp";
//styles
import { Design, DesignLinks } from "../styles";

const Furniture = () => {
  return (
    <Design className="furniture">
      <DesignLinks>
        <a
          rel="noopener"
          target="_blank"
          href="https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/furniture.html"
        >
          <h3 className="design-title">Furniture</h3>
        </a>
      </DesignLinks>
      <img id="furniture-image" src={FurniturePic} alt="Furniture" />
    </Design>
  );
};

export default Furniture;
