import  { useEffect, useState } from "react";
import Arrivals1 from "../../../assets/NewArrivals/Arrivals1.png";
import Products from '../../CommonComponent/Products'
import { useDispatch, useSelector } from "react-redux";
import { FetchDataProduct } from "../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice";

const Add = () => {

  const [CurrentTab, setCurrentTab] = useState("bestSeller");

  const [AllProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchDataProduct("https://dummyjson.com/products?limit=1000"));
  }, [dispatch]);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "IDLE") {
      setAllProducts(data.products);
    }
  }, [data, status, setAllProducts]);

  const products = [
    {
      id: 1,
      tag: "17% Off",
      tagStyle: "bg-yellow-500",
      title: "HP 11.6” Chromebook, AMD A4, 4GB RAM, 32GB Storage",
      price: "$2856.3",
      oldPrice: "$3225.6",
      rating: "65",
      image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/sp2.png", 
    },
    {
      id: 1,
      tag: "17% Off",
      tagStyle: "bg-yellow-500",
      title: "HP 11.6” Chromebook, AMD A4, 4GB RAM, 32GB Storage",
      price: "$2856.3",
      oldPrice: "$3225.6",
      rating: "65",
      image: Arrivals1, // Replace with actual images
    },
    {
      id: 1,
      tag: "17% Off",
      tagStyle: "bg-yellow-500",
      title: "HP 11.6” Chromebook, AMD A4, 4GB RAM, 32GB Storage",
      price: "$2856.3",
      oldPrice: "$3225.6",
      rating: "65",
      image: Arrivals1, // Replace with actual images
    },
    {
      id: 1,
      tag: "17% Off",
      tagStyle: "bg-yellow-500",
      title: "HP 11.6” Chromebook, AMD A4, 4GB RAM, 32GB Storage",
      price: "$2856.3",
      oldPrice: "$3225.6",
      rating: "65",
      image: Arrivals1, // Replace with actual images
    },
    {
      id: 1,
      tag: "17% Off",
      tagStyle: "bg-yellow-500",
      title: "HP 11.6” Chromebook, AMD A4, 4GB RAM, 32GB Storage",
      price: "$2856.3",
      oldPrice: "$3225.6",
      rating: "65",
      image: Arrivals1, // Replace with actual images
    },
  ];


  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto ">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2 ">Weekly selection</h2>
            <p className=" text-gray-600 mb-6">
              Shop living room furniture, crafted by designers all over the
              world
            </p>
          </div>

          <div className="flex lg:justify-end md:justify-end justify-center space-x-4 mb-6 ">
            <button
              className={`text-gray-600 ${CurrentTab === "bestSeller" ? "text-orange-400" : "text-black"}`}
              onClick={() => setCurrentTab("bestSeller")}
            >
              Best Seller
            </button>
            <button
              className={`text-gray-600  ${CurrentTab === "mostViewed" ? "text-orange-400" : "text-black"}`}
              onClick={() => setCurrentTab("mostViewed")}
            >
              Most Viewed
            </button>
            <button
              className={`text-gray-600  ${CurrentTab === "topBrands" ? "text-orange-400" : "text-black"}`}
              onClick={() => setCurrentTab("topBrands")}
            >
              Top Brands
            </button>
          </div>
          

        <hr className="border-t border-gray-300 mt-4 mb-8" />

        {CurrentTab === "bestSeller" && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
            {AllProducts?.slice(101,106).map((product) => (
              <div>
                       <Products
                       image={product.thumbnail}
                       title={product.description}
                       price={`$${Math.round(product.price)}`}
                       discountPrice={Math.round(
                         product.price -
                           Math.floor(
                             (product.price *
                               product.discountPercentage) /
                               100
                           )
                       )}
                       ratingStar={product.rating}
                       productId={product.id}
                     />
              </div>
            ))}
          </div>
        )}
        {CurrentTab === "mostViewed" && 
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
            {AllProducts?.slice(107,112).map((product) => (
              <div>
                       <Products
                       image={product.thumbnail}
                       title={product.description}
                       price={`$${Math.round(product.price)}`}
                       discountPrice={Math.round(
                         product.price -
                           Math.floor(
                             (product.price *
                               product.discountPercentage) /
                               100
                           )
                       )}
                       ratingStar={product.rating}
                       productId={product.id}
                     />
              </div>
            ))}
          </div>
        </div>
        }
        {CurrentTab === "topBrands" && 
        <div>
           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
            {AllProducts?.slice(93,98).map((product) => (
              <div>
                  <Products
                    image={product.thumbnail}
                    title={product.description}
                    price={`$${Math.round(product.price)}`}
                    discountPrice={Math.round(
                      product.price -
                        Math.floor(
                          (product.price *
                            product.discountPercentage) /
                            100
                        )
                    )}
                    ratingStar={product.rating}
                    productId={product.id}
                    />
              </div>
            ))}
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Add;
