import React, { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FormsControlled from "./components/FormsControlled";
import MultiInputForm from "./components/MultiInputForm";

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
    </div>
  );
}
