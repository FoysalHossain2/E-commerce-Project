import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataProduct } from "../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";
import LoadingPage from "../../CommonComponent/LoadingPage";
import NotFoundPage from "../../CommonComponent/NotFoundPage";
import { ShopPageChangeContext } from "../../ShopComponent/ShopRight/ShopRight";
import Products from "../Products";

const ShopRightBottom = () => {
  const { PageChange, GrideChange } = useContext(ShopPageChangeContext);

  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);
  const [Page, setPage] = useState(1);
  // const [Page, setPage] = useState(9)

  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products?limit=1000"));
  }, [dispatch]);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "IDLE") {
      setAllProducts(data.products);
    }
  }, [data, status, setAllProducts]);

  const HandleChangePage = (PageNumber) => {
    if (
      PageNumber > 0 &&
      PageNumber <= Math.floor(AllProducts.length / PageChange + 1)
    ) {
      setPage(PageNumber);
    }
  };

  return (
    <>
      <div className="mt-">
        {status === "LOADING" ? (
          <LoadingPage />
        ) : status === "ERROR" ? (
          <NotFoundPage />
        ) : (
          AllProducts && (
            <div>
              <div
                className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  

            `}
              >
                {AllProducts?.slice(
                  Page * PageChange - PageChange,
                  Page * PageChange
                ).map((productItems, id) => (
                  <div
                    key={id}
                    className={` 
                    
              `}
                  >
                    <Products
                      image={productItems.thumbnail}
                      title={productItems.description}
                      price={`$${Math.round(productItems.price)}`}
                      discountPrice={Math.round(
                        productItems.price -
                          Math.floor(
                            (productItems.price *
                              productItems.discountPercentage) /
                              100
                          )
                      )}
                      ratingStar={productItems.rating}
                      productId={productItems.id}
                      GrideChange={GrideChange}
                    />
                  </div>
                ))}
              </div>

              {/*=================== pagination part ================== */}

              <div className="sm:hidden md:hidden hidden lg:block">
                <div className="flex items-center gap-x-10  mt-[70px] ">
                  <div
                    className="w-8 h-8 border flex items-center justify-center cursor-pointer"
                    onClick={() => HandleChangePage(Page - 1)}
                  >
                    <FaChevronLeft />
                  </div>

                  {AllProducts?.length > 0 && (
                    <div className="flex items-center gap-x-3 ">
                      {[
                        ...Array(
                          Math.floor(AllProducts.length / PageChange + 1)
                        ),
                      ].map((_, index) => (
                        <div
                          key={index}
                          className={`w-8 h-8 border flex items-center justify-center cursor-pointer ${
                            index + 1 === Page && "bg-zinc-400 text-white"
                          }`}
                          onClick={() => HandleChangePage(index + 1)}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                  )}

                  <div
                    className="w-15 h-8  border flex items-center justify-center cursor-pointer"
                    onClick={() => HandleChangePage(Page + 1)}
                  >
                    <h1>Next</h1>
                  </div>
                </div>
              </div>

              {/*=================== pagination part ================== */}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ShopRightBottom;
