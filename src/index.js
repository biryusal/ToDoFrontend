import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import { Provider} from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";

ReactDOM.render(
    <App />
, document.getElementById("root"));