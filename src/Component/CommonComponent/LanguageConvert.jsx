import React, { useState } from 'react'
import { GrLanguage } from "react-icons/gr";
import { PiNumberCircleZero } from "react-icons/pi";

const LanguageConvert = () => {

  const [ConverterL, setConverterL] = useState(false);






  return (
    <>
    <div className=' relative group '>
      <div className='flex items-center gap-x-1 cursor-pointer'>
          <GrLanguage className='text-button_Color text-[20px]' />
          <p className='font-DM_Sans font-bold text-'>
            EN
          </p>
      </div>
      <div className=' absolute top-0 -left-3 
          transition group-hover:translate-y-5 translate-y-10 opacity-0
          invisible group-hover:opacity-100 group-hover:visible
          duration-500 ease-in-out group-hover:transform z-50 min-w-[40px]
          transform
        '
      >
        <div className='relative shadow-xl top-6 p-6 bg-white  w-[200px] h-[120px] -left-[100px] border border-zinc-300'>
          <div className='w-[12px] h-[12px] bg-white transform rotate-45 absolute -top-[7px] z-0 left-[142px] border-t border-t-zinc-300 border-l border-l-zinc-300'>
          </div>
           {/*----- text or pin div --------- */}
           <h6 className='font-DM_Sans text-[14px] -mt-3'>Select Language</h6>
           <div className='mt-3'>
              <div className='flex items-center gap-x-10 cursor-pointer'>
                <div className='border border-button_Color w-[17px] h-[17px] rounded-full flex items-center justify-center align-middle'>
                  <div className='bg-button_Color w-2 h-2 rounded-full flex items-center justify-center align-middle'></div>
                </div>
                <p>BN / Bangla</p>
              </div>
              <div className='flex items-center gap-x-10 mt-2 cursor-pointer'>
                <div className='border border-button_Color w-[17px] h-[17px] rounded-full flex items-center justify-center align-middle'>
                  <div className='bg-button_Color w-2 h-2 rounded-full flex items-center justify-center align-middle'></div>
                </div>
                <p>EN / English</p>
              </div>
           </div>
            
            {/*----- text or pin div --------- */}
        </div>
      </div>
    </div>
    </>
  )
}

export default LanguageConvert