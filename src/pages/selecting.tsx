import BackButton from "@/components/BackButton";
import DiamondLarge from "@/components/shapes/DiamondLarge";
import DiamondMedium from "@/components/shapes/DiamondMedium";
import DiamondSmall from "@/components/shapes/DiamondSmall";
import SummaryButton from "@/components/SummaryButton";
import React from "react";

const selecting = () => {
  return (
    <>
      <div className="absolute top-10 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">
          A.I. ANALYSIS
        </h1>
        <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
          A.I. has estimated the following. <br /> Fix estimated information if
          needed.
        </p>
      </div>
      <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <DiamondSmall/>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <DiamondMedium/>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
              <DiamondLarge/>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
            <div className="flex items-center justify-center col-start-2">
              <a href="/summary">
              <button className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300">
                <span className="transform -rotate-45">Demographics</span>
              </button>
              </a>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-1">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Cosmetic Concerns</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-2 col-start-3">
              <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                <span className="transform -rotate-45">Skin Type Details</span>
              </button>
            </div>
            <div className="flex items-center justify-center row-start-3 col-start-2">
              <button className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300">
                <span className="transform -rotate-45">Weather</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-12 pb-8 bg-white sticky md:static bottom-40 mb-0 md:mb-0">
          <div className="flex justify-between max-w-full mx-auto px-13 md:px-9">
            <BackButton/>
            <SummaryButton/>
          </div>
        </div>
      </div>
    </>
  );
};

export default selecting;

//todo ** fix the buttons on mobile and adde the animation to the selected triangles on hover