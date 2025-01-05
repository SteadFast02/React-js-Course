import React, { useState } from "react";
import "./miniProject32.css";

const MiniProject32 = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="container">
      <div
        className={`toggle-switch ${isOn ? "on" : "off"}`}
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
