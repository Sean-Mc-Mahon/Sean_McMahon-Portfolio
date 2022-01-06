//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Virtual from "./pages/Virtual";
import Nav from "./components/nav";
import WorkDetail from "./pages/WorkDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

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
          <Route path="/work/:id">
            <WorkDetail />
          </Route>
          <Route path="/virtual" exact>
            <Virtual />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
