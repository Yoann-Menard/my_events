import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Event from "./components/Event";
import Member from "./components/Member";
import Organize from "./components/Organize";
import NotFound from "./NotFound";

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
            <Route path="/event">
              <Event />
            </Route>
            <Route exact path="/member">
              <Member />
            </Route>
            <Route exact path="/organize">
              <Organize />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
