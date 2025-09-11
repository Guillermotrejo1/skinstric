import Image from "next/image";
import React, { useState } from "react";

const Report = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number>(0); // Initialize percentage state

  const races = [
    { name: "Southeast Asian", confidence: "73%" },
    { name: "White", confidence: "11%" },
    { name: "Latino Hispanic", confidence: "10%" },
    { name: "Black", confidence: "4%" },
    { name: "South Asian", confidence: "0%" },
    { name: "East Asian", confidence: "0%" },
    { name: "Middle Eastern", confidence: "0%" },
  ];

  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Calculate the offset based on percentage

  return (
    <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
      <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
        <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col">
          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
            <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]"> A.I. ANALYSIS </h2>
            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter"> DEMOGRAPHICS </h3>
            <h4 className="text-sm mt-2 leading-[24px]"> PREDICTED RACE & AGE </h4>
          </div>
          <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
            <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
              <div className="p-3 cursor-pointer bg-[#1A1B1C] text-white flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">Southeast Asian</p>
                <h4 className="text-base font-semibold mb-1">RACE</h4>
              </div>
              <div className="p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">30-39</p>
                <h4 className="text-base font-semibold mb-1">AGE</h4>
              </div>
              <div className="p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">MALE</p>
                <h4 className="text-base font-semibold mb-1">SEX</h4>
              </div>
            </div>
            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2"> Southeast Asian </p>
              <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                <svg className="CircularProgressbar text-[#1A1B1C]" viewBox="0 0 100 100">
                  <circle className="CircularProgressbar-trail" cx="50" cy="50" r={radius} strokeWidth="2" fill="transparent" stroke="#e6e6e6" />
                  <circle className="CircularProgressbar-path" cx="50" cy="50" r={radius} strokeWidth="2" fill="transparent" stroke="#1A1B1C" 
                    strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl md:text-[40px] font-normal"> {percentage}% </p>
                </div>
              </div>
              <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>
            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2"> RACE </h4>
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2"> A.I. CONFIDENCE </h4>
                </div>
                {races.map((race, index) => (
                  <div key={index} className={`flex items-center justify-between h-[48px] px-4 cursor-pointer ${selectedOption === index ? "bg-black text-white" : "hover:bg-[#E1E1E2]"}`} 
                    onClick={() => {
                      setSelectedOption(index);
                      setPercentage(parseInt(race.confidence)); // Update percentage based on selected race
                    }}>
                    <div className="flex items-center gap-1">
                      <Image width={12} height={12} src="/activeRadioButton.webp" alt="Radio button" />
                      <span className="font-normal text-base leading-6 tracking-tight"> {race.name} </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight"> {race.confidence} </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
            <div className="flex justify-between">
              <a href="/select" className="flex items-center">
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden"> BACK </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300"> ▶ </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6"> BACK </span>
                </div>
              </a>
              <a href="/se">
                <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden"> HOME </span>
                </div>
                <div className="hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5"> HOME </span>
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85]"></div>
                  <span className="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block"> ▶ </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Report;
