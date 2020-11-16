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

  const loopNamesInList = (state) => {
    return state && state.map(name => <li key={name}>{name}</li>)
  }
  

  return (
    <>
      <p>Here you will map over an array and display it's contents as a list</p>
      <h3>Musicians from the Northwest</h3>
      <ul>{/* You will map using <li> here to display a list of names */}
        {
          loopNamesInList(arrayState)
        }
      </ul>
    </>
  );
};

export default ComplexStateManagement;
