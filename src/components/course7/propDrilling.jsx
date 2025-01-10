import React from "react";

const PropDrilling = () => {
  return (
    <div>
      <section>
        <h1>Here the Prop Drilling Start</h1>
        <GrandParent data={"data goes to GrandParent"} />
      </section>
    </div>
  );
};

const GrandParent = (props) => {
  return (
    <section>
      <h2>GrandParent Component --- {props.data}</h2>
      <Parent data={props.data} />
    </section>
  );
};

const Parent = (props) => {
  return (
    <section>
      <h2>Parent Component --- {props.data}</h2>
      <Child data={props.data} />
    </section>
  );
};

const Child = (props) => {
  return (
    <section>
      <h2>Child Component --- {props.data}</h2>
      <GrandChild data={props.data} />
    </section>
  );
};

const GrandChild = (props) => {
  return (
    <section>
      <h2>GrandChild Component --- {props.data}</h2>
    </section>
  );
};

export default PropDrilling;
