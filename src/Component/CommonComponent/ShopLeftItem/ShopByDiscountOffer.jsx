import React, { useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";

const ShopByDiscountOffer = ({ DiscountOffer, ShopLeftTitle }) => {
  const [CheckMark, setCheckMark] = useState(false);

  const HandleClick = () => {
    setCheckMark(!CheckMark);
  };

  return (
    <>
      <div className="mt-4 p-3">
        <h3 className="font-Josefin__Sans text-xl underline text-secondary_text_color">
          {ShopLeftTitle}
        </h3>

        <div className="mt-[11px]">
          {DiscountOffer?.map((items, id) => (
            <div key={id} className="flex items-center gap-x-6">
              <div
                className="w-5 h-5 border bg-[#FFDBF1] flex items-center"
                onClick={HandleClick}
              >
                {CheckMark && (
                  <GrFormCheckmark className="text-[#FF3EB2] textF cursor-pointer" />
                )}
              </div>
              <p className="text-Paragraph__Color font-DM_Sans py-2">
                {items.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopByDiscountOffer;
