import React from "react";
import StateConcept26 from "./course3/stateConcept26";
import StateDepth27 from "./course3/stateDepth27";
import StateChallenge29 from "./course3/stateChallenge29";
import DerivedState30 from "./course3/derivedState30";
import LiftStateUp31 from "./course3/liftStateUp31";

const course3 = () => {
  return (
    <>
      {/* <StateConcept26 /> */}

      {/* <StateDepth27 />
      <ShiblingComponent27 /> */}

      {/* <StateChallenge29 /> */}

      {/* <DerivedState30 /> */}

      <LiftStateUp31 />
    </>
  );
};

export default course3;

function ShiblingComponent27() {
  console.log("Shibling Component Rendered");
  return (
    <div className="main-dev">
      <h2>Shibling Component</h2>
    </div>
  );
}
