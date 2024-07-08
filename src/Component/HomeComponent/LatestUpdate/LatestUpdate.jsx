import React from 'react'
import LatestUpdateImg from '../../../assets/LatestUpdateImg.png'
import Overlay from '../../CommonComponent/Overlay'
import Button from '../../CommonComponent/Button'

const LatestUpdate = () => {
  return (
    <>
    <div className='pt-[123px] pb-[66px]'>

      <div className="container mx-auto">
        <div className='w-full relative'>
          <picture>
            <img 
              src={LatestUpdateImg} 
              alt={LatestUpdateImg} 
              className='w-[400] h-[400px]'
            />
          </picture>
          <div className='flex justify-center items-center'>
              <div className={'absolute top-1/2'}>
                <p className=''>
                  Get Latest Update By Subscribe 0ur Newsletter
                </p>
                  <Button
                    className={'rounded-sm bg-button_Color w-[170px] md:py-2 md:px-[18px] lg:px-[40px] lg:py-4 sm:py-2 sm:px-2 px-3 py-2  text-white lg:text-base md:text-[12px] sm:text-[12px] text-[12px] hover:bg-pink-700 cursor-pointer'}
                    title={'Shop Now'}
                  />
              </div>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default LatestUpdate