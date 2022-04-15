import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";

import PokerRoom from "./containers/PokerRoom";
import RoomRouter from "./containers/RoomRouter";

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
