import React, { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [input, updateInput] = useState("");

  const setListOnChange = (e) => {
    updateInput(e.target.value);
  };

  function addList() {
    if (input.trim() != "") {
      setList((l) => (l = [...list, input]));
      updateInput("");
    }
  }

  function removeList(index) {
    setList(list.filter((_, i) => i !== index));
  }

  function upList(index) {
    if (index > 0) {
      const updatedList = [...list];
      [updatedList[index], updatedList[index - 1]] = [
        updatedList[index - 1],
        updatedList[index],
      ];
      setList(updatedList);
    }
  }

  function downList(index) {
    if (index < list.length) {
      const updatedList = [...list];
      [updatedList[index], updatedList[index + 1]] = [
        updatedList[index + 1],
        updatedList[index],
      ];
      setList(updatedList);
    }
  }

  const printedList = list.map((l, index) => (
    <>
      <li key={index}>{l}</li>
      <button onClick={() => removeList(index)}>Delete</button>
      <button onClick={() => upList(index)}>Up</button>
      <button onClick={() => downList(index)}>Down</button>
    </>
  ));

  return (
    <>
      <div>
        <input
          type="text"
          onChange={setListOnChange}
          value={input}
          placeholder="Enter a task..."
        />
        <button onClick={addList}>Add</button>
        <ul>{printedList}</ul>
      </div>
    </>
  );
}

export default ToDoList;
