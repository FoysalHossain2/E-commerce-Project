import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart, addToWishList, ProductDecrement, ProductIncrement } from '../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';
import { FetchDataProduct } from '../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice';
import ProductRatingStart from './ProductRatingStart';


const ProductDetailsRight = () => {

  const dispatch = useDispatch();
  const naviGate = useNavigate();
  const [EachCartItem, setEachCartItem] = useState({})
  const {productId} = useParams()

  const {CartItem} = useSelector((state) => state.cart)
  
  
  
  useEffect(() => {
    dispatch(FetchDataProduct(`https://dummyjson.com/products/${productId}`))
  }, [])
  
  const {data, status} = useSelector((state) => state.product)
  


    useEffect(() => {
      if (status === "IDLE") {
        setEachCartItem(data)
      }
    }, [data, status])
    


  // HandleAddToCart
  const HandleAddToCart = () => {
    dispatch(addToCart(EachCartItem))
  }


  // HandleWishList functionality
  const HandleWishList = () => {
    dispatch(addToWishList(EachCartItem))

    
  }
  
  

  // HandleDecrementItem function
  const HandleDecrementItem = (item) => {
    dispatch(ProductDecrement(item))
    
  }

  // HandleIncrementItem function
  const HandleIncrementItem = (item) => {
    dispatch(ProductIncrement(item))
    console.log(item);
    
  }






  return (
    <>
    <div className='max-sm:px-3  pb-14'>

      <div className='max-sm:mt-8'>
        <p className='font-Josefin__Sans text-4xl max-sm:text-[25px] font-bold mb-4 text-[#0D134E]'>
          {EachCartItem.title}
        </p>
      </div>

      <h1 className='font-DM_Sans text-lg font-semibold'>
        {EachCartItem.description ? EachCartItem.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </h1>
      
      {/*========= rating Review =========*/}
      <div className=' mt-5'>
        <ProductRatingStart ratingStar={EachCartItem.rating} />
      </div>
      {/*========= rating Review =========*/}


      <div className="border-b w-full mt-5 border-zinc-300"></div>

      {/*======== Price percentage =======*/}
      <div className=' mt-5 '>
        <div className='flex items-center gap-x-3'>
          <div className='flex items-center font-DM_Sans'>
            <p>$</p>
            <p className='text-button_Color text-[28px]'>
              { Math.round(EachCartItem.price - Math.floor((EachCartItem.price * EachCartItem.discountPercentage / 100)))}
            </p>
          </div>
          <div>
            -{Math.floor(EachCartItem.discountPercentage)}%
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <p>List Price:</p>
          <p  className=' line-through'>
            ${Math.round(EachCartItem.price ? EachCartItem.price : '$32.00')}
          </p>
        </div>
      </div>
      {/*======== Price percentage =======*/}

      {/*========= Color part ==========*/}
          <div className='mt-6  flex items-center gap-x-4'>
            <p>Color:</p>
            <div className='flex items-center gap-x-4 '>
              <p className='w-6 h-6  hover:border rounded-md'></p>
            </div>
          </div>
      {/*========= Color part ==========*/}

      <div className='mt-8'>
        <p>
            <span className={`font-Roboto font-bold ${EachCartItem.stock === 0 ? 'text-red-500' : 'text-green-600'}`}>
              In Stock
            </span> 
          <span className='px-3 font-bold'>:</span>
           {EachCartItem.stock}
        </p>
      </div>

      {/* ======== Quantity ============ */}
        <div className='flex items-center gap-x-4 mt-4' >
          <p>Quantity :</p>
          <p className='w-[150px] py-1 border bg-red-200 rounded-full flex items-center justify-center gap-x-4'>
              <button className='text-[18px] cursor-pointer'  onClick={() => HandleDecrementItem (item)}>
                <FaMinus /> 
              </button> 
                <span className='text-[20px]'>2</span> 
              <button className='text-[18px] cursor-pointer'  onClick={() => HandleIncrementItem (item)}> 
                <FaPlus /> 
                
              </button>
          </p>
        </div>
      {/* ======== Quantity ============ */}

      {/*============= addToCart =============*/}
      <div className=' max-sm:fixed max-sm:bottom-0'>
        <div className='flex items-center gap-x-3 mt-4'>
            <div className='w-[200px] max-sm:w-[150px] py-3 bg-button_Color text-center font-Roboto font-bold text-white text-[20px] cursor-pointer' onClick={HandleAddToCart}>
              ADD TO CART 
            </div>
          <div className='w-[200px]  max-sm:w-[150px] py-3 bg-green-600 text-center font-Roboto font-bold text-white text-[20px] cursor-pointer'>
             BUY NOW
          </div>

          {/* <div>
            <div className='border px-3 py-3 text-[27px] bg-slate-800 text-white cursor-pointer'  onClick={HandleWishList}>
              <IoIosHeartEmpty />
            </div>
          </div> */}
        </div>
      </div>
      {/*============= addToCart =============*/}


      {/*  */}
        <div className='flex gap-x-20 mt-6'>
          <div className='font-DM_Sans'>
            <p>Category</p>
            <p>Brand</p>
          </div>
           <div>
              <p>{EachCartItem.category}</p>
              <p>{EachCartItem.brand}</p>
           </div>
        </div>
      {/*  */}

    </div>
    </>
  )
}

export default ProductDetailsRight