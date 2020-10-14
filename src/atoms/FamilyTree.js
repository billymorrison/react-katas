import React from "react";
import styled from "styled-components";

const FamilyTreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FamilyTree = ({ name }) => {
  return (
    <FamilyTreeContainer>
      <h3>Mum + Dad</h3>
      <h3>&darr;</h3>
      <h3>{name}</h3>
    </FamilyTreeContainer>
  );
};

export default FamilyTree;
