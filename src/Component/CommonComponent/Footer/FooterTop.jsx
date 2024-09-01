import React from 'react'
import FooterItem from '../FooterItem'
import QRcode from '../../../assets/FooterImg/QRcode.png'
import AppelAppStore from '../../../assets/FooterImg/AppelAppStore.png'
import googlePlayStor from '../../../assets/FooterImg/googlePlayStor.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDiscord } from "react-icons/fa";



const FooterTop = () => {
  return (
    <>
     <div className='pt-20 pb-14'>
      <div className="container mx-auto">

        <div className='text-white'>
          <div className='flex gap-x-[75px] max-sm:flex-col'>

            <div>
              <h1 className='font-DM_Sans font-bold pb-6 text-[24px]'>
                Shop.com
              </h1>
              <p className='pb-6 font-DM_Sans text-[20px] font-medium'>
                Subscribe
              </p>
              <p className='font-DM_Sans text-[16px]'>Get 10% off your first order</p>
            </div>

            <div>
              <h1 className='font-DM_Sans font-bold pb-6 text-[24px]'>
                Support
              </h1>
              <p className='font-DM_Sans pb-4'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
              <p className='font-DM_Sans pb-4'>fh375170@gmail.com</p>
              <p className='font-DM_Sans'>+88015-88888-9999</p>
            </div>

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

            <div>
              <h1 className='font-DM_Sans font-bold pb-6 text-[24px]'>
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
                  <p className='cursor-pointer'> <FaFacebookF /> </p>
                  <p className='cursor-pointer'> <FaLinkedinIn /> </p>
                  <p className='cursor-pointer'> <FaInstagram /> </p>
                  <p className='cursor-pointer'> <FaDiscord /> </p>
                </div>
              {/* social Link */}

            </div>


            </div>
          </div>

            <div className='pt-12'>
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