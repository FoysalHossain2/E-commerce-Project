import React from 'react'

const HeaderTop = () => {
  return (
    <>
         <div className="w-full border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-2 text-sm text-gray-600">
        {/* Left Section */}
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:underline">
            Open a shop
          </a>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <a href="#" className="text-orange-600 hover:underline">
            Free shipping for all orders over <span className="text-green-600 font-semibold">$70.00</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 items-center">
          <span>
            Need help? Call Us:{" "}
            <span className="text-green-600 font-semibold">+1800 900</span>
          </span>
          <div className="flex items-center gap-1">
            <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-4 h-3" />
            <select className="bg-transparent text-gray-600">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <div>
            <select className="bg-transparent text-gray-600">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderTop