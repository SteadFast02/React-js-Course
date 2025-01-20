import React, { useState, useRef } from "react";
import Count_memo71 from "./count_memo71";

const Hook_memo71 = () => {
  const renderedCount = useRef(0);
  console.log(renderedCount);

  const [count, seCount] = useState(0);
  return (
    <>
      <div>
        <p>Nothing changed here but i have now rendered..</p>
        <span>{renderedCount.current++} time(s)</span>

        <h1>{count}</h1>
        <button onClick={() => seCount((prev) => prev + 1)}>Increment</button>
      </div>
      <Count_memo71 />
    </>
  );
};

export default Hook_memo71;
