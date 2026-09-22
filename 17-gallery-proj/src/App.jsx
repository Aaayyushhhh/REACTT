import axios from "axios";
import { useState } from "react";

const App = () => {
  const [UserData, setUserData] = useState([]);
  const getData = async () => {
    const responce = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30",
    );
    setUserData(responce.data);
  };

  let printUserData = "No user avialable";
  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {
      return (
        <a href={elem.url} target="_blank">
          <div key={idx}>
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </div>
        </a>
      );
    });
  }

  return (
    <div className="overflow-auto bg-black h-screen p-4 text-white">
      <button
        className="bg-green-600 active:scale-95 px-5 py-2 rounded text-white"
        onClick={getData}
      >
        GET DATA
      </button>

      <div className="flex flex-wrap gap-3">{printUserData}</div>
    </div>
  );
};

export default App;
