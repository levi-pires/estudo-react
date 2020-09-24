import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Products from "./pages/products";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route path='/products/:ID' component={Products}></Route>
    </Switch>
  </BrowserRouter>
);
