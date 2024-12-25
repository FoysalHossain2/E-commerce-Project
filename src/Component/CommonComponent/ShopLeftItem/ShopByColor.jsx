import React from "react";
import { ColorFilter } from "../../../../Data/Data";

const ShopByColor = () => {
  return (
    <>
      <div className="">
        <div className="mt-8">
          <h1 className="font-DM_Sans text-xl  text-secondary_text_color p-3">
            Color
          </h1>

          <div className="grid grid-cols-5 gap-x-4 gap-y-11  mt-1 p-3">
            {ColorFilter?.map((color, id) => (
              <div
                className={` w-8 h-8  rounded-full cursor-pointer`}
                style={{ backgroundColor: color.ColorCode }}
                key={id}
              >
                <p className="mt-[34px] text-[14px]">{color.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByColor;
