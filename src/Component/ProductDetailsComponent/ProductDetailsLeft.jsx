import  { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line react/prop-types
const ProductDetailsLeft = ({ EachProductsDetailsImg, status }) => {
  // console.log(EachProductsDetailsImg);


  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <div className="flex flex-col  ">


            <div className="border-b max-md:flex max-md:justify-center">
              {status === "LOADING" ? (
                <Skeleton className=" w-[380px] h-[400px]" />
              ) : (
                <div>
                  <div className="flex gap-y-6 mt-3 overflow-hidden p">
                    {EachProductsDetailsImg.images?.map((image) => (
                      <div
                        key={image}

                      >
                        <div className=" w-full lg:max-w-[680px] lg:h-[400px] md:max-w-[740px] md:h-[700px] sm:max-w-[600px] sm:h-[650px] max-w-[400px] h-[400px] py-3 border">
                          <img
                            src={image}
                            alt=""
                            className="  aspect-square  object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex">
              {status === "LOADING" ? (
                <Skeleton className="w-[60px] h-[60px]" />
              ) : (
                <div className="flex gap-y-6 mt-3 -ml-1">
                  {EachProductsDetailsImg.images?.map((img) => (
                    <div key={img}>
                      <div className=" w-[60px] rounded-sm border hover:border-red-400 p-1">
                        <img
                          src={img}
                          alt=""
                          className="w-[100%] h-[60px] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsLeft;
