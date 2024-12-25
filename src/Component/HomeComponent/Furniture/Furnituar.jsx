import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataProduct } from "../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";

const Furniture = () => {
  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);
  const [Page, setPage] = useState(1);

  const [Days, setDays] = useState(0);
  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Second, setSecond] = useState(0);

  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products?limit=1000"));
  }, []);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "IDLE") {
      setAllProducts(data.products);
    }
  }, [data, status, setAllProducts]);

  const deadline = "OCTOBER, 31, 2024";

  //   Create a Countdown Time
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinute(Math.floor((time / 1000 / 60) % 60));
    setSecond(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="py-14">
        {/* <div className="mx-auto container">
          <div className="flex flex-col ">
            <div className="relative">
              <div>
                <img src={MusicFrame} alt="" />
              </div>
              <div className="absolute sm:bottom-[140px] bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                <div className="text-white flex items-center gap-x-8">
                  <p className={`${Days < 10 ? "0" + Days : Days}`}>{Days}</p>
                  <p className={`${Hour < 10 ? "0" + Hour : Hour}`}>{Hour}</p>
                  <p className={`${Minute < 10 ? "0" + Minute : Minute}`}>
                    {Minute}
                  </p>
                  <p className={`${Second < 10 ? "0" + Second : Second}`}>
                    {Second}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-x-2 mt-8">
              {AllProducts?.slice(77, 78).map((item, id) => (
                <div key={id} className="relative">
                  <div className="bg-[#F6F7FB] py-3 px-[120px] max-sm:px-[10px] relative">
                    <img src={item.thumbnail} alt="" />
                  </div>

                  <div className=" top-0 absolute">
                    <div className="flex items-center gap-x-3">
                      <div className="flex items-center font-DM_Sans">
                        <p className="text-button_Color">$</p>
                        <p className="text-button_Color text-[28px]">
                          {Math.round(
                            item.price -
                              Math.floor(
                                (item.price * item.discountPercentage) / 100
                              )
                          )}
                        </p>
                      </div>
                      <div>-{Math.floor(item.discountPercentage)}%</div>
                    </div>
                  </div>
                </div>
              ))}

              {AllProducts?.slice(100, 101).map((item, id) => (
                <div key={id}>
                  {status === "LOADING" ? (
                    <Skeleton className="h-[200px]" />
                  ) : (
                    <div className="relative">
                      <div className=" py-3 px-[120px] max-sm:px-[10px] relative bg-[#F6F7FB]">
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div className=" top-0 absolute">
                        <div className="flex items-center gap-x-3">
                          <div className="flex items-center gap-x-1 font-DM_Sans">
                            <p className="text-button_Color">$</p>
                            <p className="text-button_Color text-[28px]">
                              {Math.round(
                                item.price -
                                  Math.floor(
                                    (item.price * item.discountPercentage) / 100
                                  )
                              )}
                            </p>
                          </div>
                          <div>-{Math.floor(item.discountPercentage)}%</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="relative group ">
          <img
            src=""
            alt="Baseball"
            className="w-full lg:[600px] h-[500px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 rounded-lg"></div>
          <div className="absolute bottom-4 left-4">
            <p className="text-sm mb-1">TECHNIQUES · 2 months ago</p>
            <h3 className="text-xl font-bold">
              Exploring the Latest Changes in Baseball's Pitching Techniques
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Furniture;
