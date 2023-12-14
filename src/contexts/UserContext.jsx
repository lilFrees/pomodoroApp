/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const UserProvider = function (props) {
  const [username, setUsername] = useState(localStorage.getItem("user") || "");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
