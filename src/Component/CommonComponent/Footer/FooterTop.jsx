import React from 'react'
import FooterItem from '../FooterItem'
import QRcode from '../../../assets/FooterImg/QRcode.png'
import AppelAppStore from '../../../assets/FooterImg/AppelAppStore.png'
import googlePlayStor from '../../../assets/FooterImg/googlePlayStor.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom'



const FooterTop = () => {
  return (
    <>
     <div className='pt-20 pb-14'>
      <div className="container mx-auto">

        <div className='text-white max-sm:px-2 lg:px-3'>
          <div className='xl:flex xl:justify-between lg:flex lg:gap-x-[35px] max-sm:flex-col'>

            <div>
              <Link to={'/'}>
                <h1 className='font-DM_Sans font-bold pb-6 text-[34px] cursor-pointer w-[160px] h-[52px] text-green-500 '>
                  Shop.com
                </h1>
              </Link>
              <p className='pb-6 font-DM_Sans text-[20px] font-medium pt-6'>
                Subscribe
              </p>
              <p className='font-DM_Sans text-[16px]'>Get 10% off your first order</p>

              <hr className='mt-4 ' />

            </div>

            {/* ===== Support part ====== */}
            <div className='max-sm:mt-10'>
              <h1 className='font-DM_Sans font-bold pb-6 text-[24px] text-button_Color'>
                Support
              </h1>
              <p className='font-DM_Sans pb-4'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
              <p className='font-DM_Sans pb-4'>fh375170@gmail.com</p>
              <p className='font-DM_Sans'>+88015-88888-9999</p>
            </div>
            {/* ===== Support part ====== */}

            <FooterItem
              title={'Account'}
              allItems={
                [
                  'My Account', 
                  'Login / Register', 
                  'Returns & Refunds',
                  'Cart', 
                  'Wishlist',
                  'Shop'
                ]
              }  
            />

            <FooterItem
              title={'Quick Link'}
              allItems={
                [
                  'Privacy Policy', 
                  'Terms Of Use',
                  'FAQ', 
                  'Contact',
                ]
              }  
            />

            <div className='max-sm:mt-10'>
              <h1 className='font-DM_Sans font-bold pb-6 text-[24px] text-button_Color'>
                Download App
              </h1>
              <p className='font-Josefin__Sans pb-2'>Save $3 with App New User Only</p>

              <div className='flex gap-x-[10px] pb-6'>
                <img src={QRcode} alt="" />
                <div className='flex flex-col gap-y-[10px]'>
                  <img src={googlePlayStor} alt="" />
                  <img src={AppelAppStore} alt="" />
                </div>
              </div>

              {/* social Link */}
                <div className='flex items-center gap-x-6 text-[23px]'>
                  <a href="https://www.facebook.com/profile.php?id=61550275201598" className='cursor-pointer'> <FaFacebookF />  </a>
                  <a href="https://www.linkedin.com/in/foysal-hossain-3262b82b7/?trk=public-profile-join-page" className='cursor-pointer'> <FaLinkedinIn /> </a>
                  <p className='cursor-pointer'> <FaInstagram /> </p>
                  <p className='cursor-pointer'> <FaDiscord /> </p>
                </div>
              {/* social Link */}

            </div>


            </div>
          </div>

            <div className='pt-12 max-sm:px-2 lg:px-3'>
                <div className='border-t-2'>
                  <p className='text-white text-center pt-6'>Copyright Foysal 2024. All right reserved</p>
              </div>
           </div>

      </div>
     </div>
    </>
  )
}

export default FooterTop