import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BackButton = () => {
  const router = useRouter();
  const [isClientSide, setIsClientSide] = useState(false);
  useEffect(() => {
    setIsClientSide(true);
  }, []);
  const handleBackClick = () => {
    if (isClientSide) {
      router.back();
    }
  };
  return (
    <div
      onClick={handleBackClick}
      className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13"
    >
      <Link href="/" aria-label="Back" className="inset-0">
        <div>
          <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
            <span className="rotate-[-45deg] text-sm font-semibold sm:hidden">
              Back
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
