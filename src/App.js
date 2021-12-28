import "./App.css";
import HomePage from "./components/pages/HomePage";
import BookASession from "./components/pages/BookASession";
import AboutMe from './components/pages/AboutMe';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/book">
        <BookASession></BookASession>
      </Route>
      <Route path="/about">
        <AboutMe></AboutMe>
      </Route>
      <Route path="/" exact>
        <HomePage></HomePage>
      </Route>
    </Switch>
  );
}
export default App;
