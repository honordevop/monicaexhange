import React from "react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsApp = () => {
  return (
    <div className="cursor-pointer rounded-lg primaryBgColor maxWidth py-2 px-3">
      <Link
        href="https://wa.me/+2348130812433"
        className="flex gap-2 items-center justify-center"
      >
        <IoLogoWhatsapp color="#47c756" className="text-4xl" />
        <p className="text-lg font-medium text-white">Trade on WhatsApp</p>
      </Link>
    </div>
  );
};

export default WhatsApp;
