import React from "react";
import { useState } from "react";

const StateConcept26 = () => {
  console.log("This is useState", useState());
  let value1 = 0;
  const [value2, setValue2] = useState(0);
  function IncrementHandleClick1() {
    value1++;
    console.log(value1);
  }

  const IncrementHandleClick2 = () => {
    setValue2(() => value2 + 1);
  };
  return (
    <>
      <h2>{value1}</h2>
      <h2>{value2}</h2>
      <button style={{ color: "white" }} onClick={IncrementHandleClick1}>
        Click Here To Increment Value1
      </button>
      <button style={{ color: "white" }} onClick={IncrementHandleClick2}>
        Click Here To Increment Value2
      </button>
    </>
  );
};

export default StateConcept26;
