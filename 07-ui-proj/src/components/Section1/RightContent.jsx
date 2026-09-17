import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div
      id="right"
      className="p-6 flex gap-10 overflow-x-auto justify-between h-full w-2/3"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            id={idx}
            key={idx}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
