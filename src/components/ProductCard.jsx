import Image from "next/image";
import React from "react";

const ProductCard = (props) => {
  return (
    <div className="w-full py-14 md:py-20 flex flex-col items-center justify-center">
      <div className="container h-max ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full h-[100vh] md:h-[50vh] rounded relative bg-gray-50">
          <div className="flex-1 h-[50vh] w-full relative md:h-full glass">
            <Image
              src={props?.image}
              alt="happy customer's image"
              fill={true}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex-1 px-6 py-5 h-full flex flex-col gap-5">
            <p className="text-4xl leading-[50px] ">{props?.title}</p>

            <div className="flex items-start gap-7">
              <div>
                {props.list?.map((item, index) => (
                  <p className="text-gray-500" key={index}>
                    {item}
                  </p>
                ))}
              </div>
              <div>
                {props.list2?.map((item, index) => (
                  <p className="text-gray-500" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* <p className="primaryBgColor rounded-lg p-2 px-4 text-white font-semibold text-center w-max">
              BITCOIN | GIFTCARDS | REAL ESTATE
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
