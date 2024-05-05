import AboutUsCard from "@/components/AboutUsCard";
import BigMove from "@/components/BigMove";
import PageHeader from "@/components/PageHeader";
import React from "react";

const whoweare = {
  title: " WHO WE ARE",
  desc: "We are people like you. Original. Bold. Creative. Expressive. Innovative. A team of passionate forward-thinkers creating fast, secure and simple to use digital solutions for everyday people. ",
};
const ourvalues = {
  title: " OUR VALUES",
  desc: "At Monica Xchng Global we are more about the people than the numbers. In every team member and user, we recognize uniqueness and connect with it. Weaving originality into our daily practice by merging technology with desire to create a unique gliding digital experience.",
};

const vision = {
  title: "OUR VISION",
  desc: "“To lead the fastest personalised digital assets trading platform in Africa where anyone can trade securely, helping people build wealth their own way - the right way - and together, with technology rediscovering Africa with limitless possibilities.”",
};

const mission = {
  title: "OUR MISSION",
  desc: "To promote the use of all forms of digital assets as payment solutions for products and services.",
};

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="About Us" />

      <div className="container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-28">
          <AboutUsCard data={whoweare} />
          <AboutUsCard data={ourvalues} />
          <AboutUsCard data={vision} />
          <AboutUsCard data={mission} />
        </div>
      </div>
      <div className="w-full mb-28">
        <BigMove />
      </div>
    </div>
  );
};

export default About;
