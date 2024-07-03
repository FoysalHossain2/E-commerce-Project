import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const ShopRightTop = () => {
  return (
    <>
    <div className='pb-10 flex justify-between'>
      <div></div>
      <div className='flex items-center gap-x-20'>
          <div className='flex items-center gap-x-2'>
              <p className='font-DM_Sans text-secondary_text_color font-medium'>
                PerPage:
              </p>
              <input type="text" name="" id="" className='border w-12' />
          </div>

          <div className='flex items-center gap-x-2'>
            <p className='font-DM_Sans text-secondary_text_color font-medium'>
              Sort By:
            </p>
            <select 
              name="" 
              id=""
              className='border py-1 px-2 rounded-md'
            >
              <option value="Lower Price">Lower Price</option>
              <option value="hight Price">hight Price</option>
              <option value="Best offer">Best offer</option>
            </select>
          </div>

          <div className='flex items-center gap-x-2'>
            <p className='font-DM_Sans text-secondary_text_color font-medium'>
              View:
            </p>
            <BsFillGridFill />
            <FaBars />
          </div>
      </div>
    </div>
    </>
  )
}

export default ShopRightTop