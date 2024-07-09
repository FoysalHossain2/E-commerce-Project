import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Products from '../Products';

const ShopRightBottom = () => {

  const dispatch = useDispatch();

  const [AllProducts, setAllProducts] = useState([]);
    

  useEffect(() => {

    const ProductDataFetcher = async () => {
      const Products = await axios.get('https://dummyjson.com/products');
      dispatch(setAllProducts(Products.data.products))
    }

    ProductDataFetcher()
  }, [])

  


  return (
    <>
    <div>
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