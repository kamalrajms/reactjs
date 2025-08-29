import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="head">
      <Link to="/">Home</Link>
      <Link to="/aBout">about</Link>
      <Link to="/contacT">Contact</Link>
    </nav>
  );
}
