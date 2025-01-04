import React, { useState } from "react";
import "./miniProject32.css";

const MiniProject32 = () => {
  const [isOn, setIsON] = useState(false);

  const handleToggleSwitch = () => {
    setIsON(!isOn);
  };

  return (
    <div className="container">
      <div
        className={`toggle-switch ${isOn ? "on" : ""}`}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniProject32;
