import React from 'react'
import FreeShipping from '../../../assets/ShippingImg/FreeShipping.png'
import hoursSupport from '../../../assets/ShippingImg/hoursSupport.png'
import Return from '../../../assets/ShippingImg/Return.png'
import Support from '../../../assets/ShippingImg/Support.png'

const Shipping = () => {
  return (
    <>
    <div className='py-20 pt-[124px]'>
        <div className="container mx-auto">
            <div className='md:flex flex-wrap justify-between items-center '>
                <div className='flex items-center gap-x-2 border py-4 px-4 '>
                    <img 
                        src={FreeShipping} 
                        alt={FreeShipping} 
                        className='w-10'
                    />
                    <p className='font-Josefin__Sans text-lg font-bold'>Free Shipping</p>
                </div>
                <div className='flex items-center gap-x-2 border py-4 px-4'>
                    <img 
                       src={Support} 
                       alt={Support} 
                        className='w-10'
                    />
                    <p className='font-Josefin__Sans text-lg font-bold'>99.9% granted product</p>
                </div>
                <div className='flex items-center gap-x-2  border py-4 px-4'>
                    <img 
                        src={Return} 
                        alt={Return} 
                        className='w-10'
                    />
                    <p className='font-Josefin__Sans text-lg font-bold'>Free & Easy Return</p>
                </div>
                <div className='flex items-center gap-x-2 border py-4 px-4'>     
                    <img 
                        src={hoursSupport} 
                        alt={hoursSupport} 
                        className='w-10'
                    />
                    <p className='font-Josefin__Sans text-lg font-bold'>24/7 Hour Support</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shipping
