import  { useEffect, useState } from "react";
import { BsShare } from "react-icons/bs";
import {  FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToCart,
  addToWishList,
  ProductDecrement,
  ProductIncrement,
} from "../../Redux/AllSliceFunction/AddToCartSlice/AddToCartSlice";
import { FetchDataProduct } from "../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";
import ProductRatingStart from "./ProductRatingStart";


const ProductDetailsRight = () => {

  const dispatch = useDispatch();
  // const naviGate = useNavigate();
  const [EachCartItem, setEachCartItem] = useState({});
  const { productId } = useParams();

  // const { CartItem } = useSelector((state) => state.cart);

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
    <>
      <div className="max-sm:px-3  pb-14">
        <div className="max-sm:mt-8">
          <p className="font-Josefin__Sans text-4xl max-sm:text-[25px] font-bold mb-4 text-[#0D134E]">
            {status === "LOADING" ? (
              <Skeleton className="w-[140px] h-12" />
            ) : (
              EachCartItem.title
            )}
          </p>
        </div>

        <h1 className="font-DM_Sans text-lg font-semibold">
          {status === "LOADING" ? (
            <Skeleton count={2} className="px-[240px] h-8" />
          ) : (
            EachCartItem.description
          )}
        </h1>

        {/*========= rating Review =========*/}
        <div className="mt-5 flex items-center justify-between">
          <div className="  ">
            {status === "LOADING" ? (
              <Skeleton className="w-[130px] h-8" />
            ) : (
              <ProductRatingStart ratingStar={EachCartItem.rating} />
            )}
          </div>
          <div className="flex items-center gap-x-3 ">
          <BsShare className="cursor-pointer" />
          <FaRegHeart />
          </div>
        </div>
        {/*========= rating Review =========*/}

        <div className="border-b w-full mt-5 border-zinc-300"></div>

        {/*======== Price percentage =======*/}
        <div className=" mt-5 ">
          {status === "LOADING" ? (
            <Skeleton count={2} className="w-[130px] h-8" />
          ) : (
            <div className="flex items-center gap-x-3">
              <div className="flex items-center font-DM_Sans">
                <p>$</p>
                <p className="text-button_Color text-[28px]">
                  {Math.round(
                    EachCartItem.price -
                      Math.floor(
                        (EachCartItem.price * EachCartItem.discountPercentage) /
                          100
                      )
                  )}
                </p>
              </div>
              <div>-{Math.floor(EachCartItem.discountPercentage)}%</div>
            </div>
          )}
          <div>
            {status === "LOADING" ? (
              <Skeleton className="w-[130px] h-8 mt-5" />
            ) : (
              <div className="flex items-center gap-x-2">
                <p>List Price:</p>
                <p className=" line-through">
                  $
                  {Math.round(
                    EachCartItem.price ? EachCartItem.price : "$32.00"
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
        {/*======== Price percentage =======*/}

        <div className="mt-4">
          {status === "LOADING" ? (
            <Skeleton className="w-[80px] h-10" />
          ) : EachCartItem && EachCartItem.stock ? ( 
            <div>
              <span
                className={`font-Roboto font-bold ${
                  EachCartItem.stock.length === 0 ? "text-red-500" :  "text-green-600"
                }`}
              >
                In Stock
              </span>
              <span className="px-3 font-bold">:</span>
              <span
                className={`${
                  EachCartItem.stock.length === 0 ? "text-red-500" :  "text-green-600"
                }`}
              >
                {EachCartItem.stock}
              </span>
            </div>
          ) : (
            <div className="text-red-500"></div> 
          )}
        </div>


         {/*  */}
         <div className="flex gap-x-20 mt-2">
          <div className="font-DM_Sans">
            <p>Category</p>
            <p className="mt-2">Brand</p>
          </div>
          <div>
            <p>{EachCartItem.category}</p>
            <p className="mt-2">{EachCartItem.brand}</p>
          </div>
        </div>
        {/*  */}

        {/* ======== Quantity ============ */}
        <div>
          {status === "LOADING" ? (
            <Skeleton className="w-[180px] h-10" />
          ) : (
            <div className="flex items-center gap-x-4 mt-4">
              <p>Quantity :</p>
              <p className="w-[150px] py-1 flex items-center justify-center gap-x-4">
                <button
                  className="text-[17px] cursor-pointer text-gray-600 hover:bg-zinc-300 border p-2"
                  onClick={() => HandleDecrementItem(item)}
                >
                  <FaMinus />
                </button>
                <span className="text-[20px]">2</span>
                <button
                  className="text-[17px] cursor-pointer text-gray-600 hover:bg-zinc-300  border p-2"
                  onClick={() => HandleIncrementItem(item)}
                >
                  <FaPlus />
                </button>
              </p>
            </div>
          )}
        </div>
        {/* ======== Quantity ============ */}

        {/*============= addToCart =============*/}
        <div className=" max-sm:fixed max-sm:bottom-0">
          <div className="flex items-center gap-x-3 mt-4">
            <div>
              {status === "LOADING" ? (
                <Skeleton className="w-[140px] py-[14px]" />
              ) : (
                <button
                  className="w-[180px] max-sm:w-[150px] py-[8px] bg-button_Color text-center font-Roboto text-white text-base cursor-pointer rounded-sm"
                  onClick={HandleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <div>
              {status === "LOADING" ? (
                <Skeleton className="w-[140px] py-[14px]" />
              ) : (
                <button className="w-[180px] max-sm:w-[150px] py-[8px] bg-green-600 text-center font-Roboto text-white text-base cursor-pointer rounded-sm">
                  BUY NOW
                </button>
              )}
            </div>


          </div>
        </div>
        {/*============= addToCart =============*/}

       
      </div>
    </>
  );
};

export default ProductDetailsRight;
