import React, { useEffect, useState } from 'react'
import ProductDetailsLeft from '../../Component/ProductDetailsComponent/ProductDetailsLeft'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import ProductDetailsRight from '../../Component/ProductDetailsComponent/ProductDetailsRight'
import { useParams } from 'react-router-dom'
import { FetchDataProduct } from '../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductAddToCart from '../../Component/ProductDetailsComponent/ProductAddToCart'



const ProductDetails = () => {

  const dispatch = useDispatch();
  const [EachProductsDetails, setEachProductsDetails] = useState([]);
  const {productId} = useParams();


  useEffect(() => {
    dispatch(FetchDataProduct(`https://dummyjson.com/products/${productId}`))
  }, [])

  const {data, status} = useSelector((state) => (state.product))


  useEffect(() => {
    if (status == 'IDLE') {
      setEachProductsDetails(data)
    }
  }, [data, status, setEachProductsDetails])
  
  




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