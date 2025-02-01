import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
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

        <div className='  '>
            <div className='flex max-sm:flex-col gap-x-10 '>
          
            <div className='w-[800px]'>

                    

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                      {/* Table Head */}
                      <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                          <th className="py-3 px-4 text-left">
                            <input type="checkbox" />
                            <span className="ml-2">Product</span>
                          </th>
                          <th className="py-3 px-4 text-center">Unit Price</th>
                          <th className="py-3 px-4 text-center">Quantity</th>
                          <th className="py-3 px-4 text-center">Subtotal</th>
                          <th className="py-3 px-4 text-center">Remove</th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {CartItem.map((item) => (
                          <tr key={item.id} className="border-t">
                            <td className="py-4 px-4 flex items-center gap-3">
                              <input type="checkbox" />
                              <img src={item.thumbnail} alt={item.thumbnail} className="w-16 h-16 rounded-md object-cover" />

                            </td>
                            <td className="py-4 px-4 text-center font-semibold text-gray-700">${item.price.toFixed(2)}</td>
                            <td className="py-4 px-4 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  className="border px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200"
                                  onClick={() => HandleDecrementItem (item)}
                                >
                                  -
                                </button>
                                <span className="text-gray-800 font-semibold">{item.CartQuantity}</span>
                                <button
                                  className="border px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200"
                                  onClick={() => HandleIncrementItem (item)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-center font-semibold text-gray-700">
                            {TotalAmount}
                            </td>
                            <td className="py-4 px-4 text-center">
                              <button className="text-red-500 hover:text-red-700" onClick={() => removeItem(item.id)}>
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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