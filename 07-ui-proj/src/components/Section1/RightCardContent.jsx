import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute p-10 flex flex-col justify-between top-0 left-0 h-full w-full">
      <h2 className="bg-white text-2xl font-bold rounded-full text-black h-10 w-10 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="  text-xl leading-relaxed text-white mb-6 font-['Inter']">
          {props.intro}
        </p>
        <div className="flex justify-between">
          <button className="px-7 py-2.5 bg-white text-black text-sm font-medium rounded-full shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer">
            {props.tag}
          </button>
          <button className="bg-white text-black font-medium px-4 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
