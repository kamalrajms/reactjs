import React from "react";
import "./body.css";

export default function Body({ first, age, course = "M.E"}) {
  return (
    <>
      <div className="body">
        hello,{first}
        {course}
        {age}
        {new Date().toLocaleTimeString()}
        <h2 style={{ color: "blue", fontFamily: "sans-serif" }}>React js</h2>
      </div>
    </>
  );
}
