import React from "react";
import { useState, useRef } from "react";
// Basically useRef is used for manipulating the DOM elements in react this the react hook which manipulate elemenst without renrendeting the componenet

const Hooks = () => {
  const [data, setData] = useState(0);

  const reference = useRef();
  const reference2 = useRef();

  const handleChange = () => {};

  const handleClick = () => {
    console.log("hello");
    console.log(reference.current);
    reference.current.style.backgroundColor = "red";
  };

  return (
    <div>
      <h1> We will use Use Ref for this</h1>

      <input
        ref={reference2}
        value={data}
        style={{ backgroundColor: "yellow" }}
        type="text"
        onChange={(e) => setData(e.target.value)}
      />
      <input
        ref={reference}
        value={data}
        style={{ backgroundColor: "yellow" }}
        onChange={(e) => setData(e.target.value)}
        type="number"
      />
      <div>
        <h3> my value is :{data}</h3>
        <button onClick={() => handleChange()}> Click Text</button>
        <button onClick={() => handleClick()}>Click Number</button>
      </div>
    </div>
  );
};

export default Hooks;
