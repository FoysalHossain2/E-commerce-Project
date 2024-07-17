import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const ShopRightTop = ({onHandlePageChange, HandleGrideChange, changeIcon, HandleGrideChange2}) => {
  
  return (
    <>
    <div className='pb-10 flex justify-between'>
      <div></div>
      <div className='flex items-center gap-x-20'>
          <div className='flex items-center gap-x-2'>
              <p className='font-DM_Sans text-secondary_text_color font-medium'>
                PerPage:
              </p>
              <select name="" id="" className='border' onChange={onHandlePageChange}>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
                <option value="75">75</option>
              </select>

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
            <div className='flex items-center gap-x-3' >
              <div className={` cursor-pointer text-[18px] ${changeIcon ? '' : 'text-button_Color'}`}   onClick={HandleGrideChange2}>
                <BsFillGridFill />
              </div>
              <div className={` cursor-pointer text-[18px] ${changeIcon ? 'text-button_Color' : ''}`}  onClick={HandleGrideChange}>
                <FaBars />
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ShopRightTop