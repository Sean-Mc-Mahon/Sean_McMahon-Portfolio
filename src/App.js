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
import { Switch, Route } from "react-router-dom";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
