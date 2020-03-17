import React from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./components/Nav/Nav.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
};

export default App;
