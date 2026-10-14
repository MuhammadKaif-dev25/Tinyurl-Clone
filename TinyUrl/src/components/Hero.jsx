import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import History from "./History";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="flex gap-18 w-full items-center bg-[#002342] text-white p-16">
          <HeroLeft />
          <HeroRight />
        </div>
        <div className="w-full bg-[#002342] text-white px-16 pb-8">
          <History />
        </div>
      </div>
    </>
  );
};

export default Hero;
