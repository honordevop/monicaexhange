import React from "react";

const PrivacyCard = (props) => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <h3 className="font-bold text-2xl">{props.data?.title}</h3>

      <p className="leading-[30px]">{props.data?.desc} </p>
    </div>
  );
};

export default PrivacyCard;
