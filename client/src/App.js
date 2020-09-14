import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import RoomRouter from "./containers/RoomRouter";
import PokerRoom from "./containers/PokerRoom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={RoomRouter} />
          <Route exact path="/vote" component={PokerRoom} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
