import React, { useState } from "react";

function UpdateArray() {
  const [array, setUpdateToArray] = useState(["Apple", "Banana", "Pineapple"]);

  function addElementToArray() {
    const newElement =
      document.getElementsByClassName("addElementInput")[0].value;
    setUpdateToArray((a) => [...a, newElement]);
  }

  function removeElementFromArray(index) {
    setUpdateToArray(array.filter((_, i) => i !== index));
  }

  let arrayToPrint = array.map((a, index) => (
    <li key={index} onClick={() => removeElementFromArray(index)}>
      {a}
    </li>
  ));

  return (
    <>
      <div>
        <ul>{arrayToPrint}</ul>
        <input type="text" className="addElementInput" />
        <button onClick={addElementToArray}>Add element</button>
      </div>
    </>
  );
}

export default UpdateArray;
