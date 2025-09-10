import BackButton from "@/components/BackButton";
import FaceScan from "@/components/FaceScan";
import GalleryAccess from "@/components/GalleryAccess";
import React from "react";

const results = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center mb-50">
        <div className="absolute top-20 left-2 text-left">
          <h4 className="ml-6 text-sm font-semibold">TO START ANALYSIS</h4>
        </div>
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center lg:justify-between relative mb-40 md:mb-30 space-y-[-20px] md:space-y-0 w-full">
          <FaceScan />
          <GalleryAccess />
          <div className="absolute top-[-75px] right-7 md:top-0 md:right-8 transition-opacity duration-300 opacity-100">
            <h1 className="text-xs md:text-sm font-normal mb-1 text-left">
              Preview
            </h1>
            <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden"></div>
          </div>
        </div>
      </div>
      <div className="pt-4 md:pt-0 pb-8 bg-white sticky bottom-4 left-0">
        <BackButton />
      </div>
    </div>
  );
};

export default results;
