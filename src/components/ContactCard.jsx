import Link from "next/link";
import React from "react";

const ContactCard = (props) => {
  return (
    <div className="flex flex-col gap-5 bg-slate-300 p-8 h-[65vh] justify-between rounded-lg shadow-lg flex-1">
      <p className="text-6xl">{props.data.icon}</p>
      <p className="text-xl font-bold ">{props.data.title} </p>
      <p className="text-lg">{props.data.desc}</p>

      <Link target="_blank"
      rel="noopener noreferrer"
        className="bg-blue-400 py-2 px-4 text-white rounded-md text-center"
        href={props.data.url}
      >
        {props.data.btnText}{" "}
      </Link>
    </div>
  );
};

export default ContactCard;
