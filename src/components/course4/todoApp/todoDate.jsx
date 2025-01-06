import React, { useState, useEffect } from "react";

const TodoDate = () => {
  const [currDate, setCurrDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const formatedTime = now.toLocaleTimeString();
      setCurrDate(`${formatedDate} - ${formatedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h3>{currDate}</h3>;
};

export default TodoDate;
