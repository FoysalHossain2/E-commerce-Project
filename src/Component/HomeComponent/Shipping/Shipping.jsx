import React from 'react'
import FreeShipping from '../../../assets/ShippingImg/FreeShipping.png'
import hoursSupport from '../../../assets/ShippingImg/hoursSupport.png'
import Return from '../../../assets/ShippingImg/Return.png'
import Support from '../../../assets/ShippingImg/Support.png'

const Shipping = () => {
  return (
    <>
    <div className='py-20 max-sm:py-4'>
        <div className="container mx-auto">
            
            <div className=' max-sm:hidden max-md:hidden md:hidden lg:block'>
                <div className=' flex justify-between items-center '>
                    <div className='flex flex-col items-center py-4 px-4 '>
                        <img 
                            src={FreeShipping} 
                            alt={FreeShipping} 
                            className='w-14 pb-6'
                        />
                            <p className='font-Roboto text-[20px] font-bold text-zinc-500'>
                                FREE AND FAST DELIVERY
                            </p>
                            <p className='font-Roboto font-bold mt-2 text-zinc-500'>
                                Free delivery for all orders over $140
                            </p>
                    </div>
                    <div className='flex flex-col items-center py-4 px-4'>     
                        <img 
                            src={hoursSupport} 
                            alt={hoursSupport} 
                            className='w-14 pb-6'
                        />
                            <p className='font-Roboto text-[20px] font-bold text-zinc-500'>
                                24/7 CUSTOMER SERVICE
                            </p>
                            <p className='font-Josefin__Sans font-bold mt-2 text-zinc-500'>
                                Friendly 24/7 customer support
                            </p>
                    </div>  
                    <div className='flex flex-col items-center py-4 px-4'>
                        <img 
                            src={Return} 
                            alt={Return} 
                            className='w-14 pb-6'
                        />
                            <p className='font-Roboto text-[20px] font-bold  text-zinc-500'>
                                MONEY BACK GUARANTEE
                            </p>
                            <p className='font-Josefin__Sans font-bold mt-2  text-zinc-500'>
                                We return money within 30 days
                            </p>
                    </div>

                </div>
            </div>


            {/*===================== Responsive sm part =====================*/}
                <div className='lg:hidden max-md:hidden md:hidden max-sm:block'>
                    <div className=' flex flex-row justify-between gap-x-1 items-center '>
                        <div className=' flex flex-col items-center py-4 px-4'>
                            <img 
                                src={FreeShipping} 
                                alt={FreeShipping} 
                                className='w-11 pb-2'
                            />
                                <p className='text-[13px] font-extrabold text-zinc-500 font-Roboto'>
                                    FREE 
                                </p>
                        </div>
                        <div className=' flex flex-col items-center py-4 px-4 '>     
                            <img 
                                src={hoursSupport} 
                                alt={hoursSupport} 
                                className='w-11 pb-2'
                            />
                                <p className='text-[13px] font-extrabold text-zinc-500 font-Roboto'>
                                    24/7 SERVICE
                                </p>
                        </div>  
                        <div className=' flex flex-col items-center py-4 px-4 '>
                            <img 
                                src={Return} 
                                alt={Return} 
                                className='w-11 pb-2'
                            />
                                <p className='text-[13px] font-extrabold text-zinc-500 font-Roboto'>
                                    MONEY BACK
                                </p>
                        </div>

                    </div>
                </div>
            {/*===================== Responsive sm part =====================*/}


            {/* ================== Responsive md part ===================== */}
                <div className=' max-sm:hidden lg:hidden md:block'>
                    <div className=' flex justify-between items-center '>
                        <div className='flex flex-col items-center py-4 px-4 '>
                            <img 
                                src={FreeShipping} 
                                alt={FreeShipping} 
                                className='w-14 pb-6'
                            />
                                <p className='font-Roboto text-[20px] text-zinc-500 font-bold'>
                                    FREE DELIVERY
                                </p>
                        </div>
                        <div className='flex flex-col items-center py-4 px-4'>     
                            <img 
                                src={hoursSupport} 
                                alt={hoursSupport} 
                                className='w-14 pb-6'
                            />
                                <p className='font-Roboto text-[20px] font-bold text-zinc-500'>
                                    24/7  SERVICE
                                </p>
        
                        </div>  
                        <div className='flex flex-col items-center py-4 px-4'>
                            <img 
                                src={Return} 
                                alt={Return} 
                                className='w-14 pb-6'
                            />
                                <p className='font-Roboto text-[20px] font-bold text-zinc-500'>
                                    MONEY GUARANTEE
                                </p>

                        </div>

                    </div>
                </div>
            {/* ================== Responsive md part ===================== */}


            {/* ================= Responsive lg part ======================*/}
                <div className=' max-sm:hidden lg:hidden max-md:hidden  md:hidden'>
                    <div className=' flex justify-between items-center '>
                        <div className='flex flex-col items-center py-4 px-4 '>
                            <img 
                                src={FreeShipping} 
                                alt={FreeShipping} 
                                className='w-14 pb-6'
                            />
                                <p className='font-Josefin__Sans text-[20px] font-bold'>
                                    FREE AND FAST DELIVERY
                                </p>
                                <p className='font-Josefin__Sans font-bold mt-2'>
                                    Free delivery for all orders over $140
                                </p>
                        </div>
                        <div className='flex flex-col items-center py-4 px-4'>     
                            <img 
                                src={hoursSupport} 
                                alt={hoursSupport} 
                                className='w-14 pb-6'
                            />
                                <p className='font-Josefin__Sans text-[20px] font-bold'>
                                    24/7 CUSTOMER SERVICE
                                </p>
                                <p className='font-Josefin__Sans font-bold mt-2'>
                                    Friendly 24/7 customer support
                                </p>
                        </div>  
                        <div className='flex flex-col items-center py-4 px-4'>
                            <img 
                                src={Return} 
                                alt={Return} 
                                className='w-14 pb-6'
                            />
                                <p className='font-Josefin__Sans text-[20px] font-bold'>
                                    MONEY BACK GUARANTEE
                                </p>
                                <p className='font-Josefin__Sans font-bold mt-2'>
                                    We return money within 30 days
                                </p>
                        </div>

                    </div>
                </div>
            {/* ================= Responsive lg part ======================*/}

        </div>
    </div>
    </>
  )
}

export default Shipping

