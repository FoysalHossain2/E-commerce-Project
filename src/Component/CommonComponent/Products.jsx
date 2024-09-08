import React from 'react'
import Arrivals3 from '../../assets/NewArrivals/Arrivals3.png'
import { FiHeart } from 'react-icons/fi'
import { DiGitCompare } from 'react-icons/di'
import { IoCart } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import ProductRatingStart from '../ProductDetailsComponent/ProductRatingStart'


const Products = ({title,price, image, ratingStar , bize , productId, discountPrice, GrideChange}) => {
  


  return (
    <>
    <div>
      {GrideChange
       ?
       (
        <Link className='bg-white' to={`/productDetails/${productId}`}>
          <div className=' rounded-lg flex gap-x-8 w-[845px] border'>
              <div className=' h-[270px] xl:w-[270px] lg:w-[250px] 
              relative overflow-hidden group cursor-pointer '
              >
                <div className='absolute top-5 ml-5 '> {bize}</div>
      
                  <div className='rounded-lg'>
                    <img 
                      src={image} 
                      alt={image} 
                      className='w-full h-full'
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

              <div className=''>
                <p className='font-medium font-DM_Sans text-[16px] max-sm:text-[12px] w-[400px]'>
                  {title }
                </p>

                <div className='flex mt-6'>
                  <ProductRatingStart 
                      ratingStar={ratingStar}
                  />
                </div>

              </div>

              <div className='flex gap-x-2 pt-3'>
                  <p className='font-DM_Sans text-button_Color font-semibold text-[23px]'>
                    ${discountPrice}
                  </p>
                  <p className='line-through text-[14px]'>
                      {price ? price : '$44.00'}
                  </p>
              </div>

          </div>
        </Link>
       )
       :
       (
        <Link className='bg-white' to={`/productDetails/${productId}`}>
          <div className=' rounded-lg group'>
          <div className=' h-[280px] xl:w-[255px] 
          lg:w-[230px]
          md:w-[350px] max-md:w-[290px]
          max-sm:w-[164px] max-sm:h-[180px] 
          relative overflow-hidden group cursor-pointer '
          >
            <div className='absolute top-5 ml-5 '> {bize}</div>
            
            <Link to={`/productDetails/${productId}`}>
              <div className=' rounded-lg'>
                <img 
                  src={image} 
                  alt={image} 
                  className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
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
            <div className=' mt-1  h-[150px] xl:w-[255px] lg:w-[230px] md:w-[350px] max-md:w-[290px] max-sm:w-[170px] px-3
              xsm:w-[180px]
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

                <ProductRatingStart 
                  ratingStar={ratingStar}
                 />

            </div>
          </div>
        </Link>
       )
      }
    </div>
    </>
  )
}

export default Products