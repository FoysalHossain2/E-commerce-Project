import React from "react";

const products = [
  {
    id: 1,
    brand: "SAMSUNG",
    name: "Galaxy Tab S7 Plus 12.4\" 128GB Mystic Black",
    price: 2556.3,
    originalPrice: 3225.6,
    rating: 4.5,
    reviews: 65,
    image: "https://via.placeholder.com/150" // Replace with your image link
  },
  {
    id: 2,
    brand: "HP",
    name: "11.6\" Chromebook, AMD A4, 4GB RAM, 32GB Storage",
    price: 2556.3,
    originalPrice: 3225.6,
    rating: 4.5,
    reviews: 65,
    image: "https://via.placeholder.com/150"
  },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-32 object-contain mb-4"
      />
      <p className="text-sm text-gray-500 font-semibold uppercase mb-2">
        {product.brand}
      </p>
      <p className="font-medium text-gray-800 mb-2">{product.name}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">★★★★★</span>
        <span className="text-sm text-gray-500">({product.reviews})</span>
      </div>
      <p className="text-lg font-bold text-blue-600">${product.price}</p>
      <p className="text-sm line-through text-gray-400">${product.originalPrice}</p>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Selling Products</h2>
      <p className="text-gray-500 mb-6">Special products in this month.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;