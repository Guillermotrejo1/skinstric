import Link from "next/link";
import React from "react";

const SummaryButton = () => {
  return (
    <div className="absolute right-2 bottom-38.5 md:bottom-8 flex justify-between md:px-9 px-13">
      <Link href="/summary" aria-label="Summary" className="inset-0">
        <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] md:hidden">
          <span className="rotate-[-45deg] text-sm font-semibold">
            Sum
          </span>
        </div>
        <div className="hidden md:flex lg:flex">
          <span className="mr-8 text-sm mt-4 font-semibold">Get Summary</span>
          <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1]">
            <span className="rotate-[-45deg] text-sm font-semibold">▶</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SummaryButton;
