import Image from "next/image";
import React from "react";
import WhatsApp from "./WhatsApp";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col gap-7 mt-[30px] md:mt-[60px] ">
        <p className="primaryBgColor px-4 py-1 rounded-2xl text-white w-max">
          Monica Xchng Global
        </p>

        <h1 className="text-[40px] md:text-[55px] font-bold leading-[50px] md:leading-[66px] font-sans">
          THE BEST PLATFORM TO BUY AND SELL GIFT CARDS ONLINE
        </h1>
        <p className="text-gray-500">
          Turn your digital assets to profits. Monica Xchng Global is a fast
          growing customer-priority gift card trading platform linking
          profitable best rate networks to your fingertips on the go.
        </p>
        <WhatsApp />
      </div>
      <div className="flex-1 ">
        <div className="relative w-full h-[40vh] md:h-full mt-[20px]">
          <Image
            src="/heroImage3.png"
            alt="hero image"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
