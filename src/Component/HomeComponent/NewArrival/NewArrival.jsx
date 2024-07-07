import React from 'react'
import { NewArrivalsData } from '../../../../Data/Data'
import Products from '../../CommonComponent/Products'

const NewArrival = ({headingTitle}) => {
  return (
    <>
     <div className=''>
      <div className="container mx-auto">
            <h1 className='font-bold text-[38px] font-DM_Sans text-main_text_color pb-14 mt-[128px]'>
              {headingTitle ? headingTitle : headingTitle} 
            </h1>

          <div className='flex flex-wrap gap-y-7 justify-between '>
            {NewArrivalsData?.map((items,id) => (
              <Products
               key={id}
               image={items.img}
               title={items.title}
               price={items.price}
              />
            ))}
          </div>


      </div>
     </div>
    </>
  )
}

export default NewArrival