import React from "react";
import './App.scss';
import Home from "./pages/home";
import Detail from "./pages/detail";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
