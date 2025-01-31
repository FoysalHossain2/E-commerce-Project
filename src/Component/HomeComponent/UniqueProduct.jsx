import React from 'react'
import uniqueProduct from '../../assets/uniqueProduct.png'

const UniqueProduct = () => {
  return (
    <div className='py-10 mt-20 mb-20'>
         <div className='container mx-auto'>
            <div className="bg-[#F5F3FC] py-10 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center  gap-8">
            {/* Product Image */}
            <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute  w-72 h-72 bg-pink-200 rounded-full opacity-30"></div>
            <img
                src={uniqueProduct}
                alt="Italian Sofa"
                className="z-10 w-full max-w-md object-cover"
            />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#15005F] mb-4">
                Unique Features Of Latest & Trending Products
            </h2>
            <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                All frames constructed with hardwood solids and laminates
                </li>
                <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                </li>
                <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Arms, backs and seats are structurally reinforced
                </li>
            </ul>

            {/* Product Price and CTA */}
            <div className="mt-6 flex items-center gap-6">
                <button className="bg-[#FF3366] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#E02D5C] transition-all">
                Add To Cart
                </button>
                <div>
                <p className="font-semibold text-[#15005F]">88 Italian Sofa</p>
                <p className="text-gray-500">$32.00</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UniqueProduct