import { features } from "@/utils/store";
import Image from "next/image";
import React from "react";

const BigMove = () => {
  return (
    <div
      className="w-full py-24 flex flex-col items-center justify-center border border-[#e2e8f0] bg-[#eeeff0]"
      style={{
        backgroundImage: `url(/shape15.png)`,
        backgroundSize: "fill",
        backgroundPosition: "center",
        // width: "100%",
        // height: "300px", // Adjust height as needed
      }}
    >
      <div className="container h-max ">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-5 w-full h-[100vh] md:h-[50vh] rounded relative">
          <div className="flex-1 h-[50vh] w-full relative md:h-full glass">
            <Image
              src="/idan.png"
              alt="happy customer's image"
              fill={true}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex-1 px-6 py-5 h-full flex flex-col gap-5">
            <p className="text-4xl leading-[50px] ">
              Make big moves, <br /> get big bags, <br /> you are the REAL IDAN
            </p>
            <p className="text-gray-500">
              With us, every of your transactions ends with a SMILE!
            </p>
            <p className="primaryBgColor rounded-lg p-2 px-4 text-white font-semibold text-center w-max">
              BITCOIN | GIFTCARDS | REAL ESTATE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigMove;
