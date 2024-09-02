import react from 'react'
import Header from "../components/Layout/Header";
import hero from "../components/Route/Hero";

const Homepage = () => {
    return (
      <div>
        <Header activeHeading = {1}/>
        <hero />
      </div>
    )
  }
export default HomePage