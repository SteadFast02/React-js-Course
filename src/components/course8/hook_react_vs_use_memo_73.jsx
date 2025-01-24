import React, { useState, useRef, useMemo } from "react";
// import Count_memo71 from "./count_memo71";
import { Count_memo71 } from "./count_memo71";

const Hook_React_vs_usememo73 = () => {
  const renderedCount = useRef(0);
  console.log(renderedCount);

  const data = useMemo(() => {
    return {
      age: 30,
      name: "Steadfast",
    };
  }, []);

  const [count, seCount] = useState(0);
  return (
    <>
      <div>
        <p>Nothing changed here but i have now rendered..</p>
        <span>{renderedCount.current++} time(s)</span>

        <h1>{count}</h1>
        <button onClick={() => seCount((prev) => prev + 1)}>Increment</button>
      </div>
      <Count_memo71 data={data} />
      <Count_memo71 data={count} />
      <Count_memo71 data="Steadfast" />
    </>
  );
};

export default Hook_React_vs_usememo73;
