import React, { useState, createContext, useContext } from "react";
import Apple from "./components/Apple";

export const Pass = createContext();

export default function App() {
  const name = "animal";
  return (
    <div>
      <Pass.Provider value={name}>
        <Apple />
      </Pass.Provider>
    </div>
  );
}
