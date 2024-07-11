import React from 'react';
import { GrFormCheckmark } from "react-icons/gr";
import { ProductBrand } from '../../../../Data/Data';

const shopByProductBrand = () => {
  return (
    <>
    <div>

           {/*-------- product filter header ------ */}
          <div className='pb-10'>
            <h1 className='font-Josefin__Sans font-bold border-b-2 border-black w-[227px] text-2xl text-secondary_text_color'>
              Product Filters
            </h1>


          </div>
          {/*-------- product filter header ------ */}

        <h2 className='font-Josefin__Sans text-xl underline text-secondary_text_color'>
          Product Brand
        </h2>
          <div className='mt-[11px]'>
            {ProductBrand?.map((items, id) => (
              <div key={id} className='flex items-center gap-x-6'>   
                  <div className='w-5 h-5 border bg-[#E5E0FC] flex items-center '>
                    <GrFormCheckmark className='text-[#603EFF] textF cursor-pointer' />
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

export default shopByProductBrand