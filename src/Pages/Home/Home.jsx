import React from 'react'
import Banner from '../../Component/HomeComponent/Banner/Banner'
import NewArrival from '../../Component/HomeComponent/NewArrival/NewArrival'
import Categories from '../../Component/HomeComponent/Categories/Categories'
import Shipping from '../../Component/HomeComponent/Shipping/Shipping'


const Home = () => {
  return (
    <>
    <Banner />
    <Shipping />
    <Categories />
    <NewArrival />
    </>
  )
}

export default Home