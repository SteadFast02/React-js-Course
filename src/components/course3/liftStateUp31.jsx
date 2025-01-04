import React, { useState } from "react";

const LiftStateUp31 = () => {
  const [inputValue, setInputValues] = useState("");

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValues={setInputValues} />
      <DisplayComponents inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValues }) => {
  // const [inputValue, setInputValues] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          name=""
          id=""
          value={inputValue}
          onChange={(e) => setInputValues(e.target.value)}
          style={{ padding: "0.75rem", borderRadius: "15px" }}
        />
      </div>
    </>
  );
};

const DisplayComponents = ({ inputValue }) => {
  return (
    <>
      <div>Enter Text are: {inputValue}</div>
    </>
  );
};

export default LiftStateUp31;
