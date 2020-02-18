import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Game from "./views/Game";
import Reward from "./views/Reward";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/congrat">
          <Reward />
        </Route>
        <Route path="/">
          <Game />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
