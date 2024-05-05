import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full py-28 flex flex-col items-center justify-center ">
      <div className="container h-max ">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-5 w-full h-[100vh] md:h-[50vh] rounded relative">
          <div className="flex-1 h-[50vh] w-full relative md:h-full glass">
            <Image
              src="/bannerImage.png"
              alt="happy customer's image"
              fill={true}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex-1 px-6 py-5 h-full flex flex-col gap-5">
            <p className="text-4xl leading-[50px] ">
              Get only the best offers today with Monica Exchange
            </p>
            <p className="text-gray-500">
              We give you an unbeatable premium rate for BITCOINS & GIFTCARDS
            </p>
            <p className="text-gray-500">
              We provide a trusted and secure digital assets transaction
              mechanism that does not disappoint.
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

export default Banner;
