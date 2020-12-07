
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";

import App1 from "./Apps/App1";
import App2 from "./Apps/App2";
import App3 from "./Apps/App3";
import App5 from "./Apps/App5";
import App7 from "./Apps/App7";
import App6 from "./Apps/App6";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/App1"
        exact
        render={props => <App1 {...props} />}
      />
      <Route
        path="/App2"
        exact
        render={props => <App2 {...props} />}
      />
      <Route
        path="/App3"
        exact
        render={props => <App3 {...props} />}
      />
      <Route
        path="/App4"
        exact
        render={props => <App1 {...props} />}
      />
      <Route
        path="/App5"
        exact
        render={props => <App5 {...props} />}
      />
      <Route
        path="/App6"
        exact
        render={props => <App6 {...props} />}
      />
      <Route
        path="/App7"
        exact
        render={props => <App7 {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
