import React from "react";
import Inbox from "./Inbox";
import Register from "./Register";
import Login from "./Login";
import Preview from "./Preview";
import addedTodo from "./addedTodo";
import editTodo from "./editTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/preview" component={Preview} />
        <Route path="/addedtodo" component={addedTodo} />
        <Route path="/edittodo" component={editTodo} />
      </Switch>
    </Router>
  );
};

export default Navigator;
