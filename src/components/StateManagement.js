import React, { useState } from "react";

const StateManagement = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // Logic in here to increment the clicks state by 1 every time
    // the user clicks the button
  };

  return (
    <>
      {/* You will need to edit the line below to allow the clicks to show dynamically*/}
      <p>You have clicked this button 400 times!</p>
      <button type="button" onClick={() => handleClick()}>
        Click
      </button>
    </>
  );
};

export default StateManagement;
