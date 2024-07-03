import React from 'react'
import FooterItem from '../FooterItem'

const FooterTop = () => {
  return (
    <>
     <div className='mt-[40px] '>
      <div className="container mx-auto">

        <div className='text-white'>
          <div className='flex gap-x-20 '>
            <FooterItem
              title={'Menu'}
              allItems={
                [
                  'Home', 
                  'Shop', 
                  'Contact', 
                  'Category', 
                  'Blog', 
                  'Exclusive'
                ]
              }  
            />

            <FooterItem
              title={'Catagories'}
              allItems={
                [
                  'Laptops & Computers', 
                  'Cameras & Photography', 
                  'Smart Phones & Tablets', 
                  'Video Games & Consoles', 
                  'Waterproof Headphones',
                ]
              }  
            />

            <FooterItem
              title={'Customer Care'}
              allItems={
                [
                  'Help Center', 
                  'How to Buy', 
                  'Returns & Refunds',
                  'Contact Us', 
                  'Terms & Conditions'
                ]
              }  
            />

          </div>

          <img src="" alt="" />
        </div>

      </div>
     </div>
    </>
  )
}

export default FooterTop