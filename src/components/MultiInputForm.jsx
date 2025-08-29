import React, { useState } from "react";

export default function MultiInputForm() {
  const [formdata, setFormdata] = useState({
    name: "chandru",
    email: "",
    age: "",
    term: false,
  });
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, type, value, checked } = e.target;
    setFormdata({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleError = (e) => {
    e.preventDefault();
    if (!formdata.name || !formdata.email || !formdata.age) {
      setError("All fields are required");
      return;
    }
    if (!formdata.term) {
      setError("You must accept the terms");
      return;
    }
    setError("");
    alert("Form submitted successfully!");
    console.log(formdata);
  };

  return (
    <form onSubmit={handleError}>
      <h2>Multiple Input Example</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formdata.name}
        onChange={handleInput}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formdata.email}
        onChange={handleInput}
      />

      <label>Age</label>
      <input
        type="number"
        name="age"
        value={formdata.age}
        onChange={handleInput}
      />

      <label>
        <input
          type="checkbox"
          name="term"
          checked={formdata.term}
          onChange={handleInput}
        />
        Accept conditions
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
