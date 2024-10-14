import { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    name: "Kalinka",
    make: "Peugeot",
    model: "309",
  });

  const ChangeName = (e) => {
    setCar((c) => ({ ...c, name: e.target.value }));
  };

  const ChangeMake = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };

  const ChangeModel = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <>
      <h2>
        Your favourite car is {car.name}, which is a {car.make} {car.model}
      </h2>
      <input type="text" value={car.name} onChange={ChangeName} />
      <input type="text" value={car.make} onChange={ChangeMake} />
      <input type="text" value={car.model} onChange={ChangeModel} />
    </>
  );
}

export default UpdateObject;
