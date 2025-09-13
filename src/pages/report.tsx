import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Demographics {
  race: { [key: string]: number };
  age: { [key: string]: number };
  gender: { [key: string]: number };
}

type DemographicCategory = "race" | "age" | "gender";

const Report = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number>(0);
  const [demographics, setDemographics] = useState<Demographics | null>(null);
  const [selectedDemographic, setSelectedDemographic] =
    useState<DemographicCategory>("race");

  useEffect(() => {
    const storedDemographics = localStorage.getItem("demographics");
    if (storedDemographics) {
      setDemographics(JSON.parse(storedDemographics));
    }
  }, []);

  // Get sorted keys for each category
  const sortedRaces = demographics?.race
    ? Object.keys(demographics.race).sort(
        (a, b) => demographics.race[b] - demographics.race[a]
      )
    : [];
  const sortedAges = demographics?.age
    ? Object.keys(demographics.age).sort(
        (a, b) => demographics.age[a] + demographics.age[b]
      )
    : [];
  const sortedGenders = demographics?.gender
    ? Object.keys(demographics.gender).sort(
        (a, b) => demographics.gender[b] - demographics.gender[a]
      )
    : [];

  // Top values for each category
  const topValues = {
    race: sortedRaces[0] || "",
    age: demographics?.age
      ? Object.keys(demographics.age).reduce(
          (a, b) => (demographics.age[a] > demographics.age[b] ? a : b),
          ""
        )
      : "",
    gender: sortedGenders[0] || "",
  };

  // For progress bar and list
  const sortedList =
    selectedDemographic === "race"
      ? sortedRaces
      : selectedDemographic === "age"
      ? sortedAges
      : sortedGenders;

  // For progress bar label
  const progressLabel =
    selectedOption !== null && sortedList[selectedOption]
      ? sortedList[selectedOption]
      : sortedList[0] || "";

  // For progress bar value
  const progressValue =
    demographics &&
    progressLabel &&
    demographics[selectedDemographic as keyof Demographics] &&
    typeof demographics[selectedDemographic as keyof Demographics] === "object"
      ? Math.round(
          ((
            demographics[selectedDemographic as keyof Demographics] as {
              [key: string]: number;
            }
          )[progressLabel as string] || 0) * 100
        )
      : 0;

  // Update percentage when selectedOption or demographic changes
  useEffect(() => {
    setPercentage(progressValue);
  }, [progressValue, selectedOption, selectedDemographic, demographics]);

  // Handle click on category (Race, Age, Sex)
  const handleCategoryClick = (category: DemographicCategory) => {
    setSelectedDemographic(category);
    setSelectedOption(null);
  };

  // Handle click on option in the list
  const handleUpdateDemographic = (option: string) => {
    setSelectedOption(sortedList.indexOf(option));
  };

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Helper for display
  const getDisplayValue = (category: DemographicCategory, value: string) => {
    if (!demographics) return "-";
    if (category === "race") {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    if (category === "age") {
      return value;
    }
    if (category === "gender") {
      return value.toUpperCase();
    }
    return "-";
  };

  const topIndex =
    selectedOption !== null
      ? selectedOption
      : sortedList.indexOf(topValues[selectedDemographic]);

  return (
    <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
      <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
        <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col">
          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
            <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">
              A.I. ANALYSIS
            </h2>
            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
              DEMOGRAPHICS
            </h3>
            <h4 className="text-sm mt-2 leading-[24px]">
              PREDICTED RACE & AGE
            </h4>
          </div>
          <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
            <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
              {(
                [
                  { label: "RACE", value: topValues.race, category: "race" },
                  { label: "AGE", value: topValues.age, category: "age" },
                  { label: "SEX", value: topValues.gender, category: "gender" },
                ] as {
                  label: string;
                  value: string;
                  category: DemographicCategory;
                }[]
              ).map((item) => {
                // If this category is selected, show the selected value, else show the top value
                let displayValue = item.value;
                if (
                  selectedDemographic === item.category &&
                  selectedOption !== null &&
                  sortedList[selectedOption]
                ) {
                  displayValue = sortedList[selectedOption];
                }
                return (
                  <div
                    key={item.label}
                    className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t ${
                      selectedDemographic === item.category
                        ? "bg-[#1A1B1C] text-white"
                        : "bg-[#F3F3F4] hover:bg-[#E1E1E2] text-black"
                    }`}
                    onClick={() => handleCategoryClick(item.category)}
                  >
                    <p className="text-base font-semibold">
                      {getDisplayValue(item.category, displayValue) || "-"}
                    </p>
                    <h4 className="text-base font-semibold mb-1">
                      {item.label}
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                {getDisplayValue(selectedDemographic, progressLabel) || "-"}
              </p>
              <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                <svg
                  className="CircularProgressbar text-[#1A1B1C]"
                  viewBox="0 0 100 100"
                >
                  <circle
                    className="CircularProgressbar-trail"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth="2"
                    fill="transparent"
                    stroke="#e6e6e6"
                  />
                  <circle
                    className="CircularProgressbar-path"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth="2"
                    fill="transparent"
                    stroke="#1A1B1C"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl md:text-[40px] font-normal">
                    {percentage}%
                  </p>
                </div>
              </div>
              <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>
            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    {selectedDemographic.toUpperCase()}
                  </h4>
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>
                {sortedList.map((option, index) => (
                  <div
                    key={option}
                    className={`flex items-center justify-between h-[48px] px-4 cursor-pointer ${
                      topIndex === index || selectedOption === index
                        ? "bg-black text-white"
                        : "hover:bg-[#E1E1E2]"
                    }`}
                    onClick={() => handleUpdateDemographic(option)}
                  >
                    <div className="flex items-center gap-1">
                      <Image
                        width={12}
                        height={12}
                        src={
                          selectedOption === index
                            ? "/activeRadioButton.webp"
                            : "/radioButton.webp"
                        }
                        alt="Radio button"
                      />
                      <span className="font-normal text-base leading-6 tracking-tight">
                        {getDisplayValue(selectedDemographic, option)}
                      </span>
                    </div>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      {demographics &&
                      demographics[selectedDemographic as keyof Demographics] &&
                      typeof demographics[
                        selectedDemographic as keyof Demographics
                      ] === "object"
                        ? `${Math.round(
                            ((
                              demographics[
                                selectedDemographic as keyof Demographics
                              ] as { [key: string]: number }
                            )[option] || 0) * 100
                          )}%`
                        : "—"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
            <div className="flex justify-between">
              <Link href="/selecting" className="flex items-center">
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                    BACK
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6">
                    BACK
                  </span>
                </div>
              </Link>
              <Link href="/">
                <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                    HOME
                  </span>
                </div>
                <div className="hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">
                    HOME
                  </span>
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85]"></div>
                  <span className="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block">
                    ▶
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Report;
