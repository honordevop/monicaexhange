import React from "react";

const AboutUsCard = (props) => {
  return (
    <div className="flex flex-col gap-3 p-5 shadow-xl">
      <h3 className="font-bold text-2xl">{props.data.title}</h3>

      <p>{props.data.desc} </p>
    </div>
  );
};

export default AboutUsCard;
