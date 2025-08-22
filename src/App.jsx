import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function App() {
  const name = "Chandru";
  const age = 23;
  const course = "B.E";
  return (
    <>
      {/* <h1 className="">Hello world</h1> */}
      <Header />
      <Body first={name} age={age} course={course} />
      <Footer />
    </>
  );
}
