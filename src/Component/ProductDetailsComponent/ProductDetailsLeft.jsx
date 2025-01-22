import  { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line react/prop-types
const ProductDetailsLeft = ({ EachProductsDetailsImg, status }) => {
  // console.log(EachProductsDetailsImg);

  // custom Slider
  const [Slider, setSlider] = useState(0);

  // HandleChange
  const HandlePevChange = () => {
    if (Slider == 0) return false;
    setSlider(Slider - 1);
  };

  // HandlePervChange
  const HandleNextChange = () => {
    if (EachProductsDetailsImg.images.length - 1 == Slider) return false;

    // if () Slider.false
    setSlider(Slider + 1);
  };

  return (
    <>
      <div className="max-sm:px-3">
        <div className="container mx-auto">
          <div className="flex flex-col  ">

          <p
              onClick={HandlePevChange}
              className="w-16 border hover:bg-button_Color"
            >
              Previews
            </p>
            <p
              onClick={HandleNextChange}
              className="w-10 border hover:bg-button_Color"
            >
              Next
            </p>

            <div className="border-b max-md:flex max-md:justify-center">
              {status === "LOADING" ? (
                <Skeleton className=" w-[380px] h-[400px]" />
              ) : (
                <div>
                  <div className="flex gap-y-6 mt-3  w-[380px] h-[400px]  overflow-hidden">
                    {EachProductsDetailsImg.images?.map((image) => (
                      <div
                        key={image}
                        style={{ transform: `translateX(-${Slider * 100}%)` }}
                      >
                        <div className="w-[380px] h-[400px] py-3  bg-green-50">
                          <img
                            src={image}
                            alt=""
                            className=" w-full aspect-square  object-contain"
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
                <div className="flex gap-y-6 mt-3">
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
