import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Buttons from "./Components/Buttons";
import GetDataButton from "./Components/GetDataButton";

const App = () => {
  const [Index, setIndex] = useState(1);
  const [UserData, setUserData] = useState([]);
  const getData = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=30`,
    );
    setUserData(responce.data);
  };
  (useEffect(function () {
    getData();
  }),
    [Index]);

  let printUserData = (
    <h3 className="text-gray-400 absolute top-1/2 left-1/2 transalte-x-1/2 transalte-y-1/2">
      loading...
    </h3>
  );
  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className=" bg-black overflow-auto h-screen  text-white">
      <h1>{Index}</h1>
      <GetDataButton getData={getData} />

      <div className="flex  h-[82%] flex-wrap gap-4 p-2">{printUserData}</div>
      <Buttons Index={Index} />
    </div>
  );
};

export default App;
