import React, { createContext } from 'react'
import ShopRightTop from '../../CommonComponent/ShopRightItem/ShopRightTop'
import ShopRightBottom from '../../CommonComponent/ShopRightItem/ShopRightBottom'


// export const ShopPageChangeContext = createContext()

const ShopRight = ({className}) => {
  return (
    <>
    <div className={`${className}`}>
        <ShopRightTop />

        {/* <ShopPageChangeContext.Provider> */}
          <ShopRightBottom />
        {/* </ShopPageChangeContext.Provider> */}

    </div>
    </>
  )
}

export default ShopRight