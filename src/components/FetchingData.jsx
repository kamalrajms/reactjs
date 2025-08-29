import React, { useState, useEffect } from "react";

export default function FetchingData() {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => {
        setuser(data);
        setloading(false);
      })
    );
  }, []);
  return (
    <div>
      <h2>User list</h2>
      {loading ? (
        <p>loading users.. </p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name}--{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
