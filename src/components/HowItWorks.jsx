import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full flex items-center justify-center my-16">
      <div className="container">
        <h1 className="mb-8 text-4xl text-center">Let’s Show You How</h1>
        <p className="text-gray-500 text-center">
          Here are a few steps to proceed with Monica Xchng Global
        </p>

        <div className="flex flex-col md:flex-row gap-8 m-8">
          <div className="w-[350px]">
            <div className="w-full relative h-[50vh]">
              <Image
                src="/message.svg"
                alt="storyset svg image"
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-center my-3">
              Contact Monica Xchng Global agent for your trade and transactions.
            </p>
          </div>

          <div className="w-[350px]">
            <div className="w-full relative h-[50vh]">
              <Image
                src="/acceptterms.svg"
                alt="storyset svg image"
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-center my-3">
              Read and accept terms of trade with Monica Xchng Global providing
              adequate insurance for the transaction.
            </p>
          </div>

          <div className="w-[350px]">
            <div className="w-full relative h-[50vh]">
              <Image
                src="/options.svg"
                alt="storyset svg image"
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-center my-3">
              Provide details on trade type and your prefered transaction close
              up terms.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-[350px]">
            <div className="w-full relative h-[50vh]">
              <Image
                src="/notification.svg"
                alt="storyset svg image"
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-center my-3">
              Receive notification of your transaction through pre-selected
              channel.
            </p>
          </div>

          <div className="w-[350px]">
            <div className="w-full relative h-[50vh]">
              <Image
                src="/payout.svg"
                alt="storyset svg image"
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-center my-3">
              Complete transaction, get approved and cashout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
