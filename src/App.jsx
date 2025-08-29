import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <nav className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aBout" element={<About />} />
            <Route path="/contacT" element={<Contact />} />
          </Routes>
        </nav>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
