import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiscountOffer } from "../../../../Data/Data";
import { FetchDataProduct } from "../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";
import ShopByCategories from "../../CommonComponent/ShopLeftItem/ShopByCategories";
import ShopByDiscountOffer from "../../CommonComponent/ShopLeftItem/ShopByDiscountOffer";
import ShopByPriceFilter from "../../CommonComponent/ShopLeftItem/ShopByPriceFilter";
import ShopByProductBrand from "../../CommonComponent/ShopLeftItem/ShopByProductBrand";
import ShopByRating from "../../CommonComponent/ShopLeftItem/ShopByRating";

const ShopLeft = ({ className }) => {
  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);
  const [CateName, setCateName] = useState("");

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products?limit=1000"));
  }, []);

  useEffect(() => {
    if (status === "IDLE") {
      setAllProducts(data.products);
    }
  }, [data, status]);

  const searchCategory = (subItem) => {
    console.log(subItem);
    const subFilter = data?.products.filter((subProducts) =>
      subProducts.tags.includes(subItem)
    );
    setAllProducts(subFilter);
  };

  let CategoryArr = [];
  let CategorySet = new Set();

  AllProducts?.forEach((product) => {
    if (!CategorySet.has(product.category)) {
      CategoryArr.push({
        id: product.id,
        title: product.category,
        subCategory: product.tags,
      });
      CategorySet.add(product.category);
    }
  });

  let BrandArr = [];
  let BrandSet = new Set();

  AllProducts?.forEach((product) => {
    if (!BrandSet.has(product.brand)) {
      BrandArr.push({
        id: product.id,
        title: product.brand,
      });
      BrandSet.add(product.brand);
    }
  });

  console.log(CategoryArr);

  const filteredProducts = CateName
    ? AllProducts.filter((product) => product.tags === CateName)
    : AllProducts;

  return (
    <div className={`${className}`}>
      <div className="border px-5">
        <div className="pb-6">
          <h1 className="font-Josefin__Sans font-bold border-b-2 border-black w-[180px] text-2xl text-secondary_text_color">
            Product Filters
          </h1>
        </div>

        <div>
          <ShopByPriceFilter />
        </div>
        <div>
          <ShopByCategories
            CatagoriesData={CategoryArr ? CategoryArr : []}
            ShopLeftTitle={"Product Categories"}
            searchCategory={searchCategory}
          />
        </div>
        <div>
          <ShopByProductBrand
            ProductBrand={BrandArr ? BrandArr : []}
            ShopLeftTitle={"Product Brand"}
          />
        </div>
        <div>
          <ShopByDiscountOffer
            DiscountOffer={DiscountOffer ? DiscountOffer : []}
            ShopLeftTitle={"Discount Offer"}
          />
        </div>
        <div>
          <ShopByRating />
        </div>
      </div>
    </div>
  );
};

export default ShopLeft;
