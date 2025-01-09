import React, { useEffect, useState } from "react";

const Hook_useEffect51 = () => {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState("");
  const handleChange = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    console.log("Value", value);
  }, [value]);

  useEffect(() => {
    setInterval(() => {
      const updateDate = new Date();
      setDate(updateDate.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h3>UseEffect</h3>
      <p>{value}</p>
      <p>Date:{date}</p>
      <button onClick={handleChange}>Increment</button>
    </div>
  );
};

export default Hook_useEffect51;
