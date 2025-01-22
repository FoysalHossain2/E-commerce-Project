import { HiOutlineSearch } from "react-icons/hi";
import SearchResult from "./SearchResult/SearchResult";
import useDebounce from "../../hooks/useDebounce";
import { useProductData } from "../../hooks/useProductData";
import { searchData } from "../../../Utils/helper";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {

    /* 
    * @Search Option functionality implementation
    */

   const [SearchFunction, setSearchFunction] = useState("");
 
    const { data: ProductData } = useProductData(false);

    

    console.log("SearchedData", searchData(ProductData));
    


   const DebounceData = useDebounce((item) => {
    const fetchuseDebounce = searchData(item)
    setSearchFunction({...fetchuseDebounce})
   }, 1000)

   const HandleSearch = (event) => {
     const { value } = event.target.value;
     DebounceData(value)
 

   };
 

  return (
    <>
         <div className="relative flex " >
                  <div className="flex items-center border border-orange-300 lg:max-w-[600px] md:max-w-[800px]  max-md:max-w-[800px] rounded-full overflow-hidden w-full ">
                    <input
                      type="text"
                      placeholder="Search for restaurants and food"
                      className="flex-grow px-4 lg:py-[9px] py-2 text-gray-700 focus:outline-none"
                    />
                    <button className="px-4 text-xl focus:outline-none">
                      <IoSearchOutline />
                    </button>
                </div>
                {SearchFunction.length > 0 && (
                  <div className="">
                    <SearchResult
                      className={
                        "absolute left-[3%] top-[100%] z-10  h-[700px]  lg:max-w-[600px] max-md:max-w-[600px] w-full"
                      }
                      SearchProps={SearchFunction}
                    />
                  </div>
                )}
         </div>
    </>
  )
}

export default Search