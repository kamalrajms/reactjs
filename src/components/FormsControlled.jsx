import React, { useState } from "react";

export default function FormsControlled() {
  const [name, setname] = useState("");
  const [tick, setick] = useState(true);
  return (
    <div>
      <h2>controlled text input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <p>typed name:{name}</p>
      <input
        type="checkbox"
        checked={tick}
        onChange={(e) => setick(e.target.checked)}
      />
      <p>checkbox is{tick ? "checked" : "unchecked"}</p>
    </div>
  );
}
