import { useState } from "react";

function MyOnChangeComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [text, setText] = useState("");
  const [option, setOption] = useState("Dog");
  const [check, setCheck] = useState("");

  function SetNameChangeByInput(e) {
    setName(e.target.value);
  }

  const SetQuantityByInput = (e) => {
    setQuantity(e.target.value);
  };

  const SetTextByTextArea = (e) => {
    setText(e.target.value);
  };

  const SetOptionBySelect = (e) => {
    setOption(e.target.value);
  };

  const SetCheckByRadioButton = (e) => {
    setCheck(e.target.value);
  };

  return (
    <>
      <h1>On Change example</h1>

      <input type="text" onChange={SetNameChangeByInput} />
      <p>Name: {name}</p>

      <input type="number" onChange={SetQuantityByInput} />
      <p>Quantity: {quantity}</p>

      <textarea
        placeholder="Write text here:"
        onChange={SetTextByTextArea}
      ></textarea>
      <p>Text: {text}</p>

      <select onChange={SetOptionBySelect}>
        <option>Dog</option>
        <option>Cat</option>
        <option>Parrot</option>
        <option>Rabbit</option>
      </select>
      <p>Option: {option}</p>

      <label>
        <input
          type="radio"
          value="School"
          checked={check === "School"}
          onChange={SetCheckByRadioButton}
        />
        School
      </label>
      <label>
        <input
          type="radio"
          value="Work"
          checked={check === "Work"}
          onChange={SetCheckByRadioButton}
        />
        Work
      </label>
      <p>Check: {check}</p>
    </>
  );
}

export default MyOnChangeComponent;
