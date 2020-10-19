import React from "react";
import ComplexPropsManagement from "./components/ComplexPropsManagement";
import ComplexStateManagement from "./components/ComplexStateManagement";
import PropsManagement from "./components/PropsManagement";
import StateManagement from "./components/StateManagement";
import "./styles/App.css";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome to Manchester Codes React Kata!</h1>
      <p>Here's what you have to do</p>
      <ul>
        <li>
          <Link to="/state-management">1. State Management</Link>
        </li>
        <li>
          <Link to="/props-management">2. Props Management</Link>
        </li>
        <li>
          <Link to="/complex-state">3. Complex State</Link>
        </li>
        <li>
          <Link to="/complex-props">4. Complex Props</Link>
        </li>
      </ul>
      <h3>Extra</h3>
      <Link to="use-context">Use-Context Hook</Link>
    </>
  );
}

export default App;
