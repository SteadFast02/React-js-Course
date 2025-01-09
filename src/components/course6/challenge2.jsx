import React, { useEffect, useState } from "react";

const Challenge2 = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    document.title = `Count:${value}`;
  });

  useEffect(() => {
    console.log("Enter Text:", text);
  }, [text]);

  return (
    <div className="registration-container">
      <h1>UseEffect Challenge</h1>
      <div className="registration-form">
        <div className="form-group">
          <label htmlFor="email">Count:{value}</label>
          <button
            onClick={() => {
              setValue(value + 1);
            }}
          >
            Increment
          </button>
          <label htmlFor="email">Text:{text}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Challenge2;
