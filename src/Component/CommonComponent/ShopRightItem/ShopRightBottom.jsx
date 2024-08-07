import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products';
import { FaChevronLeft } from "react-icons/fa";
import { FetchDataProduct, SetProduct } from '../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice';
import LoadingPage from '../../CommonComponent/LoadingPage'
import NotFoundPage from '../../CommonComponent/NotFoundPage'
import { ShopPageChangeContext } from '../../ShopComponent/ShopRight/ShopRight';


const ShopRightBottom = () => {

  const {PageChange, GrideChange} = useContext(ShopPageChangeContext);

  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);
  const [Page, setPage] = useState(1)
  // const [Page, setPage] = useState(9)

  
  useEffect(() => {
    dispatch(FetchDataProduct('https://dummyjson.com/products?limit=1000'))
  }, [])
  

    const {data, status} = useSelector((state) => (state.product))


    useEffect(() => {
      if(status === 'IDLE') {
        setAllProducts(data.products)
      }
    }, [data, status, setAllProducts])

  

    const HandleChangePage = (PageNumber) => {
      if (PageNumber > 0 && PageNumber <= Math.floor(AllProducts.length / PageChange + 1)) {
        
        setPage(PageNumber)
      }
    }

    console.log(AllProducts);


  return (
    <>
    <div>

      {status === 'LOADING' 
      ?  
      (<LoadingPage />) 
      
      : 
      status === 'ERROR'
      ?
      (
        <NotFoundPage />
      )
      :
      (AllProducts && (
        <div>
          <div className={`flex flex-wrap justify-between gap-y-8 
            max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-[100px] max-sm:gap-y-3 max-sm:px-2 
            max-md:grid max-md:grid-cols-3 max:-md:gap-x-[180px]
            md:grid md:grid-cols-3 md:gap-x-[180px] lg:gap-x-4
            xl:flex xl:flex-row xl:justify-between
            ${GrideChange ? 'flex flex-col' : 'flex flex-wrap'}`}>

            {AllProducts?.slice(Page * PageChange - PageChange , Page * PageChange).map((productItems, id) => (
              <div key={id} className='w-[270px] xl:w-[270px] lg:w-[240px] md:w-[230px] max-sm:w-[164px]
               xsm:w-[180px]
              '>
                <Products
                  image={productItems.thumbnail}
                  title={productItems. description}
                  price={`$${Math.round(productItems.price)}`}
                  discountPrice= { Math.round(productItems.price - Math.floor((productItems.price * productItems.discountPercentage / 100)))}
                  productId={productItems.id}
                />
              </div>
            ))}
          </div>

            {/*=================== pagination part ================== */}
            
            <div className='flex items-center gap-x-10  mt-[70px] max-sm:hidden'>
              <div className='w-8 h-8 border flex items-center justify-center cursor-pointer' onClick={() => HandleChangePage(Page - 1)}>
                < FaChevronLeft/>
              </div>
            
                {AllProducts?.length > 0 && (
                  <div className='flex items-center gap-x-3 '>
                    {[...Array(Math.floor(AllProducts.length / PageChange + 1))].map((_, index) => (
                      <div key={index} className={`w-8 h-8 border flex items-center justify-center cursor-pointer ${index + 1 === Page && 'bg-zinc-400 text-white'}`} onClick={() => HandleChangePage(index + 1)}>
                        {index + 1}
                      </div>
                    ))}
                  </div>
                )}
            
              <div className='w-15 h-8  border flex items-center justify-center cursor-pointer' onClick={() => HandleChangePage(Page + 1)}>
                <h1>Next</h1>
              </div>
            </div>
            
            {/*=================== pagination part ================== */}
        </div>

      ))
      }


    </div>
    </>
  )
}

export default ShopRightBottom




