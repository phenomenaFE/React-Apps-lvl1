import { useState } from "react";
import ButtonAction from "./ui/Button";

function Counter() {
  const [count, setCount] = useState(0);

  // logic for counter
  let incrementCounter = () => {
    setCount(count + 1);
  };
  let decreament = () => {
    setCount(count - 1);
  };
  let resetCounter = () => {
    setCount(0);
  };
  return (
    <>
      <p>number now {count}</p>
      <ButtonAction action={incrementCounter} title="Increament" />
      <ButtonAction action={decreament} title="Decreament" />
      <ButtonAction action={resetCounter} title="Reset" />
    </>
  );
}

export default Counter;
