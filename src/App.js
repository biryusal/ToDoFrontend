import React  from "react";
import {
  BrowserRouter as Router, 
  Route, Switch
} from "react-router-dom";
import Todo from "./js/components/Todo";

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Todo />}></Route>
      </Switch>
    </Router>
  )
}
