import Link from "next/link";
import React from "react";

const ProceedButton = () => {
  return (
  <div
    className="absolute right-10 md:right-30 w-full bottom-36 md:bottom-8 flex justify-between md:px-9 px-13 fade-in-jump"
  >
    <Link href="/results" aria-label="Proceed" className="inset-0">
      <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] md:hidden">
        <span className="rotate-[-45deg] text-xs font-semibold md:hidden">
          PROCEED
        </span>
      </div>
      <div className="hidden md:flex lg:flex items-center">
        <span className="mr-5 text-sm mt-3 font-semibold">PROCEED</span>
        <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1]">
          <span className="rotate-[-45deg] text-sm font-semibold">▶</span>
        </div>
      </div>
    </Link>
  </div>
);
}

export default ProceedButton;
