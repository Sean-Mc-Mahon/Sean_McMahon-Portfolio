//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Work from "./components/Work";
import Nav from "./components/nav";
import Footer from "./components/footer";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const location = useLocation();
  //adjust scroll behaviour
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  };
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
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
