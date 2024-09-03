import react from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero";
import Categories from "../components/Route/Categories/Categotries"
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx"
const Homepage = () => {
    return (
      <div>
        <Header activeHeading = {1}/>
        <hero />
        <Categories/>

      </div>
    )
  }
export default HomePage