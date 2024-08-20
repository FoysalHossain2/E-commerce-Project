import React, { useEffect } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { MdCancel } from "react-icons/md";
import {  useDispatch, useSelector } from 'react-redux'
import { GetTotalAmount, ProductDecrement, ProductIncrement, RemoveCart } from '../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {CartItem, TotalCartItem, TotalAmount} = useSelector((state) => state.cart)
  
  console.log(CartItem);
  

  // HandleDeleteItem
  const HandleDeleteItem = (item) => {
    dispatch(RemoveCart(item))
  }

  // HandleIncrementItem 
  const HandleIncrementItem = (item) => {
    dispatch(ProductIncrement(item))
  }

  // HandleIncrementItem 
  const HandleDecrementItem = (item) => {
    dispatch(ProductDecrement(item))
  }

  useEffect(() => {
    dispatch(GetTotalAmount())
  }, [CartItem, dispatch])


  // HandleCheckoutChange
  const HandleCheckoutChange = () => {
    navigate('/checkout')
  }
  
  



  return (
    <>
    <div className='pt-[120px] pb-[145px]'>
      <div className="container mx-auto">
        <div className='flex gap-x-10'>
            <div className='w-[800px]'>
            <div className='bg-[#F5F5F3] py-8 flex flex-row items-center justify-between'>
              <div className='grow basis-[400px] ml-3'>
                <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                  Product
                </h6>
              </div>
              <div className='grow basis-60'>
              <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                  Price
                </h6>
              </div>
              <div className='grow basis-60'>
              <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                  Quantity
                </h6>
              </div>
              <div className='grow basis-60'>
              <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                  Total
                </h6>
              </div>
            </div>

            <div className='h-[500px] overflow-y-scroll'>
              {CartItem.map((item, id) => (          
                <div className='flex items-center mt-8 justify-between' key={id}>
                  <div className='flex items-center grow basis-[400px]'>
                    <span className='mr-3 cursor-pointer'  onClick={() => HandleDeleteItem(item)}>
                      <MdCancel />
                    </span>
                    <div className='w-20 h-20 shadow-md'>
                      <picture>
                        <img 
                          src={item.thumbnail ? item.thumbnail : 'Arrivals4'} 
                          alt={item.thumbnail ? item.thumbnail : 'Arrivals4'} 
                          className='w-full h-full rounded-md object-cover'
                        />
                      </picture>
                    </div>
                      <h6 className='font-DM_Sans text-main_text_color text-base font-bold'>
                        { 'Product messing'}
                      </h6>
                  </div>
                  <div className='grow basis-60'>
                    <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                      { Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                    </p>
                  </div>
                  <div className='grow basis-60'>
                    <div className='flex items-center gap-x-[60px]'>
                      <div className='flex items-center gap-x-4  border-2 border-[#F0F0F0] py-1 px-1'>
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

                  <div className='grow basis-60'>
                    <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                      {item.CartQuantity * Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>

            {/* ======= Total & sunTotal =========== */}
              <div className='w-[340px] bg-[#E8E6F1] h-[300px] px-5'>
                <div className='flex items-center justify-between mt-8'>
                  <p>SubTotal:</p>
                  <p>{TotalAmount}</p>
                </div>
                <div className='border-b-2 border-b-zinc-300 mt-3'></div>
                <div className='flex items-center justify-between mt-8'>
                  <p>Totals:</p>
                  <p>{TotalAmount}</p>
                </div>
                <div className='border-b-2 border-b-zinc-300 mt-3'></div>

                <div className='mt-8 flex items-center gap-x-2'>
                  <p className='w-4 h-4 bg-[#19D16F] rounded-full'></p>
                  <p className='text-[14px] font-Josefin__Sans'>Shipping & taxes calculated at checkout</p>
                </div>
                {/* --- Proceed To Checkout button --- */}
                  <div className='mt-8'>
                    <button className={`bg-[#19D16F] py-3 w-full rounded text-white font-Roboto font-bold`}  onClick={HandleCheckoutChange}>
                      Proceed To Checkout
                    </button>
                  </div>
                {/* --- Proceed To Checkout button --- */}
              </div>
            {/* ======= Total & sunTotal =========== */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart