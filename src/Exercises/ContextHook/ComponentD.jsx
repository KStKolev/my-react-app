import { useContext } from "react";

import { UserContext } from "./ComponentA.jsx";

function ComponentD() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>ComponentD</h1>
      <span>{user}</span>
    </>
  );
}

export default ComponentD;
