import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 mb-3 h-[64px] mx-4">
      <div className="flex items-center justify-center">
        <Link className="text-[11px] font-bold" href="/">
          SKINSTRIC
        </Link>
        <p className="text-gray-500 text-sm ml-3">[intro]</p>
      </div>
      <div>
        <button className="bg-black text-[#FCFCFC] py-2 px-4 text-[10px]">Enter Code</button>
      </div>
    </div>
  );
};

export default Navbar;
