import React, { useState } from "react";

export default function MultiInputForm() {
  const [formdata, setFormdarta] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormdarta({
      ...formdata,
      [name]: value,
    });
  };
  console.log(formdata);

  return (
    <div>
      <h2>Multiple input examples</h2>
      <input
        type="text"
        name="name"
        value={formdata.name}
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        value={formdata.email}
        onChange={handleInput}
      />
      <input
        type="number"
        name="age"
        value={formdata.age}
        onChange={handleInput}
      />
    </div>
  );
}
