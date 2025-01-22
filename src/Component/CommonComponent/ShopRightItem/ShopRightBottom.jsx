import { useContext ,useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import LoadingPage from "../LoadingSkeleton";
import NotFoundPage from "../../CommonComponent/NotFoundPage";
import { ShopPageChangeContext } from "../../ShopComponent/ShopRight/ShopRight";
import Products from "../Products";
import { useProductData } from "../../../hooks/useProductData";
import LoadingSkeleton from "../LoadingSkeleton";

const ShopRightBottom = () => {
  const { PageChange, GrideChange } = useContext(ShopPageChangeContext);

  const { data: ProductData, isLoading, Error  } = useProductData(false,);

  const [Page, setPage] = useState(1);
  const Skeleton = Array.from({length: 16})


  const HandleChangePage = (PageNumber) => {
    if (
      PageNumber > 0 &&
      PageNumber <= Math.floor(ProductData.length / PageChange + 1)
    ) {
      setPage(PageNumber);
    }
  };

  return (
    <>
      <div className="mt-">
        {isLoading ? (
          (<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            { Skeleton.map((_,index) => (
            <div key={index} >
              <LoadingSkeleton />
            </div>
          ))}
          </div>)
        ) : Error ? (
          <NotFoundPage />
        ) : (
          ProductData && (
            <div>
              {GrideChange ? 
              (
                 <div
                 className={`grid grid-cols-1 `}
               >
                 {ProductData?.slice(
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
              ) : (
                 <div
                 className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 `}
               >
                 {ProductData?.slice(
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
              )}
             

              {/*=================== pagination part ================== */}

              <div className="sm:hidden md:hidden hidden lg:block">
                <div className="flex items-center gap-x-10  mt-[70px] ">
                  <div
                    className="w-8 h-8 border flex items-center justify-center cursor-pointer"
                    onClick={() => HandleChangePage(Page - 1)}
                  >
                    <FaChevronLeft />
                  </div>

                  {ProductData?.length > 0 && (
                    <div className="flex items-center gap-x-3 ">
                      {[
                        ...Array(
                          Math.floor(ProductData.length / PageChange + 1)
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
