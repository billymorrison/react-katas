import React from "react";
import ComplexPropsManagement from "./components/ComplexPropsManagement";
import ComplexStateManagement from "./components/ComplexStateManagement";
import PropsManagement from "./components/PropsManagement";
import StateManagement from "./components/StateManagement";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1>Welcome to Manchester Codes React Kata!</h1>
      <p>Here's what you have to do</p>
      <StateManagement />
      <PropsManagement />
      <ComplexStateManagement />
      <ComplexPropsManagement />
    </>
  );
}

export default App;
