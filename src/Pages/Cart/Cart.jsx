import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { MdCancel } from "react-icons/md";
import {  useDispatch, useSelector } from 'react-redux'
import { GetTotalAmount, ProductDecrement, ProductIncrement, RemoveCart , addToCart} from '../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FetchDataProduct } from '../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice';
import Products from '../../Component/CommonComponent/Products';

console.log(addToCart);


const Cart = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [AllProducts, setAllProducts] = useState([]);
  const {CartItem, TotalCartItem, TotalAmount} = useSelector((state) => state.cart)


  

  
  useEffect(() => {
    dispatch(FetchDataProduct('https://dummyjson.com/products?limit=1000'))
  }, [])
  

    const {data, status} = useSelector((state) => (state.product))
    
    useEffect(() => {
      if(status === 'IDLE') {
        setAllProducts(data.products)
      }
    }, [data, status, setAllProducts])
    

  

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

        { RemoveCart 
          ?
          (

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
                        {item.title}
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
          )
          :
          (
            <h1>Empty</h1>
          )
        }

     
          
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
            

            {/* =================================== Recommend Part ===================================== */}
            <div className='mt-[100px]'>
              <div className='grid grid-cols-4'>
                  {AllProducts?.slice(30,150).map((item, id) => (
                      <div className='xl:w-[100px]' key={id}>
                        <Products
                              image={item.thumbnail}
                              title={item. description} 
                            />
                      </div>
                    ))}
                </div>
            </div>
            {/* =================================== Recommend Part ===================================== */}


      </div>
    </div>
    </>
  )
}

export default Cart