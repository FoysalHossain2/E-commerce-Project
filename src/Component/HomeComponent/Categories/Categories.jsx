import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataProduct } from "../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Categories = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "-20px",  // কার্ডের উপরে আনার জন্য
          right: "10px", // ডান দিকে আনার জন্য
          background: "orange",
          width: "30px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: "10"
           }}
        onClick={onClick}
      >
        <FaAngleRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
            ...style,
            position: "absolute",
            top: "-20px",  // কার্ডের উপরে আনার জন্য
            right: "50px", // ডান দিকে শিফট করার জন্য
            background: "orange",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: "10"
           }}
        onClick={onClick}
      > 
      <FaAngleLeft />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
          display:"block",
          color: "red",
        }}
      >
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "3px",
          color: "red",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };


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
      <div className="py-[80px] bg-gray-50">
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

        
            <Slider {...settings} >
                {AllProducts?.slice(150, 163).map((item, id) => (
              <Link to={"/shop"} className="px-3 pt-8 ">
                  <div key={id} className="hover:border hover:border-orange-600 w-full max-w-[170px] text-center rounded-lg border border-gray-200  p-2 bg-gray-100 hover:scale-105 transition duration-500">
                    <img
                      src={item.thumbnail}
                      alt="Air Purifier"
                      className="mx-auto h-24 mb-3"
                    />
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </h3>
                  </div>
              </Link>
                ))}
            </Slider>

            {/* <!-- Navigation Arrows --> */}
            {/* <div className="flex justify-between items-center mt-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;


