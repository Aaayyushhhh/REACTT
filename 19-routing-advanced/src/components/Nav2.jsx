import React from "react";
import { useNavigate } from "react-router-dom";

const Nav2 = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 py-3 bg-cyan-700 ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-400 px-5 py-4 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-red-400 px-5 py-4 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
    </div>
  );
};

export default Nav2;
