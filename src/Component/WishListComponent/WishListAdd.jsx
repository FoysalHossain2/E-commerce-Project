import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveCartWishList } from '../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';

const WishListAdd = () => {


    const dispatch = useDispatch();


    const {cartWishList} = useSelector((state) => state.cart)
    



    // HandleWishListDeleteItem
    const HandleWishListDeleteItem = (item) => {
      dispatch(RemoveCartWishList(item))
    }

    



  return (
    <>
       <div className='py-[120px]'>
        <div className='container mx-auto'>
          <div className='bg-zinc-200 grid grid-cols-2 gap-x-10'>
              {cartWishList?.map((item, id) => (
                <div key={id} className='mt-4'>
                  <div className='flex items-center gap-x-3'>
                    <div>
                      <div className='w-[100px] h-[100px]'>
                        <img src={item.thumbnail} alt="" />
                      </div>
                        <p className='ml-8'>{item.price}</p>
                    </div>
                    <p className='w-[400px]'>{item.description}</p>

                    <div className='text-[25px] cursor-pointer'  onClick={() => HandleWishListDeleteItem (item)}>
                      <MdDeleteForever />
                    </div>

                  </div>
                </div>
              ))}
          </div>
        </div>
       </div>
    </>
  )
}

export default WishListAdd