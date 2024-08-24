import React from 'react'
import ShopByProductBrand from '../../CommonComponent/ShopLeftItem/ShopByProductBrand'
import ShopByDiscountOffer from '../../CommonComponent/ShopLeftItem/ShopByDiscountOffer'
import ShopByPriceFilter from '../../CommonComponent/ShopLeftItem/ShopByPriceFilter'
import ShopByCategories from '../../CommonComponent/ShopLeftItem/ShopByCategories'
import ShopByRating from '../../CommonComponent/ShopLeftItem/ShopByRating'
import ShopByColor from '../../CommonComponent/ShopLeftItem/ShopByColor'







const ShopLeft = ({className}) => {
  return (
    <>
    <div className={`${className}`}>
        <div className="border-r">

          <div>
            <ShopByProductBrand />
          </div>
          <div>
            <ShopByPriceFilter />
          </div>
          <div>
            <ShopByDiscountOffer />
          </div>
          <div>
            <ShopByRating />
          </div>
          <div>
            <ShopByCategories />
          </div>

          <div>
            <ShopByColor />
          </div>
        </div>
    </div>
    </>
  )
}

export default ShopLeft