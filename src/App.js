import logo from "./logo.svg";
import "./App.css";
import Signup from "./Pages/Sign-up-page";
import Login from "./Pages/Login-page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
