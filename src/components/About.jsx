import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      About
      <Link to={"Appdev"}> appdev</Link>
      <Link to={"webdev"}> Webdev</Link>
      <Outlet />
    </div>
  );
}
