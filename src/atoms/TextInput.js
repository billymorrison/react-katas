import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 30px;
  border-radius: 8px;
`;

const TextInput = ({ placeholder, setName }) => {
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <StyledInput
        required
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default TextInput;
