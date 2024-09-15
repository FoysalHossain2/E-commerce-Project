import React from 'react'
import { NewArrivalsData } from '../../../../Data/Data'
import Products from '../../CommonComponent/Products'

const NewArrival = ({headingTitle}) => {
  return (
    <>
     <div className='mt-[100px] mb-[50px]'>
      <div className="container mx-auto">
            <h1 className='font-bold text-[38px] font-DM_Sans text-main_text_color pb-14'>
              {headingTitle ? headingTitle : headingTitle} 
            </h1>

          <div className='flex flex-wrap  justify-between gap-y-8  
            max-sm:grid max-sm:grid-cols-2
          '>
            {NewArrivalsData?.map((items,id) => (
              <div className='w-[270px]'>
                <Products
                 key={id}
                 image={items.img}
                 title={items.title}
                 price={items.price}
                />
              </div>
            ))}
          </div>


      </div>
     </div>
    </>
  )
}

export default NewArrival