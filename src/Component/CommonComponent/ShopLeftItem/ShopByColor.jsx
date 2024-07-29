import React from 'react'
import { ColorFilter } from '../../../../Data/Data'

const ShopByColor = () => {
  return (
    <>
    <div className='w-[150px]'>
        <div className='mt-11'>
            <h1 className='font-Josefin__Sans text-xl underline text-secondary_text_color'>
                Filter Color
            </h1>

            <div className='flex items-center justify-between flex-wrap'>
                {ColorFilter?.map((color, id) => (
                    <div className={` w-5 h-5  s `} style={{backgroundColor:color.ColorCode}} key={id}></div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default ShopByColor