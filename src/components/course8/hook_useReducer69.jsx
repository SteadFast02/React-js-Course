import React, { useReducer } from "react";

const Hook_useReducer69 = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 5,
  };
  //   const countReducer = (state, action) => {
  //     if (action.type === "Increment") {
  //       return state + 1;
  //     }
  //     if (action.type === "Decrement") {
  //       return state - 1;
  //     }
  //     if (action.type === "Reset") {
  //       return (state = 0);
  //     }
  //   };

  const countReducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };
      case "Decrement":
        return { ...state, count: state.count - 1 };
      case "Reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  //   const [count, countDispatch] = useReducer(countReducer, 0);
  const [state, countDispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h1>Use Reducer</h1>
      <span>{state.count}</span>
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
