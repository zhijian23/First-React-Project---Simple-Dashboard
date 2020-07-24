import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/profile";
import ToDoList from "./components/To-do-list";
import Support from "./components/Support";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ToDoList} />
      <Route path="/profile" component={Profile} />
      <Route path="/support" component={Support} />
    </Switch>
  </div>
);

export default Main;
