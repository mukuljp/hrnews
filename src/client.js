import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./components/app";
import { Router, Switch, Route, Link, useParams } from "react-router-dom";
import  "./history";

const state = window.__STATE__;

delete window.__STATE__;

const storyStatus = JSON.parse(localStorage.getItem("storyStatus") || "{}");
const store = configureStore({ ...state, storyStatus: storyStatus });

hydrate(
  <Provider store={store}>
    <Router history={global.reactHistory}>
      <Route path="/:pageno" render={props => <App {...props} />} />
    </Router>
  </Provider>,
  document.querySelector("#app")
);
