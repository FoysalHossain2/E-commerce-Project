import React from 'react'
import Banner from '../../Component/HomeComponent/Banner/Banner'
import Categories from '../../Component/HomeComponent/Categories/Categories'
import Shipping from '../../Component/HomeComponent/Shipping/Shipping'
import NewArrival from '../../Component/HomeComponent/NewArrival/NewArrival'
// import Add from '../../Component/HomeComponent/Add/Add'
import Furniture from '../../Component/HomeComponent/Furniture/Furnituar'



const Home = () => {
  return (
    <>
    <Banner />
    <Shipping />
    {/* <Add /> */}
    <Categories />
    <Furniture />
    <NewArrival headingTitle='NewArrival' />
    <NewArrival headingTitle='Just For You' />
    </>
  )
}

export default Home