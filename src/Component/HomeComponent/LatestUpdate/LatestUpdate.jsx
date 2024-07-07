import React from 'react'
import LatestUpdateImg from '../../../assets/LatestUpdateImg.png'
import Overlay from '../../CommonComponent/Overlay'

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
              <Overlay
                className={'absolute top-1/2  '}
                title={'Get Latest Update By Subscribe 0ur Newsletter'}
                btnTitle={'Shop Now'}
              />

          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default LatestUpdate