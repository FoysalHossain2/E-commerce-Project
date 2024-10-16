import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GrFormCheckmark } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FetchDataProduct } from "../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";

const Menubar = () => {
  const [ShowCategories, setShowCategories] = useState([]);
  const [openMenus, setOpenMenus] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products?limit=1000"));
  }, []);

  useEffect(() => {
    if (status === "IDLE") {
      setAllProducts(data.products);
    }
  }, [data, status]);

  let CategoryArr = [];
  let CategorySet = new Set();

  AllProducts?.forEach((product) => {
    if (!CategorySet.has(product.category)) {
      CategoryArr.push({
        id: product.id,
        title: product.category,
        subCategory: product.tags,
      });
      CategorySet.add(product.category);
    }
  });

  const toggleMenu = (index) => {
    setOpenMenus((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <>
      <div>
        {/* -----------sing in-----------  */}
        <div className="bg-[#222132] py-4">
          <Link to={"/login"} className="flex items-center gap-x-6">
            <div className="ml-8 bg-white text-button_Color w-8 h-8 rounded-full flex items-center justify-center">
              <FaUser className="text-[20px]" />
            </div>
            <p className="text-white font-Josefin__Sans text-xl">Sing in</p>
          </Link>
        </div>
        {/* -----------sing in-----------  */}
      </div>

      <div className="ml-8">
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>Categories</h2>
          </div>

          <div className="mt-[11px]">
            {CategoryArr?.map((value, index) =>
              value.subCategory.length > 0 ? (
                <div key={index}>
                  <div onClick={() => searchCategory(value)}>
                    <div
                      className="flex items-center gap-x-3"
                      onClick={() => HandleToggal(index)}
                    >
                      <div className="w-4 h-4 border bg-[#FFDBF1] flex items-center">
                        <GrFormCheckmark className="text-[#FF3EB2] textF cursor-pointer" />
                      </div>
                      <p className="text-Paragraph__Color font-DM_Sans py-2 cursor-pointer">
                        {value.title}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className={`${value.subCategory && "pb-2"}`}>
                      {ShowCategories[index] &&
                        value.subCategory.map(
                          (subitem, id) =>
                            subitem !== value.title && (
                              <div key={id}>
                                <h2 className="py-2 text-Paragraph__Color cursor-pointer">
                                  {subitem}
                                </h2>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="w-4 h-4 border bg-[#FFDBF1] flex items-center">
                      <GrFormCheckmark className="text-[#FF3EB2] textF cursor-pointer" />
                    </div>
                    <p className="text-Paragraph__Color font-DM_Sans py-2">
                      {value.title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
