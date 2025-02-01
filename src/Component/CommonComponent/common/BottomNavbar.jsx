import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetTotalAmount } from "../../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice";


const BottomNavbar = () => {

  const dispatch = useDispatch()
  // ========== show Cart items ==========
  const { TotalCartItem, TotalAmount, CartItem } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(GetTotalAmount());
  }, [dispatch, TotalCartItem, TotalAmount, CartItem]);
  // ========== show Cart items ==========



  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-3">
        {/* Home */}
        <div className="flex flex-col items-center">
          <NavLink to={'/'} className="text-[24px] cursor-pointer text-orange-500">< IoHomeOutline /></NavLink>
        </div>
        {/* Cart */}
        <div className="flex flex-col items-center">
          <NavLink to={'/cart'} className="text-[24px] cursor-pointer text-gray-500">
           < FiShoppingCart/>
           <p className={`absolute bottom-6 ml-5 text-[17px] text-red-400 ${TotalAmount ? 'block' : 'hidden'}`}>{TotalCartItem ? TotalCartItem : 0}</p>
           </NavLink>
        </div>
        {/* Categories */}
        <div className="flex flex-col items-center">
          <NavLink to={'/WishList'} className="text-[24px] cursor-pointer text-gray-500"> <FaRegHeart /> </NavLink>
        </div>
        {/* Account */}
        <div className="flex flex-col items-center">
          <NavLink to={'/login'} className="text-[24px] cursor-pointer text-gray-500"><FaUser /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
