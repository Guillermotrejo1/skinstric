import React from "react";
import ResultDiamondLarge from "./ResultDiamondLarge";
import ResultDiamondMedium from "./ResultDiamondMedium";
import ResultDiamondSmall from "./ResultDiamondSmall";
import Image from "next/image";

const GalleryAccess = () => {
  return (
    <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
      <div className="w-[220px] h-[220px] md:w-[482px] md:h-[482px]">
        <ResultDiamondLarge />
        <ResultDiamondMedium />
        <ResultDiamondSmall />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/gallery-icon.webp"
            alt=""
            className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
          />
          <div className="absolute top-[80%] top md:top-[70%] md:left-[20px] translate-y-[-10px]">
            <p className="text-xs md:text-sm font-normal mt-5 md:mt-0 leading-[24px] text-right">
              ALLOW A.I <br /> ACCESS GALLERY
              <div className="">
                <Image
                  width={60}
                  height={100}
                  src="/ResGalleryLine.webp"
                  alt=""
                  className="absolute hidden md:block md:right-[-67px] md:top-[-45px]"
                />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAccess;
