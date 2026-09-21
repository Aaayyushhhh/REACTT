import React, { useState } from "react";
import axios from "axios";

const App = () => {
  // async function getData() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1", //fetch function
  //   );
  //   console.log(response);
  // }

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1", //with help of fetch
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };

  // const getData = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos/1", //axios ki help se
  //   );
  //   console.log((await response).data);
  // };

  const [data, setdata] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100",
    );
    setdata(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3>hello{idx}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
