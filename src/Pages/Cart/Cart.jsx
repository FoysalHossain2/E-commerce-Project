import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { MdCancel } from "react-icons/md";
import {  useDispatch, useSelector } from 'react-redux'
import { RemoveCart } from '../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const {CartItem} = useSelector((state) => state.cart)

  console.log(CartItem);
  

  // HandleDeleteItem
  const HandleDeleteItem = (item) => {
    dispatch(RemoveCart(item))
  }




  return (
    <>
    <div className='pt-[120px] pb-[145px]'>
      <div className="container mx-auto">
          <div className='w-[750px]'>
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
                        <button > 
                            <FaMinus /> 
                        </button>
                        <p>{1}</p>
                        <button >
                            <FaPlus/> 
                        </button>
                    </div>
                  </div>
                </div>

                <div className='grow basis-60'>
                  <p className='font-DM_Sans text-main_text_color text-base font-bold'>
                    $44
                  </p>
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

export default Cart