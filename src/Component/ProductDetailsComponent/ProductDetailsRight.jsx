import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import ProductRating from '../CommonComponent/ProductRating';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProductDetailsRight = ({EachProductsDetailsItem}) => {

  console.log(EachProductsDetailsItem);

  return (
    <>
    <div className=''>
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
              { Math.round(EachProductsDetailsItem.price - Math.floor((EachProductsDetailsItem.price * EachProductsDetailsItem.discountPercentage / 100)))}
            </p>
          </div>
          <div>
            -{Math.floor(EachProductsDetailsItem.discountPercentage)}%
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
              <p className='w-6 h-6  hover:border rounded-md'></p>
            </div>
          </div>
      {/*========= Color part ==========*/}

      <div className='mt-8'>
        <p>
            <span className={`font-Roboto font-bold ${EachProductsDetailsItem.stock === 0 ? 'text-red-500' : 'text-green-600'}`}>
              In Stock
            </span> 
          <span className='px-3 font-bold'>:</span>
           {EachProductsDetailsItem.stock}
        </p>
      </div>

      {/* ======== Quantity ============ */}
       <div className='flex items-center gap-x-4 mt-4'>
        <p>Quantity :</p>
        <p className='w-[150px] py-1 border bg-red-200 rounded-full flex items-center justify-center gap-x-4'>
            <button className='text-[18px] cursor-pointer'> <FaMinus /> </button> 
            <span className='text-[20px]'>1</span> 
            <button className='text-[18px] cursor-pointer'> <FaPlus /> </button>
        </p>
       </div>
      {/* ======== Quantity ============ */}

      {/*============= addToCart =============*/}
        <div className='flex items-center gap-x-3 mt-4'>
          <Link to={'/cart'}>
            <div className='w-[250px] py-3 bg-button_Color text-center font-Roboto font-bold text-white text-[20px] cursor-pointer'>
              ADD TO CART 
            </div>
          </Link>
          <div className='w-[250px] py-3 bg-green-400 text-center font-Roboto font-bold text-white text-[20px] cursor-pointer'>
             BUY NOW
          </div>
        </div>
      {/*============= addToCart =============*/}


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