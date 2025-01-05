import React, { useState } from "react";
import "./miniProject32.css";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const MiniProject32 = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
    <h2>Toggle Button </h2>
      <div className="container">
        <div onClick={handleToggleSwitch}>
          {isOn ? <FaToggleOn /> : <FaToggleOff />}
        </div>

        <div
          className={`toggle-switch ${isOn ? "on" : "off"}`}
          onClick={handleToggleSwitch}
        >
          <div className={`switch ${isOn ? "on" : "off"}`}>
            <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniProject32;
