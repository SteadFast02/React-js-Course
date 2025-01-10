import React, { useReducer } from "react";

const Hook_useReducer69 = () => {
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Use Reducer</h1>
      <span>{count}</span>
      <button
        onClick={() => dispatch({ type: "Increment" })}
        style={{ width: "10rem" }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "Decrement" })}
        style={{ width: "10rem" }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Hook_useReducer69;
