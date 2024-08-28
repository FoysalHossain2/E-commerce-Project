import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShopByProductBrand from '../../CommonComponent/ShopLeftItem/ShopByProductBrand';
import ShopByDiscountOffer from '../../CommonComponent/ShopLeftItem/ShopByDiscountOffer';
import ShopByPriceFilter from '../../CommonComponent/ShopLeftItem/ShopByPriceFilter';
import ShopByCategories from '../../CommonComponent/ShopLeftItem/ShopByCategories';
import ShopByRating from '../../CommonComponent/ShopLeftItem/ShopByRating';
import ShopByColor from '../../CommonComponent/ShopLeftItem/ShopByColor';
import { DiscountOffer } from '../../../../Data/Data';
import { FetchDataProduct } from '../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice';

const ShopLeft = ({ className }) => {
  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);
  const [CateName, setCateName] = useState('');

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if(CateName !== '') {
      dispatch(FetchDataProduct(`https://dummyjson.com/products/category/${CateName}`));
    } else {
      dispatch(FetchDataProduct(`https://dummyjson.com/products?limit=1000`));
    }
  }, [CateName, dispatch]);

  useEffect(() => {
    if(status === 'IDLE') {
      setAllProducts(data.products);
    }
  }, [data, status]);




  useEffect(() => {
    if(CateName !== '') {
      const filteredProducts = data.products.filter(product => product.category === CateName);
      setAllProducts(filteredProducts);
    } else {
      setAllProducts(data.products);
    }
  }, [CateName, data]);

console.log(AllProducts);



  // CategoryArr and subCategory
  let CategoryArr = [];
  let CategorySet = new Set();

  AllProducts?.map((product) => {
    if (!CategorySet.has(product.category)) {
      CategoryArr.push({
        id: product.id,
        title: product.category,
        subCategory: product.tags
      });
      CategorySet.add(product.category);
    }
    return null;
  });

  let BrandArr = [];
  let BrandSet = new Set();

  AllProducts?.map((product) => {
    if (!BrandSet.has(product.brand)) {
      BrandArr.push({
        id: product.id,
        title: product.brand
      });
      BrandSet.add(product.brand);
    }
    return null;
  });

  console.log(BrandArr);
  

  
  

  return (
    <>
    <div className={`${className}`}>
        <div className="border-r">

                 {/*-------- product filter header ------ */}
              <div className='pb-6'>
                  <h1 className='font-Josefin__Sans font-bold border-b-2 border-black w-[227px] text-2xl text-secondary_text_color'>
                   Product Filters
                 </h1>
             </div>
          {/*-------- product filter header ------ */}

          <div>
            <ShopByPriceFilter />
          </div>
          <div>
            <ShopByCategories CatagoriesData={CategoryArr ? CategoryArr : []}  
              ShopLeftTitle={'Product Categories'}
              setCateName={setCateName}
            />
          </div>
          <div>
            <ShopByProductBrand 
              ProductBrand={BrandArr ? BrandArr : []}
              ShopLeftTitle={'Product Brand'}
            />
          </div>
          <div>
            <ShopByDiscountOffer
              DiscountOffer={DiscountOffer ? DiscountOffer : []}
              ShopLeftTitle={'Discount Offer'}
            />
          </div>
          <div>
            <ShopByRating />
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