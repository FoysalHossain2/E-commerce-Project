import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
// import { HiOutlineSearch } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetTotalAmount } from "../../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice";
import AddToCartU from "../../CommonComponent/AddToCartU";
import Menubar from "../../CommonComponent/Menubar";
// import SearchResult from "../../CommonComponent/SearchResult/SearchResult";
import Search from "../../CommonComponent/Search";
import BottomNavbar from '../../CommonComponent/common/BottomNavbar'
import { useLocation } from "react-router-dom";
import HeaderTop from '../../CommonComponent/common/HeaderTop'


const Header = () => {
  const [Filter, setFilter] = useState(false);
  const navigate = useNavigate();
  const [SlideshowMenu, setSlideshowMenu] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    if (SlideshowMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [SlideshowMenu]);

  const HandleSideMenu = () => {
    setSlideshowMenu(!SlideshowMenu);
  };

  // HideMenu function

  const HideMenu = () => {
    setSlideshowMenu(false);
    // setSlideshowMenu(true)
  };

 

  // ========== show Cart items ==========
  const { TotalCartItem, TotalAmount, CartItem } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(GetTotalAmount());
  }, [dispatch, TotalCartItem, TotalAmount, CartItem]);
  // ========== show Cart items ==========

  /**
   * @AddToCartItem
   */

  // HandleSort functionality
  const HandleCartView = () => {
    setFilter(!Filter);
  };

  // HideMenu function

  const HideMenuSlide = () => {
    setFilter(false);
  };

  const toggleMenu = () => {
    navigate("/cart");
    setFilter((Filter) => !Filter);
  };

  // HandleWISHLIST functionality
  // const HandleWISHLIST = (e) => {
  //   e.preventDefault()
  //   navigate('/wishList')
  // }




  return (
    <>
      {/* sideShowMenu overlay part*/}
      <div
        className={`blackOverlay w-full h-full fixed duration-500 z-50`}
        style={{
          visibility: SlideshowMenu ? "visible" : "hidden",
        }}
        onClick={HideMenu}
      >
        <div
          className="w-[300px] h-full bg-zinc-200 absolute duration-500 overflow-y-scroll "
          style={{
            left: SlideshowMenu ? "0%" : "-100%",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Menubar />
        </div>
        <button className="ml-[299px]  text-orange-400 text-[30px]">
          <RxCross2 />
        </button>
      </div>
      {/* sideShowMenu overlay part*/}

      {/*== sideShowMenu overlay AddToCart part ====*/}
      <div
        className={`blackOverlay w-full h-full fixed duration-500 z-50`}
        style={{
          visibility: Filter ? "visible" : "hidden",
        }}
        onClick={HideMenuSlide}
      >
        <div
          className="w-[400px] max-sm:w-[300px] h-full bg-slate-200 absolute duration-500 overflow-y-scroll "
          style={{
            right: Filter ? "0%" : "-100%",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <AddToCartU toggleMenu={toggleMenu} />
        </div>
        {/* <button className='ml-[1650px] text-white text-[30px]'  onClick={toggleMenu}><RxCross2 /></button> */}
      </div>
      {/*== sideShowMenu overlay AddToCart part ====*/}

      {/* ====== Header Top part ======= */}
      {/* <div className="bg-pink-500 py-2">
        <div className="container mx-auto">
          <div className="flex justify-end">
            <LanguageConvert />
          </div>
        </div>
      </div> */}
      {/* ====== Header Top part ======= */}


      {/*=========== Header part =*/}

      {/* for lg device */}
      <div className="lg:block hidden">
        <HeaderTop />
      </div>
      <div
        className={`py-[10px] max-sm:py-2
       border-b lg:block hidden`}
      >
        <div className="container mx-auto ">
          <div
            className="flex lg:items-center  justify-between  
          max-sm:flex-col max-md:flex-col md:flex-col lg:flex-row 
          max-sm:px-2 max-md:px-2 md:px-2 lg:px-0
        "
          >
              <div className="flex items-center">
              <h1 className=" ">
                <Link to={"/"} className="font-Josefin__Sans text-[20px]">
                  <img 
                  src="https://www.pngkey.com/png/detail/209-2092097_-img-nintendo-eshop-logo-png.png"
                   alt=""
                   className="w-16"
                   />
                </Link>
              </h1>
            </div>

            {/*========== Search option ==========*/}
            <div className="lg:max-w-[500px] max-md:max-w-[700px] w-full max-sm:mt-2 md:mt-4 max-md:mt-4 lg:mt-0">
              <Search className="relative" />
            </div>
            {/*========== Search option ==========*/}

            {/* ========== singIn , login & other option ========== */}
            <div className=" max-sm:hidden md:hidden max-md:hidden lg:block ">
              <div className="flex items-center gap-x-4 ">
                <div className="border-r border-gray-300 h-5 w-[2px]  max-sm:hidden block"></div>

                <Link to={"/wishList"}>
                  <div className="bg-zinc-700 px-[12px] py-[5px] rounded-3xl text-white cursor-pointer">
                    <p>WISHLIST</p>
                  </div>
                </Link>

                <div className="border-r border-gray-300 h-5 w-[2px]  max-sm:hidden block"></div>

                {/* --------------- login part ------------------*/}
                <Link to={"/login"}>
                  <div className="flex items-center gap-x-1 bg-slate-200 px-[12px] py-[5px] rounded-3xl  cursor-pointer">
                    <FaUser className="cursor-pointer  text-[20px]" />
                    <p className="">sing in</p>
                  </div>
                </Link>
                {/* --------------- login part ------------------*/}

                <div className="border-r border-gray-300 h-5 w-[2px]  "></div>

                {/*  AddToCart Part =========== */}
                <div
                  className="bg-orange-400 px-[12px] py-[5px] rounded-3xl text-white cursor-pointer"
                  onClick={HandleCartView}
                >
                  <div className="flex items-center gap-x-2">
                    <div className="text-[18px] cursor-pointer">
                      <FiShoppingCart />
                    </div>
                    <h3 className="font-DM_Sans font-bold flex items-center">
                      cart
                      <span className=" ml-1 flex items-center justify-center rounded-full h-4 w-4 bg-white text-[14px] text-orange-400 ">
                        {TotalCartItem ? TotalCartItem : ""}
                      </span>
                    </h3>
                  </div>
                </div>
                {/*  AddToCart Part =========== */}
              </div>
            </div>
            {/* ===== sing in , login & other option ===== */}
          </div>
        </div>
      </div>

          {/* for sm, md device */}
      <div  
        className={`py-[10px] max-sm:py-2
       border-b lg:hidden block`}
      >
        <div className="container mx-auto ">
          <div
            className="flex lg:items-center  justify-between  
          max-sm:flex-col max-md:flex-col md:flex-col lg:flex-row 
          max-sm:px-2 max-md:px-2 md:px-2 lg:px-0
        "
          >
             <div className="flex justify-between items-center">
                  {/*========== sideShowMenu Btn ========*/}
                  <div className="bg-[#F6F5FF] py-1 ">
                    <div className="container mx-auto">
                      <div
                        className="flex items-center gap-x-1 text-center cursor-pointer w-20"
                        onClick={HandleSideMenu}
                      >
                        <IoMenu className="cursor-pointer text-2xl" />
                      </div>
                    </div>
                </div>
               {/* sideShowMenu Btn ===========*/}

              <h1 className="text-green-400 font-bold  text-[10px] ">
                <Link to={"/"} className="font-Josefin__Sans text-[20px]">
                  <img 
                    src="https://www.pngkey.com/png/detail/209-2092097_-img-nintendo-eshop-logo-png.png" 
                    alt="" 
                    className="w-16"
                  />
                </Link>
              </h1>
              <div></div>
            </div>

            {/*========== Search option ==========*/}
            <div className="lg:max-w-[500px] max-md:max-w-[700px] w-full max-sm:mt-2 md:mt-4 max-md:mt-4 lg:mt-0">
             <Search className="relative" />
            </div>
            {/*========== Search option ==========*/}

          </div>
        </div>
      </div>
      <div className=" xl:hidden lg:hidden block">
        {/* <BottomNavbar TotalCartItem={TotalCartItem}  /> */}
      </div>
      {/*=========== Header part =*/}
       
    </>
  );
};

export default Header;
