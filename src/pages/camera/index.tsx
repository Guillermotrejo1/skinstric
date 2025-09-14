import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <div className="h-[50vh] md:h-[70.3vh] flex flex-col items-center justify-center bg-white">
        <Image
          width={400}
          height={400}
          src="/camera-icon.webp"
          alt=""
          className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer opacity-50"
        />
        <p className="text-lg mt-2 md:opacity-50">SETTING UP CAMERA...</p>
        <div>
          <div className="absolute top-[calc(50%-120px)] md:top-[calc(50%-50px)] left-1/2 -translate-x-[50%] -translate-y-1/2 w-[260px] h-[260px] md:w-[360px] md:h-[360px] animate-spin-faster rotate-190 border-3 border-[#A0A4AB] border-dotted opacity-20"></div>
          <div className="absolute top-[calc(50%-120px)] md:top-[calc(50%-50px)] left-1/2 -translate-x-[50%] -translate-y-1/2 w-[240px] h-[240px] md:w-[340px] md:h-[340px] animate-spin-faster rotate-185 border-3 border-[#A0A4AB] border-dotted opacity-30"></div>
          <div className="absolute top-[calc(50%-120px)] md:top-[calc(50%-50px)] left-1/2 -translate-x-[50%] -translate-y-1/2 w-[220px] h-[220px] md:w-[320px] md:h-[320px] animate-spin-fast border-3 border-[#A0A4AB] border-dotted opacity-40"></div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mb-8 max-w-[600px] md:max-w-full">
        <p className="mb-6 text-sm md:text-[16px]">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
        <div className="flex justify-between w-full max-w-[600px] mb-4 px-6">
          <p className="text-xs md:text-[16px]">◇ NEUTRAL EXPRESSION</p>
          <p className="text-xs md:text-[16px]">◇ FRONTAL POSE</p>
          <p className="text-xs md:text-[16px]">◇ ADEQUATE LIGHTING</p>
        </div>
      </div>
    </>
  );
};

export default index;
