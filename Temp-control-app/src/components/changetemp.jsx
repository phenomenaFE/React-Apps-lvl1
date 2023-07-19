import { useState } from "react";

function ChangeTemp(props) {
  const { temp } = props;
  const [isHot, setIsHot] = useState(false);
  if (temp > 30) {
    return <div className={"temp-weather sun-appear"}>{temp} C</div>;
  } else {
    return <div className={"temp-weather snow-appear"}>{temp} C</div>;
  }
}

export default ChangeTemp;
