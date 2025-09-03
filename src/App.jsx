import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Appdevelopment from "./services/Appdevelopment";
import Web from "./services/Web";
import File from "./components/File";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>about</Link>
          <Link to={"/contact"}>contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="Appdev" element={<Appdevelopment />} />
            <Route path="webdev" element={<Web />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/File/:id" element={<File />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
