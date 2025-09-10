import React from 'react'
import ResultDiamondLarge from './ResultDiamondLarge'
import ResultDiamondMedium from './ResultDiamondMedium'
import ResultDiamondSmall from './ResultDiamondSmall'
import Image from 'next/image'

const GalleryAccess = () => {
  return (
        <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
          <div className="w-[220px] h-[220px] md:w-[482px] md:h-[482px]">
            <ResultDiamondLarge/>
            <ResultDiamondMedium/>
            <ResultDiamondSmall/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image width={100} height={100} src="/gallery-icon.webp" alt='' className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"/>
              <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
                <p className="text-xs md:text-sm font-normal mt-1 leading-[24px] text-right">
                  ALLOW A.I <br /> ACCESS GALLERY
                </p>
                <Image width={100} height={100} src="/ResGalleryLine.webp" alt='' className='absolute hidden md:block md:right-[143px] md:top-[20px]'/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default GalleryAccess