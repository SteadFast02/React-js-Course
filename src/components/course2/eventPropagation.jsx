import React from "react";
import "./eventPropagation.css";
const EventPropagation = () => {
  const handleGrandParent = (event) => {
    // console.log(event);
    event.stopPropagation();
    console.log("Grand Parent Clicked");
  };

  const handleParentClick = (event) => {
    // console.log(event);
    event.stopPropagation();
    console.log("Parent Clicked");
  };

  const handleChildClick = (event) => {
    // console.log(event);
    event.stopPropagation();
    console.log("Child Clicked");
  };

  return (
    <>
      {/* Bubbbling case -> bottom to top root */}
      <section className="main-div">
        <div className="g-div" onClick={handleGrandParent}>
          <div className="p-div" onClick={handleParentClick}>
            <button className="c-div" onClick={handleChildClick}>
              Child Div
            </button>
          </div>
        </div>
      </section>
      {/* Capturing case -> Top to bottom */}
      <section className="main-div">
        <div className="g-div" onClickCapture={handleGrandParent}>
          <div className="p-div" onClickCapture={handleParentClick}>
            <button className="c-div" onClickCapture={handleChildClick}>
              Child Div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventPropagation;
