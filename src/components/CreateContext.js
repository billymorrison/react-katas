import React, { createContext, useState } from "react";
import RandomComponent1 from "./RandomComponent1";

export const myContext = createContext({
  movies: [
    "The Shining",
    "Doctor Sleep",
    "Insidious",
    "Sinister",
    "Hereditary",
    "Jaws",
    "IT",
    "Alien",
  ],
});

const CreateContext = () => {
  return (
    <>
      {/* You may want to read this first before attempting this problem */}
      {/* https://reactjs.org/docs/context.html */}
      <RandomComponent1 />
    </>
  );
};

export default CreateContext;
