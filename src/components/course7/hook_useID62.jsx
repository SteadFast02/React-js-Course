import React, { useId } from "react";
const Hook_useID62 = () => {
  const id = useId();
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor={id + "username"}>username</label>
          <input type="text" name="username" id={id + "username"} />
        </div>
        <div>
          <label htmlFor={id + "email"}>Email</label>
          <input type="text" name="email" id={id + "email"} />
        </div>
        <div>
          <label htmlFor={id + "password"}>Passwprd</label>
          <input type="text" name="password" id={id + "password"} />
        </div>
      </form>
    </div>
  );
};

export default Hook_useID62;
