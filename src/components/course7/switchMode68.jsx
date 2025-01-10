import React, { useState } from "react";
import "./switchMode68.css";

const SwitchMode = () => {
  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    console.log(isDark);
    setIsDark(!isDark);
  };
  const switchClassWrapper = isDark
    ? `switch-mode-wrapper-dark`
    : `switch-mode-wrapper-light`;

  const switchClassContent = isDark
    ? `switch-mode-content-dark`
    : `switch-mode-content-light`;

  return (
    <div className={switchClassWrapper}>
      <div className={switchClassContent}>
        <p>This is some random content to be displayed in the center.</p>
        <p>Another line of content for demonstration purposes.</p>
        <button className="switch-mode-button" onClick={() => handleChange()}>
          {isDark ? "Switch To Light Mode" : "Switch To Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default SwitchMode;
