import React from "react";
import { useState } from "react";
const Child = (props) => {
  const [data, setData] = useState();
  const [raw, setRaw] = useState();

  const handleSubmit = () => {
    setData("User Clicked");
    props.getData(data);
  };

  const handleClick = () => {
    setRaw("newRaw");
    props.clickRaw(raw);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Click Me</button>

      <button onClick={handleClick}>Raw Click</button>
    </div>
  );
};

export default Child;
