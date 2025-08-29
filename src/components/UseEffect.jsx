import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("helloworld");
  }, []);
  useEffect(() => {
    console.log(`count changes to : ${count}`);
  }, [count]);
  const [sec, setSec] = useState(0);
  useEffect(() => {
    console.log("start");
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div>Hello</div>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>

      <h2>second:{sec}</h2>
    </>
  );
}
