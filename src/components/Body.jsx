import React from "react";
import "./body.css";

export default function Body() {
  const name = "Chandru";

  return (
    <>
      <div className="body">
        hello,{name}
        {new Date().toLocaleTimeString()}
      </div>
    </>
  );
}
