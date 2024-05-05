import React from "react";
import Socials from "./Socials";
import { IoLocationSharp } from "react-icons/io5";
import { BsEnvelopeCheckFill } from "react-icons/bs";
import { MdPermPhoneMsg } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col mt- bg-gray-100">
      <div className="container my-14 ">
        <div className="w-full flex flex-col md:flex-row justify-start  md:justify-between items-center">
          <div className="flex-1 flex gap-20">
            <div className="flex flex-row md:flex-col gap-5 bg">
              <Link href="/" className="hidden md:block">
                <div className="relative w-[55px] h-[45px] md:w-[70px] md:h-16">
                  <Image src="/logo.png" alt="logo" fill={true} priority />
                </div>
              </Link>
              <Socials />
            </div>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-5 md:gap-20 mt-5 md:mt-0">
            <div>
              <p className="text-xl mb-1">Trade</p>
              <ul className="flex flex-col gap-1">
                <li>Buy Giftcards</li>
                <li>Sell Giftcards</li>
                <li>Real Estate Management</li>
              </ul>
            </div>

            <div>
              <p className="text-xl mb-1">Resources</p>
              <ul className="flex flex-col gap-1">
                <Link href="/terms">Terms</Link>
                <Link href="/privacy">Privacy</Link>
              </ul>
            </div>

            <div>
              <p className="text-xl mb-1">Contact Info</p>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-5 items-center">
                  <IoLocationSharp className="text-2xl" />{" "}
                  <p> Lagos, Nigeria</p>
                </li>
                <li className="flex gap-5 items-center">
                  <MdPermPhoneMsg className="text-2xl" />
                  <div>
                    <p>08147495718</p>
                    <p>08130812433</p>
                  </div>
                </li>
                <li className="flex gap-5 items-center">
                  <BsEnvelopeCheckFill className="text-2xl" />{" "}
                  <div>
                    <p>abbeymonica01@gmail.com</p>
                    <p>contact@monicaexchange.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-400 w-full flex items-center justify-center">
        <p className="py-3">Copyright © 2024 - Monica Xchng Global</p>
      </div>
    </div>
  );
};

export default Footer;
