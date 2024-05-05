import React from "react";

const TermsCard = (props) => {
  let desc = props?.data?.desc;

  desc = desc.replace(/<br\/>/g, "\n");
  return (
    <div className="flex flex-col gap-3 p-5">
      <h3 className="font-bold text-2xl">{props.data.title}</h3>

      <p className="leading-[30px]">{desc} </p>
    </div>
  );
};

export default TermsCard;
