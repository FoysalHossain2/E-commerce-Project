import React from 'react'
import Button from './Button'

const Overlay = ({  className,
  title, 
  discountDetailsFirst, 
  discountDetailsLast,
  discountAmount,
  btnTitle,
  onClickButton
  }) => {


  return (
    <>
       <div className={`absolute ${className} flex flex-col items-start`}>
            <h2 className='font-DM_Sans font-bold lg:text-4xl md:text-[27px] sm:text-xl text-main_text_color lg:mb-9 md:mb-5 sm:md-8'>
              {title ? title : 'Phones Sale'}
            </h2>
            <p className='font-DM_Sans opacity-75 text-main_text_color lg:mb-[49px] md:mb-[25px]'>
               {discountDetailsFirst}
               <span className='font-bold text-red-500 lg:text-[40px] md:text-[23px] sm:text-[25px] p-3'>
                {discountAmount}
                </span>
                {discountDetailsLast}
            </p>
            <Button 
              className={'rounded-sm bg-button_Color md:py-2 md:px-[18px] lg:px-[40px] lg:py-4 sm:py-2 sm:px-2 px-3 py-2  text-white lg:text-base md:text-[12px] sm:text-[12px] text-[12px] hover:bg-pink-700 cursor-pointer'}
              title={btnTitle}
              onClickButton={onClickButton}
            />


        </div>
    </>
  )
}

export default Overlay