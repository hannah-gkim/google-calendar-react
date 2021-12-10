import react from "react";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { Labels } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p></p>
    </React.Fragment>
  );
}
