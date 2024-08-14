import React from 'react'
import Banner from '../../Component/HomeComponent/Banner/Banner'
import Categories from '../../Component/HomeComponent/Categories/Categories'
import Shipping from '../../Component/HomeComponent/Shipping/Shipping'
import NewArrival from '../../Component/HomeComponent/NewArrival/NewArrival'
import LatestUpdate from '../../Component/HomeComponent/LatestUpdate/LatestUpdate'
import Add from '../../Component/HomeComponent/Add/Add'
import Furniture from '../../Component/HomeComponent/Furniture/Furnituar'



const Home = () => {
  return (
    <>
    <Banner />
    <Add />
    <Shipping />
    <Categories />
    <LatestUpdate />
    <Furniture />
    <NewArrival headingTitle='NewArrival' />
    <NewArrival headingTitle='Best Seller' />
    </>
  )
}

export default Home