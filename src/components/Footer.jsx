import React from "react";

export default function Footer({ user, setuser }) {
  return (
    <>
      <div>DashBoard</div>
      <button onClick={() => setuser(!user)}>sign out</button>
    </>
  );
}
