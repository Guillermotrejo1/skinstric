import React from 'react'
interface Props {
  onMouseOver: () => void;
  onMouseOut: () => void;
  className?: string;
}

const DiamondsDesktopRight = ({ onMouseOver, onMouseOut, className }: Props) => {
  return (
    <>
    <div className={className}>
      <div className="w-[270px] h-[270px] md:w-[450px] md:h-[450px] hidden lg:block border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 right-0 -translate-x-[-225px] -translate-y-[40%]"></div>
      <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="hidden lg:inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 right-10 -translate-y-[-30px] translate-x-[-60px] px-3 py-1">
        <span>TAKE TEST</span>
        <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 cursor-pointer group-hover:scale-110 duration-300"></div>
        <span className="absolute right-[18px] top-[8px] scale-[0.9] rotate-0 group-hover:scale-105 duration-300"> ▶ </span>
      </button>
      </div>
    </>
  )
}

export default DiamondsDesktopRight