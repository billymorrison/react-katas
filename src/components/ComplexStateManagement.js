import React, { useState, useEffect } from "react";

const ComplexStateManagement = () => {
  const [arrayState, setArrayState] = useState();

  useEffect(() => {
    setArrayState([
      "John",
      "Paul",
      "George",
      "Ringo",
      "Liam",
      "Noel",
      "Ian",
      "Shaun",
      "Morrissey",
    ]);
  }, []);

  return (
    <>
      <p>Here you will map over an array and display it's contents as a list</p>
      <h3>Musicians from the Northwest</h3>
      <ul>{/* You will map using <li> here to display a list of names */}</ul>
    </>
  );
};

export default ComplexStateManagement;
