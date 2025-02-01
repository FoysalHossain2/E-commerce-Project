import Banner from "../../Component/HomeComponent/Banner/Banner";
import Categories from "../../Component/HomeComponent/Categories/Categories";
import Shipping from "../../Component/HomeComponent/Shipping/Shipping";
// import Add from '../../Component/HomeComponent/Add/Add'
import {  useSelector } from "react-redux";
import Add from "../../Component/HomeComponent/Add/Add";
import Add04 from "../../Component/HomeComponent/Add/Add04";
import Add02 from "../../Component/HomeComponent/Add02/Add02";
import Add03 from "../../Component/HomeComponent/Add03/Add03";
import Furniture from "../../Component/HomeComponent/Furniture/Furnituar";
import ProductGrid from "../../Component/HomeComponent/ProductGrid";
import UniqueProduct from "../../Component/HomeComponent/UniqueProduct";

const Home = () => {



  const {  status } = useSelector((state) => state.product);

  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Add04 />
        <Shipping />
        <Categories />
        <Add02 />
        <Add />
        <UniqueProduct />
        <Add03 />
        <Furniture  />
        {/* <ProductGrid /> */}
      </div>
    </>
  );
};

export default Home;
