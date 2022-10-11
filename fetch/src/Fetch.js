import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Fetch = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setResult(data);
          console.log(result);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1> Fetch the data</h1>

      {result.map((ele, i) => {
        return (
          <div>
            <li key={i.id}>{ele.name}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
