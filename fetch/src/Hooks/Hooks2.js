import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Hooks2 = () => {
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .get("http://139.59.14.6:8000/api/v1/order")
      .then((res) => setResult(res.data.data));
    console.log(result);
  }, []);

  return result && result.map((ele, i) => <h3 key={ele._id}> {ele.city}</h3>);
};

export default Hooks2;
