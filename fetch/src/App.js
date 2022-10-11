import React from "react";
// import Hooks from "./Hooks/Hooks";
import Hooks2 from "./Hooks/Hooks2";
import "./App.css";
// import Child from "./Child";
// import Fetch from "./Fetch";
const App = () => {
  // const getData = (data) => {
  //   alert(data);
  // };

  // const clickRaw = (raw) => {
  //   alert(raw);
  // };

  return (
    <div className="Container">
      {/* <h1> Data Fetching</h1> */}
      {/* <Fetch /> */}
      {/* <Child getData={getData} clickRaw={clickRaw} /> */}
      {/* <Hooks /> */}
      <Hooks2 />
    </div>
  );
};

export default App;
