import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";
import Notfound from "./components/NotFound";
import SearchBar from "./components/SearchBar";
import Trending from "./components/Trending";
import Random from "./components/Random";

const giphysearch = (
  <Router>
    <div>
      <ul className="navigation">
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        <li>
          <Link to="/random">Random</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/trending" component={Trending} />
        <Route path="/random" component={Random} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(giphysearch, document.getElementById("root"));
