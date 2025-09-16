import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BackButton = () => {
  const router = useRouter();
  const [isClientSide, setIsClientSide] = useState(false);
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  const handleBackClick = () => {
    if (!isClientSide) return;
    if (router.pathname === "/selecting") {
      router.push("/results");
    } else if (router.pathname === "/results") {
      router.push("/test");
    } else if (router.pathname === "/test") {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <div
      onClick={handleBackClick}
      className="absolute left-2 bottom-38.5 md:bottom-8 flex justify-between md:px-9 px-13 cursor-pointer"
    >
      <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] md:hidden">
        <span className="rotate-[-45deg] text-sm font-semibold md:hidden">
          Back
        </span>
      </div>
      <div className="hidden md:flex lg:flex">
        <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1]">
          <span className="rotate-[-225deg] text-sm font-semibold">▶</span>
        </div>
        <span className="ml-8 text-sm mt-4 font-semibold">BACK</span>
      </div>
    </div>
  );
};

export default BackButton;
