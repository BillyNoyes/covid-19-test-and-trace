import React from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";
import Success from "./Success";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__contactButton">
        <Button className="form__button" variant="outlined">
          Sign Up Your Business
        </Button>
      </div>
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
