import React from 'react'
import Arrivals3 from '../../assets/NewArrivals/Arrivals3.png'
import { FiHeart } from 'react-icons/fi'
import { DiGitCompare } from 'react-icons/di'
import { IoCart } from 'react-icons/io5'

const Products = ({title,price, image, bize }) => {
  return (
    <>
    <div className='border'>
        <div className='w-[250px] relative overflow-hidden group cursor-pointer'>
        <div className='absolute top-5 ml-5 '> {bize}</div>
        
          <div className='w-[250px] h-[250px] object-cover'>
            <img 
              src={image} 
              alt={image} 
            />
          </div>
          {/* ---------------overlay-------------- */}
            <div className=" absolute -bottom-[40%]  transition-all group-hover:bottom-6">
              <div className="flex justify-end flex-col items-end py-6">
                <div>
                  <div className={"flex gap-x-5 items-center  pb-6 mr-[30px]"}>
                    <span>
                      <FiHeart />
                    </span>
                  </div>
                </div>

                <div>
                  <div className={"flex gap-x-5 items-center  pb-6 mr-[30px]"}>
                    <span>
                      <DiGitCompare />
                    </span>
                  </div>
                </div>
                <div>
                  <div className={"flex gap-x-5 items-center  mr-[30px]"}>
                    <span className='text-orange-500 text-[25px]'>
                      <IoCart />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          {/* ---------------overlay-------------- */}
        </div>
           <div className='flex items-center justify-between mt-6'>
            <p className='font-bold font-DM_Sans md:text-xl text-[16px] '>
              {title ? title : 'Title is messing'}
            </p>
            <p>
                {price ? price : '$44.00'}
            </p>
           </div>
    </div>
    </>
  )
}

export default Products