import React, { useState } from "react";

export default function Header() {
  const [dark, setdark] = useState(false);
  return (
    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <button onClick={() => setdark(!dark)}>
        switch to{dark ? "Light" : "dark"}
      </button>
      <p>you are in {dark ? "dark" : "light"}</p>
    </div>
  );
}
