import Header from "./components/Header";
import Home from "./components/Home";
import Event from "./components/Event";
import Member from "./components/Member";
import Organize from "./components/Organize";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { layoutGenerator } from "react-break";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/member">
              <Member />
            </Route>
            <Route exact path="/organize">
              <Organize />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
