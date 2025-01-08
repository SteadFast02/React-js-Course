import React, { useState } from "react";

const Short_circuit43 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <section>
      <h1>Welcome to the ShortCircuit Evaluation</h1>
      {isLoggedIn && <p>You are logged in!</p>}
      {user ? `Hello ${user}` : <p>Please logged in!</p>}
      <div className="grid-three-cols">
        <button
          style={{ color: "white", padding: "1rem", marginRight: "10px" }}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Toggle Login State
        </button>
        <button
          onClick={() => setUser("Achal Gupta")}
          style={{ color: "white", padding: "1rem", marginRight: "10px" }}
        >
          Set User
        </button>
        <button
          onClick={() => setUser("")}
          style={{ color: "white", padding: "1rem", marginRight: "10px" }}
        >
          Clear User
        </button>
      </div>
    </section>
  );
};

export default Short_circuit43;
