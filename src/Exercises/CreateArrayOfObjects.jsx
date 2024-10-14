import React, { useState } from "react";

function CreateArrayOfObjects() {
  const [car, setCar] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  function setCarYear(event) {
    setYear(event.target.value);
  }

  function setCarMake(event) {
    setMake(event.target.value);
  }

  function setCarModel(event) {
    setModel(event.target.value);
  }

  function createCar() {
    const newMake = document.getElementsByClassName("carMake")[0].value;

    const newCar = {
      year: year,
      make: newMake,
      model: model,
    };

    setCar((c) => (c = [...car, newCar]));

    setYear((y) => (y = new Date().getFullYear()));
    setMake((m) => (m = ""));
    setModel((m) => (m = ""));
  }

  function removeCar(index) {
    setCar(car.filter((_, i) => i !== index));
  }

  return (
    <>
      <ul>
        {car.map((c, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {c.year} {c.make} {c.model}
          </li>
        ))}
      </ul>

      <br />
      <input
        type="number"
        className="carYear"
        value={year}
        onChange={setCarYear}
      />
      <br />
      <input
        type="text"
        value={make}
        className="carMake"
        onChange={setCarMake}
      />
      <br />
      <input
        type="text"
        value={model}
        className="carModel"
        onChange={setCarModel}
      />
      <br />
      <button onClick={createCar}>Create a car</button>
    </>
  );
}

export default CreateArrayOfObjects;
