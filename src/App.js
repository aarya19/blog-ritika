import "./App.css";
import HomePage from "./components/pages/HomePage";
import BookASession from "./components/pages/BookASession";
import AboutMe from "./components/pages/AboutMe";
import Blog from "./components/pages/Blog";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar home={true} />
        <Switch>
          <Route path="/book">
            <BookASession></BookASession>
          </Route>
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
