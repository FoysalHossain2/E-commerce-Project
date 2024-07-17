import React from 'react'
import Arrivals3 from '../../assets/NewArrivals/Arrivals3.png'
import { FiHeart } from 'react-icons/fi'
import { DiGitCompare } from 'react-icons/di'
import { IoCart } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'

const Products = ({title,price, image, bize , productId}) => {


  return (
    <>
    <div className=''>
        <div className='w-[270px] relative overflow-hidden group cursor-pointer border'>
          <div className='absolute top-5 ml-5 '> {bize}</div>
          
          <Link to={`/productDetails/${productId}`}>
            <div className='w-[250px] h-[250px] object-cover'>
              <img 
                src={image} 
                alt={image} 
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
           <div className=' mt-6 w-[270px] '>
              <p className='font-medium font-DM_Sans md:text-xl text-[14px] '>
                {title ? title : 'Title is messing'}
              </p>
              <p className='mt-4'>
                  {price ? price : '$44.00'}
              </p>
           </div>
    </div>
    </>
  )
}

export default Products