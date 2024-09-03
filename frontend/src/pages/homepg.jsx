import react from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categotries"
import BestDeals from "../components/Route/BestDeals/BestDeals"
const Home = () => {
    return (
      <div>
        <Header activeHeading = {1}/>
        <hero />
        <Categories/>
      </div>
    )
  }
export default Home