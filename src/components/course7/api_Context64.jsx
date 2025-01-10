import React from "react";
import { createContext } from "react";

export const ContextComponent = createContext();

const ContextProvider = ({ children }) => {
  const myName = "Steafast";
  const age = 22;
  console.log("Children:", children);
  return (
    <ContextComponent.Provider value={{ myName, age }}>
      {children}
    </ContextComponent.Provider>
  );
};

export default ContextProvider;
