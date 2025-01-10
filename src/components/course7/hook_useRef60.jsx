import React, { useRef } from "react";
import "./hook_useRef60.css";
const Hook_useRef60 = () => {
  //   const email = document.getElementById("email");
  //   const password = document.getElementById("password");

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.value, password.value);
    console.log(email.current.value, password.current.value);
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={email} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={password} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Hook_useRef60;
