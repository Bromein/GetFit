import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../App";
import Welcome from "../Welcome/Welcome";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/get-started" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
