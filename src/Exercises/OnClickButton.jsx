function OnClickButton() {
  /* 
    let numberOfLikes = 0;
    const handleClick = () => {
        if (numberOfLikes < 5) {
        console.log(`It's not enough ${++numberOfLikes}`);
        } else {
        console.log("That's enough!");
        }
    };
  */
  /*
    let counter = 0;
    const handleClick = (name) => {
        if (counter < 3) {
        console.log(`You need more clicks ${name}`);
        counter++;
        } else {
        console.log(`That's enough ${name}`);
        }
    };
  */

  let counter = 0;

  const IncreaseCounter = (e) => {
    counter++;
    e.target.textContent = counter;
  };

  return (
    <>
      <button onClick={(e) => IncreaseCounter(e)}>{counter}</button>
    </>
  );
}

export default OnClickButton;
