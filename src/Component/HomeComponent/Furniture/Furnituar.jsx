import React from "react";

const products = [
  {
    id: 1,
    brand: "SAMSUNG",
    name: "SAMSUNG Galaxy Tab S7 Plus 12.4\" 128GB Mystic Black",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 2,
    brand: "HP",
    name: "HP 11.6\" Chromebook, AMD A4, 4GB RAM, 32GB Storage",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 3,
    brand: "RCA",
    name: "RCA 43\" Class 4K Ultra HD (2160P) HDR Roku Smart",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 4,
    brand: "ASUS",
    name: "ASUS VivoBook 15.6\" 1080p PC Laptops, Intel Core i3",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 5,
    brand: "LG",
    name: "LG 65\" Class 4K UHD Smart TV OLED A1 Series",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 6,
    brand: "SAMSUNG",
    name: "SAMSUNG Galaxy Tab A7 Lite, 8.7\" Tablet 32GB",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 7,
    brand: "Apple",
    name: "2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 8,
    brand: "Apple",
    name: "Apple AirPods Pro with MagSafe Charging Case",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  },
  {
    id: 9,
    brand: "HP",
    name: "HP Slim Desktop, Intel Celeron J4025, 4GB RAM",
    image: "https://via.placeholder.com/150",
    price: 2556.3,
    oldPrice: 3225.6,
    rating: 65,
  }
];

const Furnituar = ({ product }) => {
  return (
    <div className="py-10 pb-24 pt-32">
      <div className="container mx-auto">

         <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2 ">Weekly selection</h2>
            <p className=" text-gray-600 mb-6">
              Shop living room furniture, crafted by designers all over the
              world
            </p>
          </div>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row items-center gap-4">
            <img src={product.image} alt={product.image} className="w-24 h-24 object-cover" />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">{product.brand}</p>
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ ({product.rating})</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-gray-400 line-through">${product.oldPrice}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Furnituar
