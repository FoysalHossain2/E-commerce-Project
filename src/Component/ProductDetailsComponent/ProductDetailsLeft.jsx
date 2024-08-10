import React from 'react'
import Arrivals4 from '../../assets/NewArrivals/Arrivals4.png'

const ProductDetailsLeft = ({EachProductsDetailsImg, status}) => {

    console.log(EachProductsDetailsImg);

  return (
    <>
    <div>
        <div className="container mx-auto">
            <div className='flex flex-col ' >
                
                <div className='border'>

                    {status === 'LOADING'
                        ?
                        (
                            <div className='flex items-center flex-wrap '>
                                {[...Array.from({length: 1})].map((_,index) => (
                                    <div className={` w-[380px] rounded-md  p-4 shadow`} key={index}>
                                    <div>
                                        <div className=" h-[400px] w-full animate-pulse rounded-lg bg-gray-300">
                                            <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-end gap-y-5">
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                    
                                ))}
                            </div>
                        )
                        :
                        <div>
                            {EachProductsDetailsImg.images?.slice(0,1).map((image) => (
                                <div className=' flex items-center justify-center' key={image}>
                                    <div className='w-[380px] h-[400px] py-3 '>
                                        <img src={image} alt="" className='w-full aspect-square  object-contain' />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    }

                </div>

                <div className='flex'>

                    {status === 'LOADING'
                    ?
                    (
                        <div className='flex  items-center gap-y-6'>
                            {EachProductsDetailsImg.images?.map((_,index) => (
                                <div className={` w-[60px] h-[60px] rounded-md border border-blue-100 p-4 shadow`} key={index}>
                                <div>
                                    <div className=" h-[60px] w-full animate-pulse rounded-lg bg-gray-300">
                                        <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-end gap-y-5">
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    )
                    :

                    <div className='flex gap-y-6'>
                        {EachProductsDetailsImg.images?.map((img) => (
                            <div  key={img}>
                                <div className=' w-[60px] rounded-sm border p-1 '>
                                    <img src={img} alt="" className='w-[100%] h-[60px] object-contain' />
                                </div>
                            </div>
                        ))}
                    </div>
                    }
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetailsLeft