import React from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";
import Success from "./Success";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Header />
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
