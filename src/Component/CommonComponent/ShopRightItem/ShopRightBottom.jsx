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
      setAllProducts(Products.data.products)
    }

    ProductDataFetcher()
  }, [])

  // console.log(AllProducts);
  


  return (
    <>
    <div>
      <div className=''>
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