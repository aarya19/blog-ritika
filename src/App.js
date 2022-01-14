import Home from "./components/home/Home";
import BookSession from "./components/bookSession/BookSession";
import AboutMe from "./components/aboutMe/AboutMe";
// import Blog from "./components/pages/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar home={true} />
        <Switch>
          <Route path="/book">
            <BookSession />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          {/* <Route path="/blog">
            <Blog />
          </Route> */}
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
