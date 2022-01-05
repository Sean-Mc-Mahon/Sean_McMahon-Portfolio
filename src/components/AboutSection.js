import React from "react";
import profile from "../img/profile.jpg";
//Styled
import styled from "styled-components/macro";
import { About, HomeDescription, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const aboutSection = () => {
  return (
    <About>
      <HomeDescription>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>let me make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dream</span> website
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any projects you have in mind.
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
      </HomeDescription>
      <Image>
        <motion.img variants={photoAnim} src={profile} alt="profile pic" />
      </Image>
    </About>
  );
};

export default aboutSection;
