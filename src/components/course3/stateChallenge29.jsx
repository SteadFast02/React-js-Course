import React, { useState } from "react";

const StateChallenge29 = () => {
  const users = [
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Angles", age: 45 },
    { id: 5, name: "Algo", age: 20 },
  ];

  const [data, setData] = useState([
    { id: 1, name: "Abhishek", age: 24 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charli", age: 35 },
    { id: 4, name: "Angle", age: 45 },
    { id: 5, name: "Algo", age: 20 },
  ]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((items) => (
          <li key={items.id}>
            NAME:{items.name}, AGE: {items.age}
          </li>
        ))}
      </ul>

      <h1>User List by useState</h1>
      <ul>
        {data.map((items) => {
          return (
            <li key={items.id}>
              NAME:{items.name}, AGE: {items.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StateChallenge29;
