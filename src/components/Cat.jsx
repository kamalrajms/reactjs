import React, { useContext } from "react";
import { Pass } from "../App";

export default function Cat() {
  const passname = useContext(Pass);
  return <div>Cat copmponents {passname}</div>;
}
