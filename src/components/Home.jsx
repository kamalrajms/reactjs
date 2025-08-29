import React from "react";
import { useNavigate } from "react-router-dom";
import Userefs from "./Userefs";

export default function Home() {
  const page = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => page("/aBout")}>to about</button>
      <Userefs />
    </div>
  );
}
