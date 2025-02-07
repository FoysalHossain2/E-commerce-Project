import React, { useEffect, useState } from "react";
import { FetchDataProduct } from "../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  addToWishList,
} from "../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice";

const ProductDetailsNavbar = () => {

  const dispatch = useDispatch();
    const { productId } = useParams();
  const [EachCartItem, setEachCartItem] = useState({});

  useEffect(() => {
    dispatch(FetchDataProduct(`https://dummyjson.com/products/${productId}`));
  }, [dispatch, productId]);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "IDLE") {
      setEachCartItem(data);
    }
  }, [data, status]);

  // HandleAddToCart
  const HandleAddToCart = () => {
    dispatch(addToCart(EachCartItem));
  };

  // HandleWishList functionality
  const HandleWishList = () => {
    dispatch(addToWishList(EachCartItem));
  };

  // HandleDecrementItem function
  const HandleDecrementItem = (item) => {
    dispatch(ProductDecrement(item));
  };

  // HandleIncrementItem function
  const HandleIncrementItem = (item) => {
    dispatch(ProductIncrement(item));
    console.log(item);
  };


  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex items-center justify-between px-4 py-2 border-t">
      {/* Store & Chat Icons */}

      {/* Buy Now & Add to Cart Buttons */}
      <div className="flex w-2/3">
        <button 
          
          className="w-full flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 rounded-l-lg"
        >
          Buy Now
        </button>
        <button onClick={HandleAddToCart}  className="flex-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 rounded-r-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsNavbar;