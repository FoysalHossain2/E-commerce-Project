import React from 'react'
import { NewArrivalsData } from '../../../../Data/Data'
import Products from '../../CommonComponent/Products'


const NewArrival = () => {
  return (
    <>
     <div className='mt-[170px] mb-[150px]'>
      <div className="container mx-auto">
        <h1 className='font-bold text-[38px] font-DM_Sans text-main_text_color pb-14'>
          NewArrival
        </h1>

          {/* <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Show left drawer
          </button> */}

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