import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";



const ProductRatingStart = ({ratingStar}) => {

    console.log(ratingStar);
    
    const starRating = Array.from({length: 5}, (x,index) => {
        const FractionIndex = index + 0.5
        debugger
        return(
            <span>
                {(ratingStar >= index + 1 ? <IoStar /> : ratingStar >= FractionIndex ? <IoStarHalfOutline /> : <IoStarOutline />) }
            </span>
        )
    })



  return (
    <>
    <div className='flex items-center gap-x-2'>
      <p className='flex text-yellow-500'>{starRating}</p>
      <p>{ratingStar}</p>
    </div>
    </>
  )
}

export default ProductRatingStart

