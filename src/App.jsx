import React, { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FormsControlled from "./components/FormsControlled";
import MultiInputForm from "./components/MultiInputForm";
import FetchingData from "./components/FetchingData";
import UseEffect from "./components/UseEffect";
import Timer from "./components/Timer";

export default function App() {
  const [user, setuser] = useState(false);
  return (
    <div>
      {user ? (
        <Footer user={user} setuser={setuser} />
      ) : (
        <Body user={user} setuser={setuser} />
      )}
      <Header />
      <FormsControlled />
      <MultiInputForm />
      <UseEffect />
      <FetchingData />
      <Timer />
    </div>
  );
}
