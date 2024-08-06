import React, { useState } from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { RxCross2 } from 'react-icons/rx';



const ShopRightTop = ({onHandlePageChange, HandleGrideChange, changeIcon, HandleGrideChange2}) => {

  const [Filter, setFilter] = useState(false)
  const [Sort, setSort] = useState(false)

  // HandleSort functionality
  const HandleSort = () => {
    setSort(!Sort)
    setFilter(false)
  }

  // HandleSort functionality
  const HandleFilter = () => {
    setFilter(!Filter)
    setSort(false)
  }


  // HideMenu function

  const HideMenu = () => {
    setFilter(false)
  }



  
  return (
    <>
    <div className='pb-10   max-sm:hidden max-md:hidden md:hidden lg:block'>
      <div className='flex items-center justify-between gap-x-20'>
      <div></div>

        <div className='flex items-center gap-x-16'>
            {/*================ PerPage ==============*/}
            <div className='flex items-center gap-x-2 max-sm:hidden'>
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
            {/*================ PerPage ==============*/}

            {/* ========== Product Sort ================= */}
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
            {/* ========== Product Sort ================= */}

            <div></div>

            {/*==================== grid View ===================*/}
            <div className='flex items-center gap-x-2  '>
              <p className='font-DM_Sans text-secondary_text_color font-medium'>
                View:
              </p>
              <div className='flex items-center gap-x-3 ' >
                <div className={` cursor-pointer text-[18px] ${changeIcon ? '' : 'text-button_Color'}`}   onClick={HandleGrideChange2}>
                  <BsFillGridFill />
                </div>
                <div className={` cursor-pointer text-[18px] ${changeIcon ? 'text-button_Color' : ''}`}  onClick={HandleGrideChange}>
                  <FaBars />
                </div>
              </div>
            </div>
            {/*==================== grid View ===================*/}
        </div>

      </div>
    </div>


      {/*=========for sm , md ============  */}
      <div className='pb-10 max-sm:block hidden'>
        <div className='flex items-center gap-x-3 relative'>
          
          {/*============ Sort ============*/}
          <div className='flex items-center bg-zinc-100 w-[66px] px-2 rounded-full border-2 cursor-pointer' onClick={HandleSort}>
            <p className='font-Josefin__Sans'>Sort</p>
            {Sort ? (<IoCaretUpSharp className='text-[20px]' />) : (<IoCaretDownSharp className='text-[20px]' />)}
          {Sort &&
            (
              <div className='absolute mt-[123px] mr-[-40px] bg-zinc-300 z-10 w-[340px] divide-y-2 py-1 font-DM_Sans'>
                <div>Lower Price</div>
                <div>hight Price</div>
                <div>Best offer</div>
              </div>
            )
          }
          </div>
          {/*============ Sort ============*/}


          {/*============ Brand ============*/}
          <div className='flex items-center bg-zinc-100 w-[79px] px-2 rounded-full border-2'>
            <p className='font-Josefin__Sans'>Brand</p>
            <IoCaretDownSharp className='text-[20px]' />
          </div>
          {/*============ Brand ============*/}

          {/*============ Category ============*/}
          <div className='flex items-center bg-zinc-100 w-[102px] px-2 rounded-full border-2'>
            <p className='font-Josefin__Sans'>Category</p>
            <IoCaretDownSharp className='text-[20px]' />
          </div>
          {/*============ Category ============*/}



          <div onClick={HandleFilter}>
           <CiFilter className='text-[28px] ' />
          </div>
            {/* sideShowMenu overlay part*/}
              <div className={`blackOverlay w-full h-[1000px] fixed duration-500 z-50`}
              style={{
                visibility: Filter ? 'visible' : 'hidden'
              }}
              onClick={HideMenu}
              >
                <div className='w-[300px] h-[1000px] bg-zinc-300 absolute duration-500 overflow-Y-scroll '
                style={{
                  right: Filter ? '0%' : '-100%'
                }}
                onClick={(e) => e.stopPropagation()}
                >
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, officia.</p>
                </div>
              </div>
            {/* sideShowMenu overlay part*/}

        </div>
      </div>
      {/*========= for sm , md ============  */}

    </>
  )
}

export default ShopRightTop