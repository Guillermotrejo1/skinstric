import React from 'react'
import Image from 'next/image'
import ResultDiamondLarge from './ResultDiamondLarge'
import ResultDiamondMedium from './ResultDiamondMedium'
import ResultDiamondSmall from './ResultDiamondSmall'

const FaceScan = () => {
  return (
        <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center mb-2">
          <div className="w-[220px] h-[220px] md:w-[482px] md:h-[482px]">
            <ResultDiamondLarge/>
            <ResultDiamondMedium/>
            <ResultDiamondSmall/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image width={400} height={400} src="/camera-icon.webp" alt='' className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"/>
              <div className="absolute bottom-0 right-[90px] top-[90%] md:top-[30%] md:right-[-10px] translate-y-[-20px]">
                <p className="text-xs md:text-sm font-normal leading-[24px] text-left">
                  ALLOW A.I <br /> TO SCAN YOUR FACE
                </p>
                <Image width={70} height={88} src="/resScanLine.webp" alt='' className='absolute hidden md:block md:right-[138px] md:top-4'/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FaceScan