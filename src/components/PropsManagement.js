import React, { useState } from "react";
import FamilyTree from "../atoms/FamilyTree";
import TextInput from "../atoms/TextInput";

const PropsManagement = () => {
  const [name, setName] = useState();

  return (
    <>
      <p> In this component we keep our state.</p>
      <p>We pass our state into other components where it will be updated.</p>
      <p>
        We keep all our state in the parent component to keep things organised
        instead of spreading state into multiple components unnecessarily.
      </p>
      <p>This is good state management and best practice.</p>
      {name && name.length > 0 && (
        <h3>Well hello there, {name}! Fancy meeting you here!?</h3>
      )}

      {/* You will need to pass two props into this component below */}
      <TextInput />

      {/* You will also need to pass a prop into here to update your family tree */}
      <FamilyTree />
    </>
  );
};

export default PropsManagement;
