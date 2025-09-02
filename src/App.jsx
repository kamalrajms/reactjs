import React, { useState, useCallback } from "react";
import List from "./components/List";

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
      }}
    >
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>toggle theme</button>
      <List getItem={getItem} />
    </div>
  );
}
