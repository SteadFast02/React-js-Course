import React from "react";

const Interview1 = () => {
  const students1 = [];
  const students2 = [1];
  return (
    <>
      <h1>Interview</h1>
      <p>Method 1 ==========================</p>
      <p>{students1.length && "No Students found"}</p>
      <p>{students2.length && "No Students found"}</p>
      <p>Number of Students :{students1.length}</p>
      <p>Number of Students :{students2.length}</p>
      <p>Method 2 ==========================</p>
      <p>{students1.length === 0 && "No Students found"}</p>
      <p>{students2.length && "No Students found"}</p>
      <p>Number of Students :{students1.length}</p>
      <p>Number of Students :{students2.length}</p>
      <p>Method 3 ==========================</p>
      <p>{!students1.length && "No Students found"}</p>
      <p>{students2.length && "No Students found"}</p>
      <p>Number of Students :{students1.length}</p>
      <p>Number of Students :{students2.length}</p>
    </>
  );
};

export default Interview1;
