import React from "react";
import Button from "./components/Button.js";
import './App.scss';
import Logo from "./assets/img/logo.svg";
import Home from "./pages/home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          About
        </Route>
        <Route path="/users">
          User
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
