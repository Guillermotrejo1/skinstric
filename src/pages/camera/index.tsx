import Image from 'next/image';
import React from 'react'

const index = () => {
    return (
      <>
        <div className="h-[70.3vh] flex flex-col items-center justify-center bg-white">
          <Image
            width={400}
            height={400}
            src="/camera-icon.webp"
            alt=""
            className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer opacity-50"
          />
          <p className="text-lg mt-2 opacity-50">SETTING UP CAMERA...</p>
          <div>
            <div className="absolute top-[calc(50%-50px)] left-1/2 -translate-x-[50%] -translate-y-1/2 w-[360px] h-[360px] md:w-[360px] md:h-[360px] animate-spin-faster rotate-190 border-3 border-[#A0A4AB] border-dotted opacity-20"></div>
            <div className="absolute top-[calc(50%-50px)] left-1/2 -translate-x-[50%] -translate-y-1/2 w-[340px] h-[340px] md:w-[340px] md:h-[340px] animate-spin-faster rotate-185 border-3 border-[#A0A4AB] border-dotted opacity-30"></div>
            <div className="absolute top-[calc(50%-50px)] left-1/2 -translate-x-[50%] -translate-y-1/2 w-[320px] h-[320px] md:w-[320px] md:h-[320px] animate-spin-fast border-3 border-[#A0A4AB] border-dotted opacity-40"></div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mb-8">
          <p className="mb-6">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
          <div className="flex justify-between w-full max-w-[600px] mb-4">
            <h3 className="flex items-center before:content-['◇'] before:text-[20px] before:mr-2 before:text-[#1A1B1C]">
              NEUTRAL EXPRESSION
            </h3>
            <h3 className="flex items-center before:content-['◇'] before:text-[20px] before:mr-2 before:text-[#1A1B1C]">
              FRONTAL POSE
            </h3>
            <h3 className="flex items-center before:content-['◇'] before:text-[20px] before:mr-2 before:text-[#1A1B1C]">
              ADEQUATE LIGHTING
            </h3>
          </div>
        </div>
      </>
    );
}

export default index