import React, { useState, createContext, useContext, useReducer } from "react";

export default function App() {
  // const [count, setcount] = useState(0);

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return { count: 0 };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* {count}
      <button onClick={() => setcount(count + 1)}>inc</button>
      <br />
      <button onClick={() => setcount(count - 1)}>dec</button>
      <br />
      <button onClick={() => setcount(0)}>reset</button> */}

      <h1>count :{state.count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
