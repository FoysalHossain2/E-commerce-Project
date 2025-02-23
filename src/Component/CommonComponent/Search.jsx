import { HiOutlineSearch } from "react-icons/hi";
import SearchResult from "./SearchResult/SearchResult";
import useDebounce from "../../hooks/useDebounce";
import { searchData } from "../../../Utils/helper";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FetchDataProduct } from "../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const [SearchFunction, setSearchFunction] = useState("");
  const [AllProducts, setAllProducts] = useState([]);
  const [ShowData, setShowData] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (SearchFunction) { // শুধুমাত্র SearchFunction থাকলে API কল হবে
      dispatch(FetchDataProduct('https://dummyjson.com/products?limit=1000' + SearchFunction));
    }
  }, [dispatch, SearchFunction]);

  const { data, status } = useSelector((state) => state.product || {});

  useEffect(() => {
    if (status === "IDLE" && data?.products) { 
      const filterData = searchData(data?.products || []); // `undefined` হলে খালি অ্যারে পাঠান
      setAllProducts(filterData);
    }
  }, [data, status]);

  return (
    <>
      <div className="relative flex">
        <div className="flex items-center border border-orange-300 lg:max-w-[600px] md:max-w-[800px] max-md:max-w-[800px] lg:rounded-xl md:rounded-xl rounded-full overflow-hidden w-full">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="flex-grow px-4 lg:py-[9px] py-2 text-gray-700 focus:outline-none"
            value={SearchFunction}
            onChange={(e) => setSearchFunction(e.target.value)}
            onFocus={() => setShowData(true)}
            onBlur={() => setShowData(false)}
          />
          <button className="px-4 text-xl focus:outline-none">
            <IoSearchOutline />
          </button>
        </div>
      </div>

      {ShowData && AllProducts.length > 0 && (
        <div className="absolute z-10 max-h-[400px] border w-[500px] overflow-y-scroll bg-white">
          {AllProducts.map((items) => (
            <p key={items.id}>{items.title}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
