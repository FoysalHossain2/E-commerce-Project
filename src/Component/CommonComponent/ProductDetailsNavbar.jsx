import React from "react";

const ProductDetailsNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex items-center justify-between px-4 py-2 border-t">
      {/* Store & Chat Icons */}
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center text-orange-500">
          <span className="text-xl">🏬</span>
          <span className="text-xs font-medium">Store</span>
        </div>
        <div className="flex flex-col items-center text-orange-500">
          <span className="text-xl">💬</span>
          <span className="text-xs font-medium">Chat</span>
        </div>
      </div>

      {/* Buy Now & Add to Cart Buttons */}
      <div className="flex w-2/3">
        <button className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 rounded-l-lg">
          Buy Now
        </button>
        <button className="flex-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 rounded-r-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsNavbar;