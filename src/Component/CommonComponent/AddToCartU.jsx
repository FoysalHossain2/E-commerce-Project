import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { addToCart, ProductDecrement, ProductIncrement } from '../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';
import { FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


const AddToCartU = () => {

    const dispatch = useDispatch()
    const [Cancel, setCancel] = useState(false)
    const {CartItem, TotalAmount} = useSelector((state) => state.cart)


        // HandleIncrementItem 
    const HandleIncrementItem = (item) => {
        dispatch(ProductIncrement(item))
    }

    // HandleIncrementItem 
    const HandleDecrementItem = (item) => {
        dispatch(ProductDecrement(item))
    }


    // HandleCancelButton functionality
    const HandleCancelButton = () => {
        setCancel(!Cancel)
    }
    


  return (
    <>
        {/* <div className='w-[400px] bg-white py-2 px-2 flex justify-between border-t  fixed right-0 top-0'>
            <RxCross2 className='text-[24px] text-button_Color cursor-pointer' onClick={HandleCancelButton} />
            <p className='font-semibold text-[20px]'>CART</p>
            <p></p>
        </div> */}
    <div>

            {/* <div className='flex flex-col items-center mt-[140px]'>
                <div className=''>
                    <FiShoppingCart className='text-[100px] text-gray-400' />
                </div>
                <p className='font-Josefin__Sans mt-9 text-[20px] text-gray-600'>
                    Your Shopping Cart is Empty
                </p>

                <div className='mt-11'>
                    <button className='font-bold bg-slate-900 text-white px-7 py-3 text-[18px] rounded-xl hover:bg-orange-400'>
                        START SHOPPING
                    </button>
                </div>
            </div> */}
    
            <div className='mt-4  '>
                {CartItem?.map((item) => (
                    <div    key={item} className='px-2 mt-2'>
                        <div className='px-2 py-3 rounded-t-lg bg-white '>
                            <div className='flex justify-between'>
                                <div className=' flex  gap-x-3'>
                                    <div className=' w-[80px] '>
                                        <img 
                                            src={item.thumbnail} 
                                            alt={item.thumbnail} 
                                            className='border bg-slate-100 rounded-lg ' 
                                        />
                                    </div>

                                    <div>
                                        <p className='lg:w-[150px] max-sm:w-[130px] text-[13px] '>{item.title}</p>
                                        <p className='mt-1'>${TotalAmount}</p>
                                    </div>
                                </div>
                                <div>
                                    <RiDeleteBin6Line className='text-red-500' />
                                </div>
                            </div>


                                <div>
                                    <div className='flex items-center gap-x-2 w-[68px] px-1 border-2 lg:ml-[285px] max-sm:ml-[205px]'>
                                        <button onClick={() => HandleDecrementItem (item)}> 
                                            <FaMinus /> 
                                        </button>
                                        <p>{item.CartQuantity}</p>
                                        <button onClick={() => HandleIncrementItem (item)}>
                                            <FaPlus/> 
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div className='bg-white mt-1  rounded-b-lg py-1 px-2'>
                            <p className='lg:ml-[285px] max-sm:ml-[235px]'>${TotalAmount}</p>
                        </div>
                    </div>
                ))}


                <div className='w-[382px] max-sm:w-[300px] fixed lg:top-[246px] max-sm:top-[40px] sm:top-[40px] bottom-0'>
                    <div className='bg-slate-400 mt-[530px] py-5 px-2 '>
                        <p className='text-center font-Josefin__Sans mb-2'>
                            Cart Total: <span className='text-orange-400 text-[26px]'>{TotalAmount}</span>
                        </p>
                        <div className='flex justify-between'>
                            <button className='bg-green-400 px-3 py-2 rounded-lg text-white font-Roboto'>
                                ViewToCart
                            </button>
                            <button className='bg-gray-800 px-3 py-2 rounded-lg text-white font-Roboto'>
                                PROCEED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    </>
  )
}

export default AddToCartU


