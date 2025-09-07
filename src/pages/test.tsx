import Navbar from "@/components/Navbar";
import DiamondLarge from "@/components/shapes/DiamondLarge";
import DiamondMedium from "@/components/shapes/DiamondMedium";
import DiamondSmall from "@/components/shapes/DiamondSmall";
import Link from "next/link";
import React from "react";

const test = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
        <div className="absolute top-16 left-2 text-left">
          <h4 className="ml-6 text-xs font-semibold">TO START ANALYSIS</h4>
        </div>
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            Click To Type
          </p>
          <form
            className="relative z-10"
            action="javascript:throw new Error('React form unexpectedly submitted.')"
          >
            <div className="flex flex-col items-center"></div>
            <input
              type="text"
              placeholder="Introduce Yourself"
              autoComplete="off"
              autoFocus
              name="name"
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
            />
            <button type="submit" className="sr-only">
              Submit
            </button>
            <DiamondLarge />
            <DiamondMedium />
            <DiamondSmall />
          </form>
        </div>
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <Link href="/" aria-label="Back" className="inset-0">
            <div>
              <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-sm font-semibold sm:hidden">
                  Back
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default test;
