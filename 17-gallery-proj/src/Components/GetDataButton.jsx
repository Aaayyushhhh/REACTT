import React from "react";

const GetDataButton = (props) => {
  return (
    <button
      className="bg-green-600 active:scale-95 px-5 py-2 rounded text-white"
      onClick={props.getData}
    >
      GET DATA
    </button>
  );
};

export default GetDataButton;
