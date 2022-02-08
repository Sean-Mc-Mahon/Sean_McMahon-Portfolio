# Sean Mc (Portfolio)

[Live](https://sean-mc-mahon.github.io/Sean_McMahon-Portfolio/)

**Please note**: To open any links in this document in a new browser tab, please press `CTRL + Click`.

![Various Devices](https://github.com/Sean-Mc-Mahon/Sean_McMahon-Portfolio/blob/master/src/img/responsive.JPG)

Sean Mc is a portfolio site built using React.

# Table of Contents

**<details><summary>Project overview</summary>**

- [**_Project overview_**](#project-overview)
- [**_User Stories_**](#user-stories)
</details>

**<details><summary>UX</summary>**

- [**_Strategy Plane_**](#strategy-plane)
- [**_Scope Plane_**](#scope-plane)
- [**_Structure Plane_**](#structure-plane)
- [**_Skeleton Plane_**](#skeleton-plane)
- [**_Surface Plane_**](#surface-plane)
_ [*Color Scheme*](#color-scheme)
_ [_Typography_](#typography)
_ [*Media*](#Media)
_ [_Wireframes_](#wireframes)
</details>

**<details><summary>Features</summary>**

- [**_Existing Features_**](#existing-features)
- [**_Features Left to Implement_**](#features-left-to-implement)
</details>

**<details><summary>Technologies Used</summary>**

- [**_Libraries_**](#libraries)
- [**_Version Control_**](#version-control)
</details>

**<details><summary>Deployment</summary>**

- [**Deployment**](#deployment)
</details>

**<details><summary>Credits</summary>**

- [**_Content_**](#content)
- [**_Acknowledgements_**](#acknowledgements)
</details>

---

# Project Overview

Sean Mc is a portfolio site built to demonstrate the skills that I have attained as a developer and digital designer.

---

### User Stories

| As a/an...  |                    I want the ability to...                    |
| :---------: | :------------------------------------------------------------: |
|             |                                                                |
|     ---     |                              ---                               |
| Casual User | easily navigate the site to find what I am looking for quickly |
| Casual User |               view the site on all screen sizes                |
| Casual User |      view contact information such as social media links       |
| Casual User |                contact the author using a form                 |

---

## Opportunities arising from user stories

<div align="center">
 
|Opportunities | Importance | Viability / Feasibility
|-----|:------:|:-----:|
|**Simple Clean UI** | 5 | 5 |
|**Clearly indicate purpose** | 5 | 5 |

</div>

---

## UX Planes

### Strategy Plane

- Business Goals: Provide a platform to demonstrate capability to produce high quality front end web development projects.

- Audience: The audience are anyone with an interest in web development and digital design, specifically those seeking to hire developers.

### Scope Plane

- The site is fully responsive and intuitive with prompts to explore projects and contact the author.

### Structure Plane

- The site uses a simple structure, a navbar is at the top of the page which allow a user to navigate the site. As there are only three links a burger menu has not been utilized.
- The work section uses sliders to showcase indivual projects/collaborative projects and other aspects of digital design.
- A footer at the bottom provides links to social media pages and a form to enable the user to contact the author.
- The site is kept as simple as possible using links to navigate to different sections on a single page.
- Buttons/modals/links are consistant in design.

### Skeleton Plane

#### Wireframes

The jumping off point for the site is a project on the React course offered by [Dev Ed](https://developedbyed.com/)

I used Figma to create some of the elements such as the logo design.

The site was originall a multi page design but to provide a cleaner sleeker design a single page format was utilized using sliders to demonstrate a large amount of work.

### Surface Plane

- The number is fonts is kept at a minimum as well as using a limited and consistant color scheme.

#### Design

A standard layout is fully responsive on mobile devices and larger screens.

#### Color Scheme

Colors are kept to a minimum and inspired by neon street signs. Color scheme can be found on my Coolors profile: [Coolors](https://coolors.co/user/palettes/6202a945024dbe000ae00ca2)

![Color Palette](https://github.com/Sean-Mc-Mahon/Sean_McMahon-Portfolio/blob/master/src/img/colours.JPG)

#### Typography

2 [Google Fonts](https://fonts.google.com/) were used across the site:

- [Comfortaa](https://fonts.google.com/specimen/Comfortaa?query=comfortaa) : Logo & Headings, used for it's rounded relaxed style.
- [Inter](https://fonts.google.com/specimen/Inter?query=inter) : Body, used for it's excellent readability.

#### Media

All images are the authors own. Logo, hero image and favicon are also produced by the author using Affinity Design. Image above photo produced using Affinity Photo.

##### back to [top](#table-of-contents)

---

# Features

## Existing Features

### Elements on every page

#### Navbar

![Navbar](https://github.com/Sean-Mc-Mahon/inner-purr/blob/main/wireframes/nav.JPG)

![logo](https://github.com/Sean-Mc-Mahon/Sean_McMahon-Portfolio/blob/master/src/img/logo.gif)

![logo](https://github.com/Sean-Mc-Mahon/Sean_McMahon-Portfolio/blob/master/src/img/logo.jpg)

- The navigation an animated logo in the top left corner linked to the top of the page. Navigation links are in the top right. On loading the homepage the logo will animate, weaving itself to completion while flickering until the end of the animation.

- On small devices the logo is displayed above the links.

![small logo](https://github.com/Sean-Mc-Mahon/Sean_McMahon-Portfolio/blob/master/src/img/logo-sm.jpg)

- List item links are available.
  1. Work
  2. About
  3. Contact

When a link is hovered over it will turn to yellow and and a drop shadow will emerge.

#### Footer

![Footer](https://github.com/Sean-Mc-Mahon/Sean_McMahon-Portfolio/blob/master/src/img/footer.jpg)

The footer features:

- form for users to submit queries
- social links

![Small Footer](https://github.com/Sean-Mc-Mahon/Sean_McMahon-Portfolio/blob/master/src/img/footer-sm.jpg)

Above the footer is an SVG which when hovered over changes colours and illuminates the image from which it was created. The base image was created using Affinity Photo and the SVG was created using Affinity Designer.

### Individual Sections

### Work

- Three sliders showcase individual, collaborative and miscellaneus designs.
- The sliders are created using [SwiperJS](https://swiperjs.com/react), the navigation elements are customised using CSS.
- Each project in the first two sliders features an image illustrating responsiveness, some text desciption, links to the project and repo and a line under the heading, all animated using [Framer Motion](https://www.framer.com/motion/).
- The third slider features images with a button link inside a circular div.

### About

- Toggles are used to expand and contract various answers to FAQ's. The various elements are animated using [useState](https://reactjs.org/docs/hooks-state.html) and [Framer Motion](https://www.framer.com/motion/).

## Features Left to Implement

### Dark Mode

- In the future I would like to allow users to select a color theme preference.

##### back to [top](#table-of-contents)

# Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages.
- [CSS (Cascading Style Sheets)](https://www.w3.org/Style/CSS/Overview.en.html) - CSS describes how HTML elements are to be displayed on screen.
- [React](https://reactjs.org/) - Used throughout the site
- [JavaScript](https://www.javascript.com/) - Used for various animations and functions.
- [Github Pages](https://pages.github.com/) - Used to host the site.
- [Google Fonts](https://fonts.google.com/) - Google Fonts is a library of free licensed font families.
- [Gitpod](https://code.visualstudio.com/) - Code Editor used to create the site.
- [GitHub](https://github.com/) - Used to host repos for the site.
- [Screen Recorder](https://chrome.google.com/webstore/detail/screen-recorder/hniebljpgcogalllopnjokppmgbhaden?hl=en) - Used to make GIFs for README.
- [Chrome/Firefox/Bing DevTools](https://developers.google.com/web/tools/chrome-devtools) - Regularly used to test the site (Primarily Chrome).
- [W3C Markup Validation Service](https://validator.w3.org/https://jigsaw.w3.org/) - Used to test code for errors.
- [Affinity Designer](https://affinity.serif.com/en-gb/) - Illustration software used to create logos and icons.
- [Figma](https://figma.com) - Collaborative interface design tool used for creating wireframes as well logos and SVGs.
- [Tinypng](https://tinypng.com/) - Used to compress images.
- [Croppola](https://croppola.com/) - Used to crop images.

### Libraries

- [React Bootstrap](https://react-bootstrap.github.io/) - Used to aid responsive design and for componants such as sliders and carousels.

### Version Control

- [Git](https://git-scm.com/) - used for version control

- Branches were used to experiment with the single page layout.

---

### React Router

React Router is a package which renders components based on the url. The project is wrapper in the React Router DOM in 'index.js'. Switch and Route are imported from react-router-dom. Pages are wrapped in Route components with a path these components are wrapped in a Switch component. The exact property us used to ensure the router does not end at '/'. Link & to is used in place of a tags with hrefs.

### React Bootstrap

React Bootstrap is installed using via the treminal with the command
`npm install react-bootstrap bootstrap@5.1.3`

## Framer Motion

[Framer Motion](https://www.framer.com/motion/) is a motion library for React used to add animation to the project. To add motion to an elemeny "motion" is added before the tag.

```
<motion.h2
    animate={{ opacity: 1, transition: { duration: 2 } }}
    initial={{ opacity: 0 }}
    >Header Text
</motion.h2>
```

Properties can be grouped as a variable. Variants can be chained together by adding staggerChildren to the parent variable and a when property may determine the order.

```
const aboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.25,
        when: "afterChildren",
      },
    },
  };
```

```
<HomeDescription>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>let me make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dream</span> website
            </motion.h2>
          </Hide>
        </motion.div>
      </HomeDescription>
```

In order for framer motion to know when our components start mounting and when it changes in order to let it start animating. Wherever routing is occurring (in this case App.js) the "AnimatePresence" package needs to be imported from framer motion. This allows components to animate out when they are removed from the React tree.
useLocation from the react-router-dom is required. exitBeforeEnter is used to stagger the exit and pageAnim animations.

```
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
```

# Tiny PNG

[Tiny PNG](https://tinypng.com/) is used to compress images.

# Convertio

[Convertio](https://convertio.co/download/3fd4fa0cb9cf032773c5709f30b2d00eea9897/) is used to convert images to webp format.

# OBS

[OBS](https://obsproject.com/) is used to make screen recordings.

# EmailJS

[Email](https://www.emailjs.com/) is used to allow users to email the author.

Install EmailJS:

`npm install emailjs-com --save`

# Deployment

Add URL to package.json:
`'homepage': 'https://[USERNAME].github.io/[PROJECTNAME],`

Install github pages npm package via CLI:
`npm install gh-pages --save-dev`

Add sripts to package.json under 'scripts':

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

In the CLI run:
`npm run deploy`

# Modal

React modal functionality sourced from Youtube tutorial by [PedroTech](https://youtu.be/ZCvemsUfwPQ)
