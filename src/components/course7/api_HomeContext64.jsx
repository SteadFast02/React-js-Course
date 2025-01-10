import React, { useContext } from "react";
import { ContextComponent } from "./api_Context64";

const ContextApiHome = () => {
  const { myName, age } = useContext(ContextComponent);
  return (
    <div>
      Hello From Context API This is {myName} and i am {age} years old{" "}
    </div>
  );
};

export default ContextApiHome;
