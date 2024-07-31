import React from 'react'
import Arrivals3 from '../../assets/NewArrivals/Arrivals3.png'
import { FiHeart } from 'react-icons/fi'
import { DiGitCompare } from 'react-icons/di'
import { IoCart } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'

const Products = ({title,price, image, bize , productId, discountPrice}) => {


  return (
    <>
    <div className='border rounded-lg'>
        <div className='w-[270px] h-[270px] xl:w-[270px] lg:w-[240px] md:w-[230px]  
        xsm:w-[185px] 
        max-sm:w-[164px] max-sm:h-[180px] 
        relative overflow-hidden group cursor-pointer '
        >
          <div className='absolute top-5 ml-5 '> {bize}</div>
          
          <Link to={`/productDetails/${productId}`}>
            <div className=' bg-zinc-100 text-red-500 rounded-lg'>
              <img 
                src={image} 
                alt={image} 
                className='w-full object-contain'
              />
            </div>
          </Link>
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
           <div className=' mt-1 w-[270px] h-[140px] xl:w-[270px] lg:w-[240px] md:w-[230px] max-sm:w-[170px] px-3
            xsm:w-[185px] 
           '>

              <p className='font-medium font-DM_Sans text-[16px] max-sm:text-[12px]'>
                {title ? `${title.slice(0,52)}...` : 'Title is messing'}
              </p>

              <div className='flex gap-x-2 pt-2'>
                <p className='font-DM_Sans text-button_Color font-semibold text-[23px]'>
                  ${discountPrice}
                </p>
                <p className='line-through text-[14px]'>
                    {price ? price : '$44.00'}
                </p>
              </div>

           </div>
    </div>
    </>
  )
}

export default Products