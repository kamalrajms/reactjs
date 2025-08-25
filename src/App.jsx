import React, { useState } from "react";

export default function App() {
  const [user, setuser] = useState(false);
  const fruits = [];
  const users = [
    { id: 1, name: "SK" },
    { id: 2, name: "AK" },
    { id: 3, name: "Vijay" },
  ];
  return (
    <div>
      {/* //conditional rendering */}
      <nav>
        {user ? <p>Welcome back</p> : <p>Please log in</p>}
        <button onClick={() => setuser(!user)}>login</button>

        <button onClick={() => setuser(!user)}>
          {user ? "hide" : "show"}text
        </button>
        {user && <p>this is toggled text</p>}
      </nav>
      {/* list rendering */}
      <nav>
        {fruits.map((ele, ind) => (
          <h3 key={ind}>{ele}</h3>
        ))}
      </nav>
      {/* <ul>
        {users.find((user) => (
          <li key={user.id}>{user.id === 2 ? user.name : " "}</li>
        ))}
      </ul> */}
      <nav>
        {fruits.length > 0 ? (
          <ul>
            {fruits.map((e, ind) => (
              <li key={ind}>{e}</li>
            ))}
          </ul>
        ) : (
          <p>no fruits found</p>
        )}
      </nav>
    </div>
  );
}
