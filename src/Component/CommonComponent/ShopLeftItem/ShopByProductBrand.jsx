import React, { useState } from 'react';
import { GrFormCheckmark } from "react-icons/gr";

const shopByProductBrand = ({ProductBrand, ShopLeftTitle}) => {

  const [HidePBrand, setHidePBrand] = useState(false)


  // HandleHideMenu functionality
  const HandleHideMenu = () => {
    setHidePBrand(!HidePBrand)
  }




  return (
    <>
    <div className='mt-[11px]'>
        <h2 className='font-Josefin__Sans text-xl border-b-2 border-gray-400 w-[200px] text-secondary_text_color cursor-pointer'  onClick={HandleHideMenu}>
          {ShopLeftTitle}
        </h2>
        {HidePBrand &&
        (

          <div className='mt-[11px]'>
            {ProductBrand?.map((items, id) => (
              <div key={id} className='flex items-center gap-x-3'>   
                  <div className='w-4 h-4 border bg-[#E5E0FC] flex items-center '>
                    <GrFormCheckmark className='text-[#603EFF] textF cursor-pointer' />
                  </div>
                  <p className='text-Paragraph__Color font-DM_Sans py-2'>
                    {items.title}
                  </p>
              </div>
            ))}
          </div>
        )}

    </div>
    </>
  )
}

export default shopByProductBrand