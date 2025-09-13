import React, { useEffect, useRef } from "react";

const Capture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }, []);
  return (
    <>
      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-10">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
              <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
                TAKE PICTURE
              </div>
              <div className="transform hover:scale-105 ease-in-out duration-300">
                <img
                  src="/takePictureIcon.webp"
                  alt=""
                  className="w-16 h-16 cursor-pointer"
                />
              </div>
            </div>
            <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
              <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
                TO GET BETTER RESULTS MAKE SURE TO HAVE
              </p>
              <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ NEUTRAL EXPRESSION</p>
              </div>
            </div>
          </div>
          <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
            <a href="/result"></a>
            <div>
              <div className="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]">
                  BACK
                </span>
              </div>
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300">
                  ▶
                </span>
                <span className="text-sm font-semibold hidden sm:block ml-6 text-[#FCFCFC]">
                  BACK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capture;
