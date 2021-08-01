import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes from "./paths";

import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";

import NotFound from "../pages/notfound/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.detail} component={Detail} />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
