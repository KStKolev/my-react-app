import ComponentB from "./ComponentB.jsx";
import { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [name, setName] = useState("Kolio");

  return (
    <>
      <h1>Component A</h1>
      <UserContext.Provider value={name}>
        <ComponentB user={name} />
      </UserContext.Provider>
    </>
  );
}

export default ComponentA;
