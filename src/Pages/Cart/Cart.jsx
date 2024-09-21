import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetTotalAmount, ProductDecrement, ProductIncrement, RemoveCart, RemoveCartWishList } from '../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';



const Cart = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [SelectAllItem, setSelectAllItem] = useState(false)
  const [SelectMessage, setSelectMessage] = useState(false)
  const {CartItem, TotalCartItem, TotalAmount} = useSelector((state) => state.cart)
  
  

  

  // HandleDeleteItem
  const HandleDeleteItem = (item) => {
    dispatch(RemoveCart(item))
  }


  // HandleWishListDeleteItem
  const HandleWishListDeleteItem = (item) => {
    dispatch(RemoveCartWishList(item))
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
    // navigate('/checkout')
    navigate('/login')
  }
  


  // HandleClick Select all items functionality
  const HandleClick = () => {
    setSelectAllItem(!SelectAllItem)
  }


  // HandleMessage functionality
  const HandleMessageDelete = (item) => {
    setSelectMessage(!SelectMessage)
    dispatch(RemoveCart(item))
  }



      




  return (
    <>
    <div className='pt-[120px] pb-[145px]'>
      <div className="container mx-auto">

        <div className=' max-sm:hidden lg:block xl:block '>
            <div className='flex max-sm:flex-col gap-x-10 '>
          

            <div className='w-[800px]'>
            <div className='h-[500px] overflow-y-scroll'>


              {/*================ Select all items  =================*/}
                  <div className='mb-6'>
                      <div className='bg-slate-50 flex items-center justify-between mr-6 py-2 '>
                        <div className='flex items-center gap-x-2'  onClick={HandleClick}>
                          <div className={`w-4 h-4 border border-black cursor-pointer  ${SelectAllItem ? 'bg-button_Color' : ''}`} ></div>
                          <p>Select all items</p>
                        </div>

                        {/* delete all items */}
                        <div onClick={() => HandleMessageDelete (item)} className=''>
                          <div className={`flex items-center gap-x-1 cursor-pointer absolut `}  >
                            <MdDeleteForever className='text-[22px]' />
                            <p>Delete</p>
                          </div>
                          {SelectMessage ?
                            (
                              <div className='border border-red-400 px-5 py-1  '>Select Items</div>
                            )
                            :
                            ''
                          }
                        </div>
                         {/* delete all items */}


                      </div>
                  </div>
                  {/*================ Select all items  =================*/}
                  

              {CartItem.map((item, id) => (          
                <div className='' key={id}>

                  <div className='flex items-start mt-2 justify-between mr-6 bg-slate-50'>
                    <div className='flex items-center gap-x-4'>
                    <div className={`w-4 h-4 border border-black cursor-pointer  ${SelectAllItem ? 'bg-button_Color' : ''}`} ></div>
                      <div className='w-20 h-20 shadow-md'>
                        <picture>
                          <img 
                            src={item.thumbnail} 
                            alt={item.thumbnail} 
                            className='w-full h-full rounded-md object-cover'
                          />
                        </picture>
                      </div>
                        <h6 className='font-DM_Sans text-main_text_color text-base font-medium w-[170px]'>
                          {item.title}
                        </h6>
                    </div>

                    <div className=''>
                        <div className='text-button_Color flex items-end'>
                        <p className='font-DM_Sans  text-[17px] font-bold '>
                          $
                        </p>
                        <p className='text-[22px]'>
                          { Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                        </p>
                        </div>

                        <div className='flex items-center gap-x-1 text-[22px] mt-3'>
                          <div className='cursor-pointer'  onClick={() => HandleWishListDeleteItem (item)}>
                            <CiHeart />
                          </div>
                          <div className='cursor-pointer'  onClick={() => HandleDeleteItem (item)}>
                            <MdDeleteForever   />
                          </div>
                        </div>
                    </div>

                    <div className=''>
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
                  </div>

                  {/* <div className='grow basis-60'>
                    <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                      {item.CartQuantity * Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                    </p>
                  </div> */}
                </div>
              ))}
            </div>
            </div>
  


            {/* ======= Total & subTotal =========== */}
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
            {/* ======= Total & subTotal =========== */}
            </div>
        </div>


            {/*============================== Responsive part ==============================*/}
            <div className=' max-sm:block lg:hidden xl:hidden max-md:hidden'>
              <div className='flex max-sm:flex-col gap-x-10 '>

              <div className='w-[800px] h-[500px] max-sm:w-[350px] overflow-y-scroll'>
              <div className=''>

                <div className='mb-6'>
                    <div className='bg-slate-50 flex items-center justify-between mr-6 py-2 '>
                      <div className='flex items-center gap-x-2'>
                        <div className='w-4 h-4 border-2 border-black cursor-pointer' ></div>
                        <p>Select all items</p>
                      </div>
                      <div className='flex items-center gap-x-1 cursor-pointer'>
                        <MdDeleteForever className='text-[22px]' />
                        <p>Delete</p>
                      </div>
                    </div>
                </div>

                {CartItem.map((item, id) => (          
                  <div className='' key={id}>

                    <div className='flex items-start mt-2 justify-between mr-6 bg-slate-50'>
                      <div className='flex items-center gap-x-4'>
                      <div className='w-4 h-4 border-2 border-black' ></div>
                        <div className='w-20 h-20 shadow-md'>
                          <picture>
                            <img 
                              src={item.thumbnail} 
                              alt={item.thumbnail} 
                              className='w-full h-full rounded-md object-cover'
                            />
                          </picture>
                        </div>
                          <h6 className='font-DM_Sans text-main_text_color text-base font-medium w-[170px]'>
                            {item.title}
                          </h6>
                      </div>


                      <div>

                      </div>
                        <div className=''>
                            <div className='text-button_Color flex items-end'>
                            <p className='font-DM_Sans  text-[17px] font-bold '>
                              $
                            </p>
                            <p className='text-[22px]'>
                              { Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                            </p>
                            </div>

                            <div className='flex items-center gap-x-1 text-[22px] mt-3'>
                              <div className='cursor-pointer'  onClick={() => HandleWishListDeleteItem (item)}>
                                <CiHeart />
                              </div>
                              <div className='cursor-pointer'  onClick={() => HandleDeleteItem (item)}>
                                <MdDeleteForever   />
                              </div>
                            </div>
                        </div>

                        <div className=''>
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
                    </div>

                    {/* <div className='grow basis-60'>
                      <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                        {item.CartQuantity * Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}
                      </p>
                    </div> */}
                  </div>
                ))}
              </div>
              </div>
    


              {/* ======= Total & subTotal =========== */}
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
              {/* ======= Total & subTotal =========== */}
              </div>
            </div>
            {/*============================== Responsive part ==============================*/}


     
          
           {/* <div className='flex flex-col items-center justify-center pb-[60px]'>
                <div className=''>
                    <FiShoppingCart className='text-[100px] text-gray-400' />
                </div>
                <p className='font-Josefin__Sans mt-9 text-[20px] text-gray-600'>
                    Your Shopping Cart is Empty
                </p>

                <div className='mt-11'>
                  <Link to={'/shop'}>
                    <button className='font-bold bg-slate-900 text-white px-7 py-3 text-[18px] rounded-xl hover:bg-orange-400'>
                        START SHOPPING
                    </button>
                  </Link>
                </div>
            </div>   */}
            


      </div>
    </div>
    </>
  )
}

export default Cart