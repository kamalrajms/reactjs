import React from "react";
import TextContent from "./subComponent/TextContent";
import "./body.css";

export default function Body() {
  const name = "Chandru";

  return (
    <>
      <div className="body">
        hello,{name}
        {new Date().toLocaleTimeString()}
        <h2 style={{ color: "blue", fontFamily: "sans-serif" }}>React js</h2>
        <TextContent />
      </div>
    </>
  );
}
