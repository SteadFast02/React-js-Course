import React, { useState } from "react";

const DerivedState30 = () => {
  const [data, setData] = useState([
    { id: 1, name: "Abhishek", age: 24 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charli", age: 35 },
    { id: 4, name: "Angle", age: 45 },
    { id: 5, name: "Algo", age: 20 },
  ]);
  console.log("DATA", data);
  const dataLength = data.length;
  // console.log("DataLength", dataLength);
  const Avg =
    data.reduce((accu, currEle) => accu + currEle.age, 0) / dataLength;

  return (
    <div>
      <h1>User List by useState</h1>
      <ul>
        {data.map((items) => {
          return (
            <li key={items.id}>
              NAME:{items.name}, AGE: {items.age}
            </li>
          );
        })}
        <h2>Average is:{Avg}</h2>
        <h2>Total Length:{dataLength}</h2>
      </ul>
    </div>
  );
};

export default DerivedState30;
