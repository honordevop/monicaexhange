import Image from "next/image";
import React from "react";

const ComfortTrade = () => {
  return (
    <div className="w-full my-24 flex flex-col items-center justify-center">
      <div className="container h-max">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full bg-[#140b74] h-[100vh] md:h-[55vh]">
          <div className="flex-1 h-full w-full relative md:h-full">
            <Image
              src="/exchanges.png"
              alt="exchange hand image"
              fill={true}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex-1 bg-white px-6 py-5 h-full">
            <p className="text-3xl">
              Outstanding Features on Monica Xchng Global
            </p>
            <ul className="my-4 list-disc flex flex-col gap-3 ml-5">
              <li>Trade from your comform anywhere, anytime</li>
              <li>Quick delivery and fast payout</li>
              <li>Enjoy swift, safe and reliable transaction</li>
              <li>Transact with ease and spend with full confidence</li>
            </ul>
            <p className="primaryBgColor rounded-md p-2 text-white font-semibold text-center">
              Trade all digital asset with us today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortTrade;
