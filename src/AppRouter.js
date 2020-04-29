import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home, Details} from './views/'


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/details/:code?">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}