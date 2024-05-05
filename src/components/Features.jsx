import { features } from "@/utils/store";
import React from "react";

const Features = () => {
  return (
    <div className="container my-20">
      <h1 className="my-12 text-4xl text-center">Secure, Fast and Reliable.</h1>
      <div className="flex gap-7 flex-wrap">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 border-dashed border-[1px] rounded-md border-blue-400 w-[300px] p-5 items-center justify-center hover:bg-slate-300 cursor-pointer"
          >
            <div className="text-6xl text-blue-500">{item.icon} </div>
            <h3 className="text-lg font-semibold text-center">{item.title} </h3>
            <p className="text-center text-gray-500">{item.desc} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
