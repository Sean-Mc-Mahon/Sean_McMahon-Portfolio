# Live Site

[Sean Mc](https://sean-mc-mahon.github.io/Sean_McMahon-Portfolio/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Extensions

vscode-styled-components: Syntax highlighting for styled-components

### React Router

React Router is a package which renders components based on the url. The project is wrapper in the React Router DOM in 'index.js'. Switch and Route are imported from react-router-dom. Pages are wrapped in Route components with a path these components are wrapped in a Switch component. The exact property us used to ensure the router does not end at '/'. Link & to is used in place of a tags with hrefs.

### React Bootstrap

React Bootstrap is installed using via the treminal with the command "npm install react-bootstrap bootstrap@5.1.3".

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
