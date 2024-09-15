import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataProduct } from '../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice';
import MusicFrame from '../../../assets/MusicFrame.png';


const Furniture = () => {

    const dispatch = useDispatch();
    const [AllProducts, setAllProducts] = useState([]);
    const [Page, setPage] = useState(1)
    // const [Page, setPage] = useState(9)
    
    
  
    
    useEffect(() => {
      dispatch(FetchDataProduct('https://dummyjson.com/products?limit=1000'))
    }, [])
    
  
      const {data, status} = useSelector((state) => (state.product))
      
  
  
      useEffect(() => {
        if(status === 'IDLE') {
          setAllProducts(data.products)
        }
      }, [data, status, setAllProducts])






  return (
    <>
    <div className='py-14'>
    <div className="mx-auto container">
            <div className="flex flex-col ">

                <div className="relative" >
                    <div>
                        <img src={MusicFrame} alt="" />
                    </div>
                        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                                <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">LOREM</p>
                        </div>
                </div>

                <div className='flex justify-between gap-x-2 mt-8'>
                    {AllProducts?.slice(77,78).map((item, id) => (
                        <div   key={id}  className='relative'>
                            <div className='bg-[#F6F7FB] py-3 px-[120px] max-sm:px-[10px] relative' >
                                <img src={item.thumbnail} alt="" />
                             </div>

                             <div className=' top-0 absolute'>
                                <div className='flex items-center gap-x-3'>
                                    <div className='flex items-center font-DM_Sans'>
                                        <p className='text-button_Color'>$</p>
                                        <p className='text-button_Color text-[28px]'>
                                        { Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                                        </p>
                                    </div>
                                <div>
                                    -{Math.floor(item.discountPercentage)}%
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {AllProducts?.slice(100,101).map((item, id) => (
                        <div   key={id} className='relative'>
                            <div className=' py-3 px-[120px] max-sm:px-[10px] relative bg-[#F6F7FB]' >
                                <img src={item.thumbnail} alt="" />
                             </div>
                            <div className=' top-0 absolute'>
                                <div className='flex items-center gap-x-3'>
                                <div className='flex items-center gap-x-1 font-DM_Sans'>
                                    <p className='text-button_Color'>$</p>
                                    <p className='text-button_Color text-[28px]'>
                                    { Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                                    </p>
                                </div>
                                <div>
                                    -{Math.floor(item.discountPercentage)}%
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default Furniture