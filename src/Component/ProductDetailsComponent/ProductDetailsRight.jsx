import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import ProductRating from '../CommonComponent/ProductRating';


const ProductDetailsRight = ({EachProductsDetailsItem}) => {

  console.log(EachProductsDetailsItem);

  return (
    <>
    <div>
      <p className='font-Josefin__Sans text-4xl font-bold mb-4 text-[#0D134E]'>
        {EachProductsDetailsItem.title ? EachProductsDetailsItem.title : 'Title is Messing'}
      </p>

      <h1 className='font-DM_Sans text-lg'>
        {EachProductsDetailsItem.description ? EachProductsDetailsItem.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </h1>
      
      {/*========= rating Review =========*/}
      <div className=' mt-5'>
        <ProductRating ratingStar={EachProductsDetailsItem.rating} />
      </div>
      {/*========= rating Review =========*/}


      <div className="border-b w-full mt-5 border-zinc-300"></div>

      {/*======== Price percentage =======*/}
      <div className=' mt-5 '>
        <div className='flex items-center gap-x-3'>
          <div className='flex items-center font-DM_Sans'>
            <p>$</p>
            <p className='text-button_Color text-[28px]'>
              { Math.round(EachProductsDetailsItem.price - Math.round((EachProductsDetailsItem.price * EachProductsDetailsItem.discountPercentage / 100)))}
            </p>
          </div>
          <div>
            -{Math.round(EachProductsDetailsItem.discountPercentage)}%
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <p>List Price:</p>
          <p  className=' line-through'>
            ${Math.round(EachProductsDetailsItem.price ? EachProductsDetailsItem.price : '$32.00')}
          </p>
        </div>
      </div>
      {/*======== Price percentage =======*/}

      {/*========= Color part ==========*/}
          <div className='mt-6  flex items-center gap-x-4'>
            <p>Color:</p>
            <div className='flex items-center gap-x-4 '>
              <p className='w-6 h-6 bg-green-500 hover:border rounded-md'></p>
              <p className='w-6 h-6 bg-red-500 hover:border rounded-md'></p>
              <p className='w-6 h-6 bg-black hover:border rounded-md'></p>
            </div>
          </div>
      {/*========= Color part ==========*/}


      {/*  */}
        <div className='flex gap-x-20 mt-6'>
          <div className='font-DM_Sans'>
            <p>Category</p>
            <p>Brand</p>
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