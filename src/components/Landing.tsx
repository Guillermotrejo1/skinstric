import React, { useState } from "react";
import DiamondsMobile1 from "./shapes/DiamondsMobile1";
import DiamondsMobile2 from "./shapes/DiamondsMobile2";
import DiamondsDesktopLeft from "./shapes/DiamondsDesktopLeft";
import DiamondsDesktopRight from "./shapes/DiamondsDesktopRight";

const Landing = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const handleMouseOverLeft = () => {
    setHoveredButton("left");
  };
  const handleMouseOverRight = () => {
    setHoveredButton("right");
  };
  const handleMouseOut = () => {
    setHoveredButton(null);
  };
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center relative -translate-y-30">
      <div className="">
        <DiamondsMobile1 />
        <DiamondsMobile2 />
      </div>
      <div className="absolute flex flex-col items-center justify-center h-full">
        <h1
          className={`text-5xl md:text-6xl lg:text-[100px] transition-transform duration-700 ease-out ${
            hoveredButton === "left"
              ? "translate-x-80"
              : hoveredButton === "right"
              ? "-translate-x-80"
              : "translate-x-0 text-center"
          }`}
        >
          <div className="whitespace-nowrap">
            <span
              className={`block transition-all duration-300 ${
                hoveredButton === "left"
                  ? "text-right"
                  : hoveredButton === "right"
                  ? "text-left"
                  : "text-center"
              }`}
            >
              Sophisticated
            </span>
            <span
              className={`block transition-all duration-500 delay-150 ${
                hoveredButton === "left"
                  ? "text-right"
                  : hoveredButton === "right"
                  ? "text-left"
                  : "text-center"
              }`}
            >
              skincare
            </span>
          </div>
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
      <p className="absolute hidden lg:block left-0 bottom-4 ml-2 text-left text-lg text-[#1a1b1c] max-w-[220px] lg:max-w-[300px] leading-4.5">
        Skinstric developed an A.I. that creates a highly-personalized routine
        tailored to what your skin needs.
      </p>
      <DiamondsDesktopLeft
        onMouseOver={handleMouseOverLeft}
        onMouseOut={handleMouseOut}
        className={`transition-opacity duration-300 ${
          hoveredButton === "right" ? "opacity-0 invisible" : ""
        }`}
      />
      <DiamondsDesktopRight
        onMouseOver={handleMouseOverRight}
        onMouseOut={handleMouseOut}
        className={`transition-opacity duration-300 ${
          hoveredButton === "left" ? "opacity-0 invisible" : ""
        }`}
      />
    </div>
  );
};

export default Landing;
