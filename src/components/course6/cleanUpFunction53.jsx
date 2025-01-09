import React, { useEffect, useState } from "react";

const CleanUpFunction53 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //   Drawback of setinterval
  //   setInterval(() => {
  //     setValue((prev) => prev + 1);
  //   }, 1000);

  //   Drawback of setinterval
  //   setInterval(() => {
  //     setValue(value + 1);
  //   }, 1000);
  return (
    <div>
      <h2>Live Data Update</h2>
      <h1>{value}</h1>
    </div>
  );
};

export default CleanUpFunction53;
