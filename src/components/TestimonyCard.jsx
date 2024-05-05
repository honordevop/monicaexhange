import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonyCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((item, i) => (
        <div key={i} className="shadow-lg p-4 flex flex-col gap-4">
          <FaQuoteLeft className="text-4xl text-slate-400" />
          <div>{item.testimony} </div>
          <div className="w-full text-right">
            <p className="text-sm">{item?.name} </p>
            <p className="text-sm">{item?.role} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonyCard;
