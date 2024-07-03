import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { GrFormCheckmark } from "react-icons/gr";

const ShopByRating = () => {
  return (
    <>
    <div  className='mt-11'>
        <h3 className='font-Josefin__Sans text-xl underline text-secondary_text_color'>
        Rating Item
        </h3>

        <div className='flex items-center gap-x-6'>
            <div className='w-5 h-5 border bg-[#FFF6DA] flex items-center '>
                <GrFormCheckmark className='text-[#FFCC2E] textF cursor-pointer' />
            </div>

            <div>
              <IoStar />
            </div>
        </div>
    </div>
    </>
  )
}

export default ShopByRating