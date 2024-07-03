import React from 'react'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import ShopLeft from '../../Component/ShopComponent/ShopLeft'
import ShopRight from '../../Component/ShopComponent/ShopRight'


const Shop = () => {
  return (
    <>
    <div>
      <div className="container mx-auto">
        <div className="py-3">
          <BreadCrumb />
        </div>
        <hr />

        <div className='py-16 '>
          <div className="flex items-center flex-row justify-between">
            <ShopLeft className={'w-[25%]   h-[100vh] '} />
            <ShopRight className={'w-[73%] h-[100vh]'} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop