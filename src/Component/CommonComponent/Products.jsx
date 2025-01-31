import { FaEye } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProductRatingStart from "../ProductDetailsComponent/ProductRatingStart";


const Products = ({
  title,
  price,
  image,
  ratingStar,
  bize,
  productId,
  discountPrice,
  GrideChange,
  className,
}) => {
  return (
    <>
      <div>
        {GrideChange ? (
          <Link className="" to={`/productDetails/${productId}`}>
            <div className=" rounded-lg flex gap-x-8 w-[935px] border">
              <div
                className=" h-[270px] xl:w-[270px] lg:w-[250px] 
              relative overflow-hidden group cursor-pointer "
              >
                <div className="absolute top-5 ml-5 "> {bize}</div>

                <div className="rounded-lg">
                  <img src={image} alt={image} className="w-full h-full" />
                </div>

                {/* ---------------overlay-------------- */}
                <div className=" absolute -bottom-[40%]  transition-all group-hover:bottom-6">
                  <div className="flex justify-end flex-col items-end py-6">
                    <div>
                      <div
                        className={"flex gap-x-5 items-center  pb-6 mr-[30px]"}
                      >
                        <span>
                          <FiHeart />
                        </span>
                      </div>
                    </div>

                    <div>
                      <div
                        className={"flex gap-x-5 items-center  pb-6 mr-[30px]"}
                      >
                        <span>
                          <DiGitCompare />
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className={"flex gap-x-5 items-center  mr-[30px]"}>
                        <span className="text-orange-500 text-[25px]">
                          <IoCart />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---------------overlay-------------- */}
              </div>

              <div className="">
                <p className="font-medium font-DM_Sans text-[16px] max-sm:text-[12px] w-[400px]">
                  {title}
                </p>

                <div className="flex mt-6">
                  <ProductRatingStart ratingStar={ratingStar} />
                </div>
              </div>

              <div className="flex gap-x-2 pt-3">
                <p className="font-DM_Sans text-button_Color font-semibold text-[23px]">
                  ${discountPrice}
                </p>
                <p className="line-through text-[14px]">
                  {price ? price : "$44.00"}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div className={`${className}`}>
          <div className="bg-white relative rounded-lg shadow hover:shadow-lg transition overflow-hidden group duration-500 ">
            <div
              className={`absolute top-2 left-2 text-white text-sm px-2 py-1 rounded ${bize}`}
            >
              {bize}
            </div>
            <Link
              to={`/productDetails/${productId}`}
              className="hover:scale-110 transition duration-500"
            >
              <img
                src={image}
                alt={title}
                className="w-full lg:h-48 md:h-80 sm:h-80 h-48 object-cover rounded-lg bg-white"
              />
            </Link>
            <div className="px-2 py-4">
              {/* Overlay */}
              <div
                className="absolute top-0 left-full flex flex-col items-end py-6 transition-all duration-500 group-hover:-right-4 group-hover:opacity-100 opacity-0"
              >
                <div className="text-[20=px] cursor-pointer pb-6 mr-6">
                  <span>
                    <FiHeart />
                  </span>
                </div>
                <div className="text-[20=px] cursor-pointer pb-6 mr-6">
                  <span className="text-orange-500 text-[25px]">
                    <IoCart />
                  </span>
                </div>
                <div className="text-[20=px] cursor-pointer pb-6 mr-6">
                  <span>
                    <FaEye />
                  </span>
                </div>
              </div>
              {/* Overlay */}
        
              <p className="font-medium font-DM_Sans text-[16px] max-sm:text-[12px]">
                {title ? `${title.slice(0, 40)}...` : "Title is missing"}
              </p>
              <div className="flex gap-x-2 pt-2">
                <p className="font-DM_Sans text-button_Color font-semibold text-[23px]">
                  ${discountPrice}
                </p>
                <p className="line-through text-[14px]">
                  {price ? price : "$44.00"}
                </p>
              </div>
              <ProductRatingStart ratingStar={ratingStar} />
        
              {/* Button part */}
              <div className="flex items-center justify-center mt-4 px-2">
                <button className="text-[14px] hover:bg-slate-600 font-medium hover:text-white border rounded-md w-full py-[5px] font-Roboto transition">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        )}
      </div>
    </>
  );
};

export default Products;
