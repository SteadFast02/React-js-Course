import React from "react";

const Challenge1 = () => {
  return (
    <>
      <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
          name="Alice"
          age={30}
          greeting={
            <div>
              <strong>Hello This is Profile Challenge of Alice</strong>
            </div>
          }
        >
          <p>Hobbies:Reading, Hiking</p>
          <button>Contact</button>
        </ProfileCard>
        <ProfileCard
          name="Bob"
          age={25}
          greeting={
            <div>
              <strong>Hello This is Profile Challenge of Bob</strong>
            </div>
          }
        >
          <p>Hobbies:Reading, Hiking</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    </>
  );
};

export default Challenge1;

function ProfileCard(props) {
  const { name, age, greeting } = props;
  return (
    <>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>Greetings:{greeting}</p>
      <p>{props.children}</p>
    </>
  );
}
