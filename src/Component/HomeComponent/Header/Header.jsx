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
import { useSelector } from 'react-redux';
import SearchResult from '../../CommonComponent/SearchResult/SearchResult';



const Header = () => {

  const [SlideshowMenu, setSlideshowMenu] = useState(false);


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
   * 
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

  
     {/* Header part */}
    <div className={`py-4 bg-white border `} >
      <div className="container mx-auto ">
        <div className='flex lg:items-center  justify-between  
          max-sm:flex-col max-md:flex-col md:flex-col lg:flex-row 
          max-sm:px-2 max-md:px-2 md:px-2 lg:px-0
        '>
  
              {/*----- logo ----- */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center '> 
                  {/* ==== menubar ===== */}
                  <IoMenu onClick={HandleSideMenu} className='cursor-pointer text-2xl max-sm:block hidden md:block max-md:block lg:hidden'  />
                  {/* ==== menubar ===== */}

                  <div className='flex items-center'>
                      <img src="https://pbs.twimg.com/profile_images/1442946691028570114/GKK_SKdR_400x400.jpg" alt="" className='w-10 h-10' />
                    <h1 className='text-green-400 font-bold  text-[10px]'>
                      <Link to={'/'}>Shop.com</Link>
                    </h1>
                  </div>
                </div>

                <div className='max-sm:block md:block lg:hidden'>
                  <div className='flex items-center gap-x-5 '>
                      {/* --------------- login part ------------------*/}
                      <div className='flex items-center gap-x-1 bg-slate-800 text-white px-[10px] py-[5px] rounded-3xl'>
                      <FaUser className='cursor-pointer text-orange-400 text-[20px]' />
                        {/* <p className='font-bold'>
                          sing in
                        </p> */}
                      </div>
                      {/* --------------- login part ------------------*/}

                      {/* ----------- cart ---------------- */}
                      <div className='bg-orange-400 px-[10px] py-[5px] rounded-3xl text-white cursor-pointer'>
                      <div className='flex items-center gap-x-2'>  
                        <div className='text-[18px] cursor-pointer'>
                          <FiShoppingCart />
                        </div>
  
                      </div>
                    </div>
                    {/* ----------- cart ---------------- */}
                  </div>
                </div>

              </div>
              {/*----- logo -----*/}


            {/*------ Search option --------*/}
              <div  class="lg:max-w-[600px] max-md:max-w-[700px] w-full max-sm:mt-4 md:mt-4 max-md:mt-4 lg:mt-0">
                <div class="relative flex">
                    <input 
                    type="text"
                        name="q" 
                        class="w-full border h-12 shadow p-2 rounded-l-full dark:text-gray-800 border-button_Color dark:bg-gray-200 pl-4" 
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
            {/*------ Search option --------*/}


            {/* ======== sing in , login & other option =========== */}
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

                <div className='bg-orange-400 px-[10px] py-[5px] rounded-3xl text-white cursor-pointer'>
                  <div className='flex items-center gap-x-2'>  
                    <div className='text-[18px] cursor-pointer'>
                      <FiShoppingCart />
                    </div>
                    <h3 className='font-DM_Sans font-bold'>
                      cart
                    </h3>
                  </div>
                </div>

              </div>
            </div>
            {/* ======== sing in , login & other option =========== */}

        </div>
      </div>
    </div>
    {/* Header part */}



    {/* sideShowMenu Btn */}
    <div className='bg-[#F6F5FF] py-2 max-sm:hidden md:hidden max-md:hidden lg:block'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-x-4 text-center'>
          <IoMenu onClick={HandleSideMenu} className='cursor-pointer text-2xl'  />
          <p className='font-Josefin__Sans font-bold text-[15px]'>ALL  Categories</p>
        </div>
       </div>
    </div>
    {/* sideShowMenu Btn */}
    </>
  )
}

export default Header;