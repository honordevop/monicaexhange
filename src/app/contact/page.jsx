import ContactCard from "@/components/ContactCard";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";

const question = {
  title: "Have a question?",
  desc: "Check out our FAQ section for tons of answers to some of our most   commonly asked questions. It’s the fastest way to get the answer you’re looking for!",
  icon: <BsFillPatchQuestionFill />,
  btnText: "Visit FAQ page",
  url: "#",
};

const message = {
  title: "Drop us a message",
  desc: "Our support team is on hand to take your queries and offer prompt resolutions to your tickets.",
  icon: <RiQuestionAnswerFill />,
  btnText: "Contact support on whatsapp",
  url: "https://api.whatsapp.com/message/4WUK5UCQBSQZJ1?autoload=1&app_absent=0",
};

const mail = {
  title: "Send us a mail",
  desc: "Do you have further queries or feedback, we are just a mail away.",
  icon: <MdAttachEmail />,
  btnText: "Reach us via Email",
  url: "mailto:abbeymonica01@gmail.com",
};
const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="Contact Us" />

      <p className="mt-24 text-2xl md:text-4xl text-center container">
        Do you have a feedback, complaint, enquiry, dispute or suggestion?
      </p>
      <div className="container flex flex-col md:flex-row gap-7 mt-20 mb-28">
        <ContactCard data={message} />
        <ContactCard data={mail} />
        <ContactCard data={question} />
      </div>
    </div>
  );
};

export default Contact;
