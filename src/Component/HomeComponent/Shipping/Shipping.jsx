import React from 'react'
import FreeShipping from '../../../assets/ShippingImg/FreeShipping.png'
import hoursSupport from '../../../assets/ShippingImg/hoursSupport.png'
import Return from '../../../assets/ShippingImg/Return.png'
import Support from '../../../assets/ShippingImg/Support.png'

const Shipping = () => {
  return (
    <>
    <div className='pt-16 pb-10'>
        <div className="container mx-auto">
            <div className='flex justify-between items-center py-5 px-4 bg-red-300 rounded-full'>
                <div className='flex items-center gap-x-2'>
                    <img 
                        src={FreeShipping} 
                        alt={FreeShipping} 
                        className='w-10'
                    />
                    <p>Free Shipping</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <img 
                       src={Support} 
                       alt={Support} 
                        className='w-10'
                    />
                    <p>99.9% granted product</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <img 
                        src={Return} 
                        alt={Return} 
                        className='w-10'
                    />
                    <p>Free & Easy Return</p>
                </div>
                <div className='flex items-center gap-x-2'>     
                    <img 
                        src={hoursSupport} 
                        alt={hoursSupport} 
                        className='w-10'
                    />
                    <p>24/7 Hour Support</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shipping