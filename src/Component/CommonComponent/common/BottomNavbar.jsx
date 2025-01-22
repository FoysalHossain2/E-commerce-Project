import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";


const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-3">
        {/* Home */}
        <div className="flex flex-col items-center">
          <Link to={'/'} className="text-lg cursor-pointer text-orange-500">< IoHomeOutline /></Link>
        </div>
        {/* Categories */}
        <div className="flex flex-col items-center">
          <Link to={'/shop'} className="text-lg cursor-pointer text-gray-500"> <TbCategory /> </Link>
        </div>
        {/* Cart */}
        <div className="flex flex-col items-center">
          <Link to={'/cart'} className="text-lg cursor-pointer text-gray-500"> < FiShoppingCart/> </Link>
        </div>
        {/* Account */}
        <div className="flex flex-col items-center">
          <Link to={'/login'} className="text-lg cursor-pointer text-gray-500"><FaUser /></Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
