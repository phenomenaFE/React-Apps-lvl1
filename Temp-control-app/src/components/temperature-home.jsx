import { useState } from "react";
import ChangeTemp from "./changetemp";
import ButtonControl from "./Button";

function TemperatureHome() {
  const [temp, setTemp] = useState(10);

  let increment = () => {
    setTemp(temp + 10);
  };
  let decreament = () => {
    setTemp(temp - 10);
  };
  return (
    <div className="temp-bg">
      <div className="mt-4">
        <ChangeTemp temp={temp} />
        <div className="btn-group">
          <ButtonControl action={increment} title={"+"}></ButtonControl>
          <ButtonControl action={decreament} title={"-"}></ButtonControl>
        </div>
      </div>
    </div>
  );
}

export default TemperatureHome;
