//Images
import virtual from "./img/virtual_ireland.gif";
import seanmc from "./img/seanmc.gif";
import mctastic from "./img/mctastic.gif";
import mctastic2 from "./img/mctastic.JPG";
import purr from "./img/purr.gif";

export const WorkState = () => {
  return [
    {
      title: "Virtual Ireland",
      mainImg: virtual,
      secondaryImg: mctastic2,
      url: "/work/virtual_ireland",
      stack: "HTML & CSS",
      description: "“Basic Front End.”",
      live: "https://sean-mc-mahon.github.io/ms1virtualireland/index.html",
      repo: "https://github.com/Sean-Mc-Mahon/ms1virtualireland",
    },
    {
      title: "Sean Mc Design",
      mainImg: seanmc,
      secondaryImg: seanmc,
      url: "/work/seanmc",
      description: [
        {
          title: "HTML, CSS & Javascript",
          description: "“Front End.”",
        },
      ],
    },
    {
      title: "McTastic Recipes",
      mainImg: mctastic,
      secondaryImg: mctastic,
      url: "/work/mctastic",
      description: [
        {
          title: "HTML, CSS, Javascript & ",
          description: "“Back End”",
        },
      ],
    },
    {
      title: "The Inner Purr",
      mainImg: purr,
      secondaryImg: purr,
      url: "/work/purr",
      description: [
        {
          title: "HTML, CSS, Javascript & ",
          description: "“Full Stack”",
        },
      ],
    },
  ];
};
