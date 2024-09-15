import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WishListAdd = () => {


    const dispatch = useDispatch();


    const {CartItem} = useSelector((state) => state.cart)
    console.log(CartItem);
    

    // useEffect(() => {
    //   dispatch(GetTotalAmount())
    // }, [CartItem, dispatch])
    



  return (
    <>
       <div className='py-20'>
        <div className='container mx-auto'>
          <div className='bg-zinc-200'>
              {CartItem?.map((item, id) => (
                <div key={id} >
                  <div className='flex items-center gap-x-3'>
                    <div className='w-[100px] h-[100px]'>
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <p className='w-[400px]'>{item.description}</p>
                  </div>
                  <p>{}</p>
                </div>
              ))}
          </div>
        </div>
       </div>
    </>
  )
}

export default WishListAdd