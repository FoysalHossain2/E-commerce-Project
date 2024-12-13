import React, { useState } from "react";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import Categories from "../../Component/HomeComponent/Categories/Categories";
import NewArrival from "../../Component/HomeComponent/NewArrival/NewArrival";
import Shipping from "../../Component/HomeComponent/Shipping/Shipping";
// import Add from '../../Component/HomeComponent/Add/Add'
import { useDispatch, useSelector } from "react-redux";
import Furniture from "../../Component/HomeComponent/Furniture/Furnituar";

const Home = () => {
  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);

  const { data, status } = useSelector((state) => state.product);

  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Shipping />
        {/* <Add /> */}
        <Categories />
        <Furniture status={status} />
        <NewArrival headingTitle="NewArrival" />
        <NewArrival headingTitle="Just For You" />
      </div>
    </>
  );
};

export default Home;
