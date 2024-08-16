import React from 'react'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import ShopLeft from '../../Component/ShopComponent/ShopLeft/ShopLeft'
import ShopRight from '../../Component/ShopComponent/ShopRight/ShopRight'


const Shop = () => {
  return (
    <>
    <div>
      <div className="container mx-auto">
        <div className="py-3 max-sm:hidden max-md:hidden md:hidden lg:block">
          <BreadCrumb />
        </div>
        <hr />

        <div className='pt-20 pb-36 max-sm:pt-6'>
          <div className="flex flex-row justify-between gap-x-8 md:px-2 lg:px-2">
            <ShopLeft className='w-[25%]  hidden md:hidden lg:block' />
            <ShopRight className='w-[75%] '/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop