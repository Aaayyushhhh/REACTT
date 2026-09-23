import React from "react";

const Buttons = (props) => {
  return (
    <div className="flex justify-center gap-6 items-centre p-4">
      <button
        style={{ opacity: props.Index == 1 ? 0.5 : 1 }}
        onClick={() => {
          if (Index > 1) {
            setIndex(Index - 1);
            setUserData([]);
          }
        }}
        className="bg-amber-400  text-black  text-sm active:scale-95 rounded px-4 py-2 font-semibold"
      >
        Prev
      </button>
      <h4>Page{props.Index}</h4>
      <button
        onClick={() => {
          setIndex(Index + 1);
          setUserData([]);
        }}
        className="bg-amber-400 text-black text-sm active:scale-95 rounded px-4 py-2 font-semibold"
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
