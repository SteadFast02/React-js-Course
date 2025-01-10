import React, { useReducer } from "react";

const Hook_useReducer69 = () => {
  const countReducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
    if (action.type === "Reset") {
      return (state = 0);
    }
  };

  const [count, countDispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <h1>Use Reducer</h1>
      <span>{count}</span>
      <button
        onClick={() => countDispatch({ type: "Increment" })}
        style={{ width: "10rem" }}
      >
        Increment
      </button>
      <button
        onClick={() => countDispatch({ type: "Decrement" })}
        style={{ width: "10rem" }}
      >
        Decrement
      </button>
      <button
        onClick={() => countDispatch({ type: "Reset" })}
        style={{ width: "10rem" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Hook_useReducer69;
