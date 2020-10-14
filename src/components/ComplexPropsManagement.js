import React, { useEffect, useState } from "react";
import Albums from "./Albums";
import Bands from "./Bands";

const ComplexPropsManagement = () => {
  const [music, setMusic] = useState();

  useEffect(() => {
    setMusic([
      {
        band: "Fleetwood Mac",
        album: "Rumours",
      },
      {
        band: "Oasis",
        album: "Definitely Maybe",
      },
      {
        band: "The Smiths",
        album: "Meat is Murder",
      },
      {
        band: "The Stone Roses",
        album: "2nd Coming",
      },
      {
        band: "The Beatles",
        album: "The White Album",
      },
      {
        band: "The Rolling Stones",
        album: "Some Girls",
      },
      {
        band: "Hall and Oates",
        album: "H20",
      },
    ]);
  }, []);

  return (
    <>
      <h3>
        There are a total of 238746 bands and 238476 albums in the database
      </h3>
      <Bands />
      <Albums />
    </>
  );
};

export default ComplexPropsManagement;
