import React from "react";

const EventAsProps24 = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };
  const HandleHover = () => {
    alert(`Hey Thanks for Hovering`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Event is continue from welcome user")}
        onMouseEnter={HandleHover}
      />
    </>
  );
};

export default EventAsProps24;

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    alert("Hey user, welcome in handleGreeting");
    console.log("Hey user, welcome");
    props.onClick();
  };
  return (
    <>
      <button style={{ color: "white" }} onClick={props.onClick}>
        {" "}
        Click{" "}
      </button>
      <button style={{ color: "white" }} onMouseEnter={props.onMouseEnter}>
        {" "}
        Hover me{" "}
      </button>
      <button style={{ color: "white" }} onClick={handleGreeting}>
        Greeting
      </button>
    </>
  );
};
