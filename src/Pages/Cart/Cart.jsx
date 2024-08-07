import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Cart = () => {
  return (
    <>
    <div className="container mx-auto">
        <p>cart</p>

        <div>

        <div className='flex items-center mt-8 justify-between' >
                <div className='flex items-center grow basis-60 ml-3'>
                  <div className='w-20 h-20 shadow-md bg-red-200'>
                  </div>
                </div>
                <div className='grow basis-60'>
                  <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                    {'$44.00'}
                  </p>
                </div>
                <div className='grow basis-60'>
                  <div className='flex items-center gap-x-[50px]'>
                    <div className='flex items-center gap-x-6  border-2 border-[#F0F0F0] py-1 px-3'>
                        <button > 
                            <FaMinus /> 
                        </button>
                        <p>{1}</p>
                        <button >
                            <FaPlus/> 
                        </button>
                    </div>
                  </div>
                </div>

                <div className='grow basis-60'>
                  <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                  {'$44.00'}
                  </p>
                </div>
              </div>

        </div>
    </div>
    </>
  )
}

export default Cart