import React from "react";

const EventHandling = () => {
  function handleAlertButton1() {
    alert("Hello");
  }

  const handleAlertButton2 = () => {
    alert("World");
  };

  const handleAlertButton3 = (text) => {
    alert(text);
  };
  return (
    <>
      <div>
        <button style={{ color: "white" }} onClick={handleAlertButton1}>
          Click Here 1
        </button>

        <button style={{ color: "white" }} onClick={handleAlertButton2}>
          Click Here 2
        </button>

        <button
          style={{ color: "white" }}
          onClick={() => handleAlertButton3  ("Code with me")}
        >
          Click Here 3
        </button>
      </div>
    </>
  );
};

export default EventHandling;
