import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StateManagement from "./components/StateManagement";
import PropsManagement from "./components/PropsManagement";
import ComplexStateManagement from "./components/ComplexStateManagement";
import ComplexPropsManagement from "./components/ComplexPropsManagement";
import CreateContext from "./components/CreateContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/state-management" component={StateManagement} />
      <Route path="/props-management" component={PropsManagement} />
      <Route path="/complex-state" component={ComplexStateManagement} />
      <Route path="/complex-props" component={ComplexPropsManagement} />
      <Route path="/use-context" component={CreateContext} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
