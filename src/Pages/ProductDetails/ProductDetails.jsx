import React, { useEffect, useState } from 'react'
import ProductDetailsLeft from '../../Component/ProductDetailsComponent/ProductDetailsLeft'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import ProductDetailsRight from '../../Component/ProductDetailsComponent/ProductDetailsRight'
import { useParams } from 'react-router-dom'
import { FetchDataProduct } from '../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductAddToCart from '../../Component/ProductDetailsComponent/ProductAddToCart'
import Products from '../../Component/CommonComponent/Products'



const ProductDetails = () => {

  const dispatch = useDispatch();
  const [EachProductsDetails, setEachProductsDetails] = useState([]);
  const {productId} = useParams();

  const [AllProducts, setAllProducts] = useState([]);

  

  
  useEffect(() => {
    dispatch(FetchDataProduct('https://dummyjson.com/products?limit=1000'))
  }, [])
  

  
  
  
  useEffect(() => {
    dispatch(FetchDataProduct(`https://dummyjson.com/products/${productId}`))
  }, [])
  
  const {data, status} = useSelector((state) => (state.product))
  
  
  useEffect(() => {
    if (status == 'IDLE') {
      setEachProductsDetails(data)
    }
  }, [data, status, ])
  


  
  useEffect(() => {
    if(status === 'IDLE') {
      setAllProducts(data.products)
    }
  }, [data, status, setAllProducts])




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





             {/* =================================== Recommend Part ===================================== */}
             <div className='mt-[100px]'>
              <div className='grid grid-cols-4'>
                  {AllProducts?.slice(35,150).map((item, id) => (
                      <div className='xl:w-[100px]' key={id}>
                        <Products
                              image={item.thumbnail}
                              title={item. description} 
                            />
                      </div>
                    ))}
                </div>
            </div>
            {/* =================================== Recommend Part ===================================== */}


      </div>
    </>
  )
}

export default ProductDetails