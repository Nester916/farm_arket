import React from 'react'
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categotries.jsx"
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx"
const Home1 = () => {
    return (
      <div>
        <Header activeHeading = {1}/>
        <Hero />
        <Categories/>
        <BestDeals />
      </div>
    )
  }
export default Home1