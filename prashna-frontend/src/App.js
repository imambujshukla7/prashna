import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
