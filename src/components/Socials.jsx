import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-col gap-3 text-[30px] font-space_grotesk">
      <p className="font-bold text-[25px]">Keep in touch</p>
      <ul className="flex gap-4 ">
        <Link
          href="https://www.instagram.com/monicaexchange__/"
          target="_blank"
        >
          <FaInstagramSquare />
        </Link>
        <Link target="_blank"
      rel="noopener noreferrer" href="https://wa.me/+2348130812433" target="_blank">
          <FaWhatsappSquare />
        </Link>
        <Link href="mailto:abbeymonica01@gmail.com" target="_blank">
          <FaEnvelope />
        </Link>
      </ul>
    </div>
  );
};

export default Socials;
