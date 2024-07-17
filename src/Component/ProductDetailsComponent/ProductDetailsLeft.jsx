import React from 'react'
import Arrivals4 from '../../assets/NewArrivals/Arrivals4.png'

const ProductDetailsLeft = ({EachProductsDetailsImg, status}) => {

    console.log(EachProductsDetailsImg);

  return (
    <>
    <div>
        <div className="container mx-auto">
            <div className='flex gap-3' >
                
                <div>

                    {status === 'LOADING'
                    ?
                    (
                        <div className='flex flex-col items-center flex-wrap '>
                            {[...Array.from({length: 3})].map((_,index) => (
                                <div className={` w-[60px] h-[60px] rounded-md border border-blue-100 p-4 shadow`} key={index}>
                                <div>
                                    <div className=" h-[60px] w-full animate-pulse rounded-lg bg-gray-200">
                                        <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-end gap-y-5">
                                            <div className=" h-[200px] w-[80%]  rounded-md bg-gray-500 "></div>
                                            <div className="  h-3 w-[80%]  rounded-md bg-gray-300 "></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    )
                    :

                    <div className='w-[60px] flex flex-col gap-y-4 '>
                        {EachProductsDetailsImg.images?.map((img) => (
                            <div key={img} className='border'>
                                <img src={img} alt="" />
                            </div>
                        ))}
                    </div>
                    }
                </div>


                <div>

                    {status === 'LOADING'
                        ?
                        (
                            <div className='flex items-center flex-wrap '>
                                {[...Array.from({length: 1})].map((_,index) => (
                                    <div className={` w-[450px] rounded-md border border-blue-100 p-4 shadow`} key={index}>
                                    <div>
                                        <div className=" h-[450px] w-full animate-pulse rounded-lg bg-gray-200">
                                            <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-end gap-y-5">
                                                <div className=" h-[200px] w-[80%]  rounded-md bg-gray-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                    
                                ))}
                            </div>
                        )
                        :

                        <div >
                            {EachProductsDetailsImg.images?.slice(0,1).map((image) => (
                                <div className='border w-[400px]'>
                                    <img src={image} alt="" />
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