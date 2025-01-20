import React, { useMemo, useState } from "react";

// const ExpensiveComponent = memo(() => {
//   const sum = () => {
//     console.log("Calculating sum ....");
//     let i = 0;
//     for (i = 0; i <= 100000000; i++) {
//       i = i + 1;
//     }
//     return i;
//   };
//   const total = sum();
//   return <p>sum:{total}</p>;
// });

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum ....");
    let i = 0;
    for (i = 0; i <= 100000000; i++) {
      i = i + 1;
    }
    return i;
  };
  const total = useMemo(() => sum(), []);
  //   const total = sum();
  return <p>sum:{total}</p>;
};

const Hook_usememo72 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button>Re-render Parent</button>
      <p>Parent re-render:{count}</p>
    </div>
  );
};

export default Hook_usememo72;
