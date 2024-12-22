import React, { createContext, useState } from "react";
import ShopRightBottom from "../../CommonComponent/ShopRightItem/ShopRightBottom";
import ShopRightTop from "../../CommonComponent/ShopRightItem/ShopRightTop";

export const ShopPageChangeContext = createContext();

const ShopRight = ({ className }) => {
  const [PageChange, setPageChange] = useState(16);
  const [GrideChange, setGrideChange] = useState(false);

  const HandlePageChange = (e) => {
    setPageChange(e.target.value);
  };

  const HandleGrideChange = () => {
    setGrideChange(true);
  };

  const HandleGrideChange2 = () => {
    setGrideChange(false);
  };

  return (
    <>
      <div className={`${className}`}>
        <ShopRightTop
          onHandlePageChange={HandlePageChange}
          HandleGrideChange={HandleGrideChange}
          HandleGrideChange2={HandleGrideChange2}
          changeIcon={GrideChange}
        />

        <ShopPageChangeContext.Provider value={{ PageChange, GrideChange }}>
          <ShopRightBottom />
        </ShopPageChangeContext.Provider>
      </div>
    </>
  );
};

export default ShopRight;
