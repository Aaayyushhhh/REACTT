import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0  w-80 overflow-hidden rounded-4xl relative">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />
    </div>
  );
};

export default RightCard;
