import React, { useState } from "react";

const Hook_useState44 = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(0);

  const handleIncrement = () => {
    setData(data + 1);
    console.log("Inner", data);
  };
  console.log("Outer:", data);
  return (
    <div>
      <h1>Use State</h1>
      <div>{value}</div>
      <button
        style={{ color: "white", padding: "1rem", marginRight: "10px" }}
        onClick={() => setValue(value + 1)}
      >
        Increment
      </button>
      <div>{data}</div>
      <button
        style={{ color: "white", padding: "1rem", marginRight: "10px" }}
        onClick={() => {
          handleIncrement();
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Hook_useState44;
