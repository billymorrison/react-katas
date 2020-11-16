import React, { useState } from "react";

const StateManagement = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1)
  };

  return (
    <>
      {/* You will need to edit the line below to allow the clicks to show dynamically*/}
      <p>You have clicked this button {clicks} times!</p>
      <button type="button" onClick={() => handleClick()}>
        Click
      </button>
    </>
  );
};

export default StateManagement;
