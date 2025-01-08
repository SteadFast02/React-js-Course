import React, { useState } from "react";
import "./mini_project45.css";
const Mini_project45 = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState();
  const Increment = () => {
    if (data < 1) {
      alert("Enter Positive Value");
    }
    if (data > 1) {
      setValue(value + 1 * data);
      return;
    }
    setValue(value + 1);
  };
  const Decrement = () => {
    if (data < 1) {
      alert("Enter Positive Value");
    }
    if (value < 1) {
      alert("Number Will be negative");
      return;
    }
    if (data > 1) {
      setValue(value - 1 * data);
      return;
    }
    setValue(value - 1);
  };
  const Reset = () => {
    setValue(0);
    setData("");
  };
  const handleInput = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <h1>useState Challenge</h1>
        <div>Count: {value}</div>
        <div>
          Step:{" "}
          <input
            type="number"
            value={data}
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              Increment();
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              Decrement();
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              Reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mini_project45;
