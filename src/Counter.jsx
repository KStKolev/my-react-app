import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, []);

  function incrementCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={incrementCount}>Increase count</button>
    </>
  );
}

export default Counter;
