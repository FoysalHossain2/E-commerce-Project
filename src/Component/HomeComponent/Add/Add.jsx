import React from "react";
import Arrivals1 from "../../../assets/NewArrivals/Arrivals1.png";

const Add = () => {
  const products = [
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
        <div className="flex items-end justify-between ">
          <div>
            <h2 className="text-2xl font-bold mb-2 ">Weekly selection</h2>
            <p className=" text-gray-600 mb-6">
              Shop living room furniture, crafted by designers all over the
              world
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="text-blue-600 font-medium border-b-2 border-blue-600">
              All
            </button>
            <button className="text-gray-600">Best Seller</button>
            <button className="text-gray-600">Most Viewed</button>
            <button className="text-gray-600">Top Brands</button>
          </div>
        </div>
        <hr className="border-t border-gray-300 mt-4 mb-8" />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white relative rounded-lg shadow hover:shadow-lg transition "
            >
              <div
                className={`absolute top-2 left-2 text-white text-sm px-2 py-1 rounded ${product.tagStyle}`}
              >
                {product.tag}
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-medium mt-4">{product.title}</h3>
              <div className="flex items-center mt-2 text-gray-500">
                <span className="mr-2">⭐</span>
                <span>({product.rating})</span>
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Add;
