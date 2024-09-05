import React,{useEffect, useState} from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import Menubar from '../../CommonComponent/Menubar';
import { RxCross2 } from "react-icons/rx";
import LanguageConvert from '../../CommonComponent/LanguageConvert';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchResult from '../../CommonComponent/SearchResult/SearchResult';
import { GetTotalAmount } from '../../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice';
import AddToCartU from '../../CommonComponent/AddToCartU';



const Header = () => {

  const [Filter, setFilter] = useState(false)
  const [SlideshowMenu, setSlideshowMenu] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (SlideshowMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [SlideshowMenu]);



  const HandleSideMenu = () => {
    setSlideshowMenu(!SlideshowMenu)
}

// HideMenu function

  const HideMenu = () => {
    setSlideshowMenu(false)
    // setSlideshowMenu(true)
  }


  /**
   * @Search Option functionality implementation
   */
  const [AllProductSearch, setAllProductSearch] = useState([])
  const [SearchFunction, setSearchFunction] = useState([])

  
  const {data, status} = useSelector((state) => (state.product))

  useEffect(() => {
    if(status === 'IDLE') {
      setAllProductSearch(data.products)
    }
  }, [data, status,])


  /**
   * search functionality implementation ========
   * @param event  
   */
  const HandleSearch = (event) => {
   const {value} = event.target;

   if (value) {
    const searchResult = AllProductSearch.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()))
    setSearchFunction(searchResult);
    
   } else {
    setSearchFunction([]);
    
   }
   
  }


  // ========== show Cart items ==========
  const {TotalCartItem, TotalAmount, CartItem} = useSelector((state) =>state.cart)
  
  useEffect(() => {
    dispatch(GetTotalAmount())
  }, [dispatch, TotalCartItem, TotalAmount, CartItem])
    // ========== show Cart items ==========



  /**
   * @AddToCartItem  
   */
  
  // HandleSort functionality
  const HandleCartView = () => {
    setFilter(!Filter)
    setSort(false)
  }


  // HideMenu function

  const HideMenuSlide = () => {
    setFilter(false)
  }



  return (
    <>

    {/* sideShowMenu overlay part*/}
    <div className={`blackOverlay w-full h-full fixed duration-500 z-50`}
    style={{
      visibility: SlideshowMenu ? 'visible' : 'hidden'
    }}
    onClick={HideMenu}
    >
      <div className='w-[300px] h-full bg-zinc-200 absolute duration-500 overflow-scroll '
      style={{
        left: SlideshowMenu ? '0%' : '-100%'
      }}
      onClick={(e) => e.stopPropagation()}
      >
        <Menubar />
      </div>
      <button className='ml-[550px] text-white text-[30px]'><RxCross2 /></button>
    </div>
     {/* sideShowMenu overlay part*/}

      {/*============== sideShowMenu overlay AddToCart part ================*/}
        <div className={`blackOverlay w-full h-full fixed duration-500 z-50`}
        style={{
          visibility: Filter ? 'visible' : 'hidden'
        }}
        onClick={HideMenuSlide}
        >
          <div className='w-[400px] max-sm:w-[320px] h-full bg-slate-200 absolute duration-500 overflow-y-scroll '
          style={{
            right: Filter ? '0%' : '-100%'
          }}
          onClick={(e) => e.stopPropagation()}
          >

            <AddToCartU />

          </div>
          {/* <button className='ml-[1650px] text-white text-[30px]'><RxCross2 /></button> */}
        </div>
    {/*============== sideShowMenu overlay AddToCart part ================*/}

  
     {/* Header part */}
    <div className={`py-4 max-sm:py-2
       bg-white border `} >
      <div className="container mx-auto ">
        <div className='flex lg:items-center  justify-between  
          max-sm:flex-col max-md:flex-col md:flex-col lg:flex-row 
          max-sm:px-2 max-md:px-2 md:px-2 lg:px-0
        '>
           {/* ================== Responsive Design part =================== */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center '> 
                  {/* ==== menubar ===== */}
                  <IoMenu onClick={HandleSideMenu} className='cursor-pointer text-2xl max-sm:block hidden md:block max-md:block lg:hidden'  />
                  {/* ==== menubar ===== */}

              {/*----- logo ----- */}
                  <div className='flex items-center'>
                      <img src="https://pbs.twimg.com/profile_images/1442946691028570114/GKK_SKdR_400x400.jpg" alt="" className='w-10 h-10' />
                    <h1 className='text-green-400 font-bold  text-[10px]'>
                      <Link to={'/'}>Shop.com</Link>
                    </h1>
                  </div>
                </div>
              {/*----- logo ----- */}

                <div className='max-sm:block md:block lg:hidden'>
                  <div className='flex items-center gap-x- '>
                      {/* --------------- login part ------------------*/}
                      <div className='flex items-center gap-x-1  text-white px-[10px] py-[5px] rounded-3xl'>
                      <FaUser className='cursor-pointer text-orange-400 text-[20px]' />
                        {/* <p className='font-bold'>
                          sing in
                        </p> */}
                      </div>
                      {/* --------------- login part ------------------*/}

                      {/* ----------- cart ---------------- */}
                      <div className=' px-[10px] py-[5px] rounded-3xl cursor-pointer'   onClick={HandleCartView}>
                      <div className='flex items-center gap-x-2'>  
                        <div className='cursor-pointer '>
                          <FiShoppingCart className='text-[20px] ' />
                          <span class="absolute ml-3 -mt-8 flex items-center justify-center rounded-full h-5 w-5 text-white bg-zinc-500">                               
                              {TotalCartItem}
                          </span>
                        </div>


                      </div>
                    </div>
                    {/* ----------- cart ---------------- */}
                  </div>
                </div>

              </div>
              {/* ================== Responsive Design part =================== */}


            {/*====================== Search option ======================*/}
              <div  class="lg:max-w-[500px] max-md:max-w-[700px] w-full max-sm:mt-2 md:mt-4 max-md:mt-4 lg:mt-0">
                <div class="relative flex">
                    <input 
                    type="text"
                        name="q" 
                        class="w-full border py-[8px] shadow rounded-l-full dark:text-gray-800 border-button_Color dark:bg-gray-200 pl-4" 
                        placeholder="search product"
                        onChange={HandleSearch}
                    />
                    <button type="submit"  className=' bg-button_Color py-[8px] rounded-r-full hover:bg-pink-600 '>
                    <HiOutlineSearch 
                      className='ml-3 text-[23px] 
                      cursor-pointer mr-3
                      '/>
                    </button>
                  {SearchFunction.length > 0 && (
                    <div className=''>                      
                      <SearchResult className={'absolute left-[3%] top-[100%] z-10  h-[700px]  lg:max-w-[600px] max-md:max-w-[600px] w-full'} 
                      SearchProps={SearchFunction}
                      />
                    </div>
                  )
                  } 
                </div>
            </div>
            {/*====================== Search option ======================*/}


            {/* ====================== singIn , login & other option ====================== */}
            <div className=' max-sm:hidden md:hidden max-md:hidden lg:block '>
              <div className='flex items-center gap-x-4 '>

                  <div className='max-sm:hidden block'>
                    <LanguageConvert />
                  </div>

                  <div className='border-r border-gray-300 h-5 w-[2px]  max-sm:hidden block'></div>

                {/* --------------- login part ------------------*/}
                <div className='flex items-center gap-x-1 bg-slate-800 text-white px-[10px] py-[5px] rounded-3xl'>
                  <FaUser className='cursor-pointer text-orange-400 text-[20px]' />
                    <p className='font-bold'>
                      sing in
                    </p>
                </div>
                {/* --------------- login part ------------------*/}

                <div className='border-r border-gray-300 h-5 w-[2px]  '></div>

                {/* ======================== AddToCart Part ======================= */}
                <div className='bg-orange-400 px-[10px] py-[5px] rounded-3xl text-white cursor-pointer'  onClick={HandleCartView}>
                  <div className='flex items-center gap-x-2'>  
                    <div className='text-[18px] cursor-pointer'>
                      <FiShoppingCart />
                    </div>
                    <h3 className='font-DM_Sans font-bold flex items-center'>
                      cart
                    <span class=" ml-1 flex items-center justify-center rounded-full h-4 w-4 bg-white text-[14px] text-orange-400 ">                               
                    {TotalCartItem ? TotalCartItem : ''}
                     </span>
                    </h3>
                  </div>
                </div>
                {/* ======================== AddToCart Part ======================= */}

              </div>
            </div>
            {/* ============================= sing in , login & other option ============================= */}

        </div>
      </div>
    </div>
    {/* Header part */}



    {/* sideShowMenu Btn */}
    <div className='bg-[#F6F5FF] py-1 max-sm:hidden md:hidden max-md:hidden lg:block'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-x-4 text-center'>
          <IoMenu onClick={HandleSideMenu} className='cursor-pointer text-2xl'  />
          <p className='font-Josefin__Sans font-bold text-[15px]'>ALL</p>
        </div>
       </div>
    </div>
    {/* sideShowMenu Btn */}
    </>
  )
}

export default Header;