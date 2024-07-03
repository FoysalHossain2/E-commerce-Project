import React from 'react'
import { GrFormCheckmark } from "react-icons/gr";
import { DiscountOffer } from '../../../../Data/Data'

const ShopByDiscountOffer = () => {
  return (
    <>
    <div className='mt-11'>
        <h3 className='font-Josefin__Sans text-xl underline text-secondary_text_color'>
            Discount Offer
        </h3>

        <div className='mt-[11px]'>
            {DiscountOffer?.map((items, id) => (
                <div key={id} className='flex items-center gap-x-6'>   
                    <div className='w-5 h-5 border bg-[#FFDBF1] flex items-center '>
                        <GrFormCheckmark className='text-[#FF3EB2] textF cursor-pointer' />
                    </div>
                    <p className='text-Paragraph__Color font-DM_Sans py-2'>
                        {items.title}
                    </p>
                </div>
            ))}
        </div>
    </div>

    </>
  )
}

export default ShopByDiscountOffer