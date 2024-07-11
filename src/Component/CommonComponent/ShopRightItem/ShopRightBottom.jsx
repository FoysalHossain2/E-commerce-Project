import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products';
import { FetchDataProduct, SetProduct } from '../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice';

const ShopRightBottom = () => {

  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);
  
  useEffect(() => {
    dispatch(FetchDataProduct('https://dummyjson.com/products'))
  }, [])
  

    const {data, status} = useSelector((state) => (state.product))
  

    useEffect(() => {
      if(status === 'IDLE') {
        setAllProducts(data.products)
      }
    }, [data, status])

    console.log(AllProducts);
  

  // useEffect(() => {

  //   const ProductDataFetcher = async () => {
  //     const Products = await axios.get('https://dummyjson.com/products');
  //     setAllProducts(Products.data.products)
  //   }

  //   ProductDataFetcher()
  // }, [])

  


  return (
    <>
    <div>
      <h1>{status}</h1>
      <div className='flex flex-wrap justify-between gap-y-10'>
        {AllProducts?.map((product, id) => (
          <div key={id}>
            <Products
              image={product.thumbnail}
             />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ShopRightBottom