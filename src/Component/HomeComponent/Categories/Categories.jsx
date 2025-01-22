import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataProduct } from "../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";

// Next Arrow function
function SampleNextArrow(props) {
  const { classNameName, style, onClick } = props;
  return (
    <div
      classNameName={classNameName}
      style={{
        ...style,
        display: "block",
        background: "gray",
        padding: "13px",
        cursor: "pointer",
        position: "absolute",
        right: "0px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <div classNameName="flex justify-center items-center  text-white text-2xl">
        <MdChevronRight />
      </div>
    </div>
  );
}

// Previous arrow function
function SamplePrevArrow(props) {
  const { classNameName, style, onClick } = props;
  return (
    <div
      classNameName={classNameName}
      style={{
        ...style,
        display: "block",
        background: "gray",
        padding: "8px",
        cursor: "pointer",
        position: "absolute",
        left: "-20px",
        zIndex: "1",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <div classNameName="flex justify-center items-center text-white text-2xl">
        <MdChevronLeft />
      </div>
    </div>
  );
}

// slider Implementation
var settings = {
  dots: false,
  classNameName: "center",
  centerPadding: "60px",
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

const Categories = () => {
  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products?limit=1000"));
  }, [dispatch]);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "IDLE") {
      setAllProducts(data.products);
    }
  }, [data, status, setAllProducts]);

  return (
    <>
      <div className="py-[100px] bg-gray-50">
        <div className=" container mx-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* <!-- Heading Section --> */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Featured Categories
              </h2>
              <p className="text-gray-600">
                Choose your necessary products from this feature categories.
              </p>
              <hr className="border-t border-gray-300 mt-4" />
            </div>

            <></>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
              {AllProducts?.slice(150, 162).map((item, id) => (
                <div key={id} className="text-center border border-gray-200  p-2 bg-white hover:border-gray-400 hover:scale-105 transition duration-500">
                  <img
                    src={item.thumbnail}
                    alt="Air Purifier"
                    className="mx-auto h-28 mb-3"
                  />
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.price}
                  </h3>
                  <p className="text-xs text-gray-500">1025 items</p>
                </div>
              ))}
            </div>

            {/* <!-- Navigation Arrows --> */}
            <div className="flex justify-between items-center mt-6">
              <button className="p-2 border border-gray-300 rounded-full bg-white hover:bg-gray-100">
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="p-2 border border-gray-300 rounded-full bg-white hover:bg-gray-100">
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;


