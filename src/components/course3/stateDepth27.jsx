import React, { useState } from "react";

const StateDepth27 = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component Rendered");
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button style={{ color: "white" }} onClick={handleButtonClick}>
          Increment
        </button>
      </div>
      <ChildComponent data={count} />
    </>
  );
};

export default StateDepth27;

function ChildComponent({ data }) {
  console.log("Child Component Rendered");
  return (
    <div className="main-dev">
      <h2>Child Component - {data}</h2>
    </div>
  );
}
