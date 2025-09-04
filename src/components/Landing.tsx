import React from "react";
import DiamondsMobile1 from "./shapes/DiamondsMobile1";
import DiamondsMobile2 from "./shapes/DiamondsMobile2";

const Landing = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative -translate-y-30">
      <div className="">
        <DiamondsMobile1 />
        <DiamondsMobile2 />
      </div>
      <div className="absolute flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-6xl lg:text-[100px] text-center">
          Sophisticated <br /> skincare
        </h1>
        <p className="text-[12px] font-semibold text-center text-[#1A1B1C83] mt-2 max-w-[220px] mb-2 lg:hidden">
          Skinstric developed an A.I. that creates a highly-personalized routine
          tailored to what your skin needs.
        </p>
        <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
          <span className="text-[12px] font-bold cursor-pointer lg:hidden">
            Enter Experience
          </span>
          <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer flex items-center justify-center lg:hidden">
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              className="fill-current text-black -rotate-45"
            >
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </button>
      </div>
      <p className="absolute hidden lg:block left-4 bottom-4 ml-6 text-left text-lg font-semibold text-[#1a1b1c] max-w-[220px] lg:max-w-[300px]">
          Skinstric developed an A.I. that creates a highly-personalized routine
          tailored to what your skin needs.
        </p>
    </div>
  );
};

export default Landing;
