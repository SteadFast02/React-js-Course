import React, { useState, memo, useRef } from "react";

const Count_memo71 = () => {
  const renderedCount = useRef(0);
  console.log(renderedCount);

  const [count, seCount] = useState(0);

  return (
    <div>
      <p>Nothing changed here but i have now rendered..</p>
      <span>{renderedCount.current++} time(s)</span>

      <h1>{count}</h1>
      <button onClick={() => seCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default memo(Count_memo71);
