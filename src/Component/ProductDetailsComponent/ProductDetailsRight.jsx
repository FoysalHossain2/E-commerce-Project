import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";


const ProductDetailsRight = ({EachProductsDetailsItem}) => {

  console.log(EachProductsDetailsItem);

  return (
    <>
    <div>
      <h1>{EachProductsDetailsItem.description ? EachProductsDetailsItem.description : 'Title is Messing'}</h1>
      
      <div className='flex items-center gap-x-2 mt-5'>
        <IoStar className='text-yellow-300' />
        <IoStar className='text-yellow-300' />
        <IoStar className='text-yellow-300' />
        <IoStar className='text-yellow-300' />
        <IoStar className='text-yellow-300' />
      </div>

      <div className="border-b w-full mt-5 border-black"></div>

      <div className='flex items-center mt-5 gap-x-3 '>
        <div className='text-button_Color text-[24px]'>${EachProductsDetailsItem.discountPercentage ? EachProductsDetailsItem.discountPercentage : '$32.00'}</div>
        <div className=' line-through'>${EachProductsDetailsItem.price ? EachProductsDetailsItem.price : '$32.00'}</div>
      </div>

      {/*  */}
        <div className='flex gap-x-20 mt-6'>
          <div>
            <p>Brand</p>
            <p>Category</p>
          </div>
           <div>
              <p>{EachProductsDetailsItem.category}</p>
              <p>{EachProductsDetailsItem.brand}</p>
           </div>
        </div>
      {/*  */}

    </div>
    </>
  )
}

export default ProductDetailsRight