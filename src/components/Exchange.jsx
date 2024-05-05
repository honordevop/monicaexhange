import { exchanges } from "@/utils/store";
import React from "react";

const Exchange = () => {
  return (
    <div className="bg-gray-100 w-full flex flex-col items-center">
      <div className="container my-16">
        <h1 className="mb-16 text-4xl text-center">We Trade and Exchange</h1>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between w-full ">
          {exchanges.map((item) => (
            <div
              className="w-[300px] rounded-tl-3xl rounded-br-3xl border-[1px] border-blue-400"
              key={item.id}
            >
              <div className="bg-blue-600 text-white font-bold text-center py-2 rounded-tl-3xl">
                {item.title}{" "}
              </div>
              <ul className="flex flex-col items-center gap-2 my-6 text-xl font-semibold">
                {item.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exchange;
