import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import ProductDetailsLeft from '../../Component/ProductDetailsComponent/ProductDetailsLeft'
import ProductDetailsRight from '../../Component/ProductDetailsComponent/ProductDetailsRight'
import { FetchDataProduct } from '../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice'



const ProductDetails = () => {

  const dispatch = useDispatch();
  const [EachProductsDetails, setEachProductsDetails] = useState([]);
  const {productId} = useParams();


  

  const {CartItem} = useSelector((state) => state.cart)
  
  console.log(CartItem);
  
  
  useEffect(() => {
    dispatch(FetchDataProduct(`https://dummyjson.com/products/${productId}`))
  }, [])
  
  const {data, status} = useSelector((state) => (state.product))
  
  
  useEffect(() => {
    if (status == 'IDLE') {
      setEachProductsDetails(data)
    }
  }, [data, status, ])
  
  

  



  return (
    <>
      <div className='container mx-auto'>
        <div className="py-3">
          <BreadCrumb />
        </div>
        <hr />

        <div className='mt-10 mb-20'>
          <div className='flex lg:flex-row md:flex-col flex-col gap-x-8'>
            <ProductDetailsLeft EachProductsDetailsImg={EachProductsDetails} status={status} />
              <ProductDetailsRight   />
          </div>
        </div>


      </div>
    </>
  )
}

export default ProductDetails