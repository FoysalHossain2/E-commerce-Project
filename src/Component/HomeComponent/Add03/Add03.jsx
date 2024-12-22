import React from "react";
import Furniture1 from "../../../assets/Furniture/Furniture1.png";
import Furniture2 from "../../../assets/Furniture/Furniture2.png";
import Furniture3 from "../../../assets/Furniture/Furniture3.png";
import Lamp from "../../../assets/Furniture/Lamp.png";
import Sofa from "../../../assets/Furniture/Sofa.png";

const Add03 = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
        <div>
          <div
            className="bg-cover bg-center relative md:h-60 h-[505px] rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${Furniture3})`,
            }}
          >
            <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-lg font-bold">Reading Table</h3>
              <p>Under $50</p>
            </div>
          </div>

          <div
            className="bg-cover bg-center relative rounded-lg shadow-lg mt-6 md:h-60 h-[505px]"
            style={{
              backgroundImage: `url(${Sofa})`,
            }}
          >
            <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-lg font-bold">Sofa Collection</h3>
              <p>Aqua Shift Special Edition</p>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-center relative h-[505px] rounded-lg shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(${Furniture2})`,
          }}
        >
          <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
          <div className="text-center z-10">
            <h3 className="text-lg font-bold text-white">Top Rated Chair</h3>
            <p className="text-white">Under $120</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>

        {/* <!-- Table Lamp Collection --> */}
        <div>
          <div
            className="bg-cover bg-center relative h-60 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${Lamp})`,
            }}
          >
            <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-lg font-bold">Table Lamp Collection</h3>
              <p>Aqua Shift Special Edition</p>
            </div>
          </div>

          <div
            className="bg-cover bg-center relative h-60 rounded-lg shadow-lg mt-6"
            style={{
              backgroundImage: `url(${Furniture1})`,
            }}
          >
            <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-lg font-bold">Relaxing Chair</h3>
              <p>From $100. Free shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add03;
