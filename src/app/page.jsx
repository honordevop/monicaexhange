import BestTrade from "@/components/BestTrade";
import BigMove from "@/components/BigMove";
import ComfortTrade from "@/components/ComfortTrade";
import Exchange from "@/components/Exchange";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="container mt-[90px]">
        <Hero />
        <Features />
      </div>
      <Exchange />
      <ComfortTrade />
      <HowItWorks />
      <BigMove />
      <BestTrade />
    </div>
  );
}
