import React from "react";

export default function Body({ user, setuser }) {
  return (
    <>
      <div>signin</div>
      <button onClick={() => setuser(!user)}>signin</button>
    </>
  );
}
