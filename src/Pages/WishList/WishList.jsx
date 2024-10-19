import React from "react";
import BreadCrumb from "../../Component/CommonComponent/BreadCrumb/BreadCrumb";
import WishListAdd from "../../Component/WishListComponent/WishListAdd";

const WishList = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-3 max-sm:hidden max-md:hidden md:hidden lg:block">
          <BreadCrumb />
        </div>
        <hr />
        <div>
          <WishListAdd />
        </div>
      </div>
    </>
  );
};

export default WishList;
