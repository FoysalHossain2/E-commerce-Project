import React,{useEffect, useState} from 'react'
// import logo from '../../assets/logo.png'
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



const Header = () => {

  const [SlideshowMenu, setSlideshowMenu] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);


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
   * Search Option
   */
  const [AllProductSearch, setAllProductSearch] = useState([])
  
  const {data, status} = useSelector((state) => (state.product))

  console.log(AllProductSearch);

  useEffect(() => {
    if(status === 'IDLE') {
      setAllProductSearch(data.products)
    }
  }, [data, status,])

  const HandleSearch = (e) => {
    console.log(e.target.value);
  }



  return (
    <>

    {/* sideShowMenu overlay part*/}
    <div className={`blackOverlay w-full h-full fixed duration-500 `}
    style={{
      visibility: SlideshowMenu ? 'visible' : 'hidden'
    }}
    onClick={HideMenu}
    >
      <div className='w-[300px] h-full bg-zinc-200 absolute duration-500 overflow-scroll'
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
    <div className={`py-3 bg-white`} >
      <div className="container mx-auto ">
        <div className='flex items-center justify-between'>
  
            <div className='flex items-center gap-x-8'> 
              {/*----- logo ----- */}
              <h1 className='text-green-400 font-bold text-3xl '>
                 <Link to={'/'}>Shop.com</Link>
              </h1>
              {/*----- logo -----*/}

            </div>

            {/*------ Search option --------*/}
            <div className='flex items-center gap-x-7'>
                <div className='flex items-center w-[200px]  md:w-[500px]'>
                  <input 
                    type="text" 
                    placeholder='Search'
                    className='bg-slate-200 py-[8px] md:w-[500px] rounded-l-2xl px-2'
                    onChange={HandleSearch}
                  />

                  <div className=' bg-button_Color py-[8px] rounded-r-2xl hover:bg-pink-600 '>
                    <HiOutlineSearch 
                      className='ml-3 text-[23px] 
                      cursor-pointer mr-3
                      '
                    />
                  </div>
                </div>
            </div>
            {/*------ Search option --------*/}

            <div className='flex items-center gap-x-5'>

                <div>
                  <LanguageConvert />
                </div>

                <div className='border-r border-gray-400 h-6 w-1'></div>

              {/* --------------- login part ------------------*/}
              <div className='flex items-center gap-x-1 bg-slate-800 text-white px-[10px] py-2 rounded-3xl'>
                <FaUser className='cursor-pointer text-orange-400 text-[23px]' />
                  <p className='font-bold'>
                    sing in
                  </p>
              </div>
              {/* --------------- login part ------------------*/}

              <div className='border-r border-gray-400 h-6 w-1'></div>

              <div className='bg-orange-400 px-[10px] py-2 rounded-3xl text-white cursor-pointer'>
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
      </div>
    </div>
    {/* Header part */}
        <hr />


    {/* sideShowMenu Btn */}
    <div className='bg-[#F6F5FF] py-2 '>
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