import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import ProductDetailsLeft from '../../Component/ProductDetailsComponent/ProductDetailsLeft'
import ProductDetailsRight from '../../Component/ProductDetailsComponent/ProductDetailsRight'
import { FetchDataProduct } from '../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice'
import ProductAdditionalInfo from '../../Component/ProductDetailsComponent/ProductAdditionalInfo'
import ProductDetailsNavbar from '../../Component/CommonComponent/ProductDetailsNavbar'



const ProductDetails = () => {

  const dispatch = useDispatch();
  const [EachProductsDetails, setEachProductsDetails] = useState([]);
  const {productId} = useParams();
  

  const {CartItem} = useSelector((state) => state.cart)
  
  
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
    <div className='px-3 lg:px-0'>
      <div className='container mx-auto'>
        <div className='max-sm:hidden lg:block xl:block'>
          <div className="py-3">
            <BreadCrumb />
          </div>
        </div>
        <hr />

        <div className='mt-10 mb-20 lg:px-0 px-'>
          <div className='flex lg:flex-row md:flex-col flex-col gap-x-8'>
            <ProductDetailsLeft EachProductsDetailsImg={EachProductsDetails} status={status} />
              <ProductDetailsRight   />
          </div>

          
        <hr className='mt-14' />
        <div className="mt-20">
          {/* <ProductAdditionalInfo /> */}
        </div>
        </div>


      </div>
      <div className='lg:hidden block'>
         <ProductDetailsNavbar />
      </div>
    </div>
  )
}

export default ProductDetails