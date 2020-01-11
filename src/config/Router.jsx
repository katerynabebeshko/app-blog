import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Contacts from "../components/pages/Contacts";
import Post from "../components/pages/Post";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/post" exact component={Post} />
      <Route path="/contacts" exact component={Contacts} />
    </Switch>
  );
};

export default Router;
