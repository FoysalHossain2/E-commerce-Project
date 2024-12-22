import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCartWishList } from "../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice";

const WishListAdd = () => {
  const dispatch = useDispatch();

  const { cartWishList } = useSelector((state) => state.cart);

  // HandleWishListDeleteItem
  const HandleWishListDeleteItem = (item) => {
    dispatch(RemoveCartWishList(item));
  };

  console.log(cartWishList);

  return (
    <>
      <div className="py-[120px]">
        <div>
          <div className=" grid grid-cols-2 gap-x-10">
            {cartWishList.length > 0 ? (
              cartWishList?.map((item, id) => (
                <div key={id} className="mt-4">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <div className="w-[100px] h-[100px]">
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <p className="ml-8">{item.price}</p>
                    </div>
                    <p className="w-[400px]">{item.description}</p>

                    <div
                      className="text-[25px] cursor-pointer"
                      onClick={() => HandleWishListDeleteItem(item)}
                    >
                      <MdDeleteForever />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="flex items-center justify-center font-DM_Sans text-2xl text-red-600">
                WhishList is empty
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListAdd;
