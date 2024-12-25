import React, { useState } from "react";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import Categories from "../../Component/HomeComponent/Categories/Categories";
import Shipping from "../../Component/HomeComponent/Shipping/Shipping";
// import Add from '../../Component/HomeComponent/Add/Add'
import { useDispatch, useSelector } from "react-redux";
import Add from "../../Component/HomeComponent/Add/Add";
import Add04 from "../../Component/HomeComponent/Add/Add04";
import Add02 from "../../Component/HomeComponent/Add02/Add02";
import Add03 from "../../Component/HomeComponent/Add03/Add03";
import Furniture from "../../Component/HomeComponent/Furniture/Furnituar";

const Home = () => {
  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);

  const { data, status } = useSelector((state) => state.product);

  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Add04 />
        <Shipping />
        <Add02 />
        <Categories />
        <Add />
        <Furniture status={status} />
        <Add03 />
      </div>
    </>
  );
};

export default Home;
