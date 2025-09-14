import React, { useEffect, useState } from "react";
import Image from "next/image";
import ResultDiamondLarge from "./ResultDiamondLarge";
import ResultDiamondMedium from "./ResultDiamondMedium";
import ResultDiamondSmall from "./ResultDiamondSmall";
import { useRouter } from "next/router";

interface FaceScanProps {
  onCameraPermissionChange: (value: boolean) => void;
}

const FaceScan: React.FC<FaceScanProps> = ({ onCameraPermissionChange }) => {
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

 const handleFaceScanClick = () => {
  setShowToast(true);
};
useEffect(() => {
  if (showToast) {
    onCameraPermissionChange(true);
  } else {
    onCameraPermissionChange(false);
  }
}, [showToast, onCameraPermissionChange]);

  
  const handleAllow = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        console.log("Camera access granted");
        setShowToast(false);
        onCameraPermissionChange(false);
        router.push("/camera");
        setTimeout(() => {
          router.push("/camera/capture");
        }, 3000);
      })
      .catch((error) => {
        console.error("Camera access denied", error);
        setShowToast(false);
        onCameraPermissionChange(false);
      });
  };


  const handleDeny = () => {
    console.log("Camera access denied");
    setShowToast(false);
    onCameraPermissionChange(false);
  };

  return (
    <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center mb-2">
      <div className="w-[220px] h-[220px] md:w-[482px] md:h-[482px]">
        <ResultDiamondLarge />
        <ResultDiamondMedium />
        <ResultDiamondSmall />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            width={400}
            height={400}
            src="/camera-icon.webp"
            alt=""
            className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
            onClick={handleFaceScanClick}
          />
          <div className="absolute bottom-0 right-[90px] top-[90%] md:top-[30%] md:right-[-10px] translate-y-[-20px]">
            <p className="text-xs md:text-sm font-normal leading-[24px] text-left">
              ALLOW A.I <br /> TO SCAN YOUR FACE
            </p>
            <Image
              width={70}
              height={88}
              src="/resScanLine.webp"
              alt=""
              className="absolute hidden md:block md:right-[138px] md:top-4"
            />
          </div>
        </div>
      </div>

      {showToast && (
        <div className="absolute md:top-[43%] md:left-[360px] w-[352px] z-50">
          <div className="bg-[#1A1B1C] pt-4 pb-2">
            <h2 className="text-[#FCFCFC] text-left font-semibold mb-12 leading-[24px] pl-4">
              ALLOW A.I. TO ACCESS YOUR CAMERA
            </h2>
            <div className="flex mt-4 border-t border-[#FCFCFC] pt-2">
              <button className="px-7 md:translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-500" onClick={handleDeny}>
                DENY
              </button>
              <button className="px-5 md:translate-x-45 text-[#FCFCFC] font-semibold text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-300" onClick={handleAllow}>
                ALLOW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceScan;
