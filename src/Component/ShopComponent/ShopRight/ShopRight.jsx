import React from 'react'
import ShopRightTop from '../../CommonComponent/ShopRightItem/ShopRightTop'
import ShopRightBottom from '../../CommonComponent/ShopRightItem/ShopRightBottom'

const ShopRight = ({className}) => {
  return (
    <>
    <div className={`${className}`}>
        <ShopRightTop />

        <ShopRightBottom />

    </div>
    </>
  )
}

export default ShopRight