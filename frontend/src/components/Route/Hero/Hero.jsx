import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

 const Hero = () =>{
    return (
        <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w- full bg-no-repeat ${styles.normalFlex}`}
        style ={{
            backgroundImage:"url(please generate a link here naimur)"
        }}
        >
            <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                <h1 className={"text-[35px] leading-[1.2] 800px:[60px] text-[#3d3a3a] font-[600] capitalize"}>
                    Best Collection for <br /> Agriculture 
                </h1>
                <p className="pt-5 text-[16px] font-[Poppings] font-[400] text-[#000000ba]">
                Welcome to Nester Farm_arket, your online gateway to fresh, local farm produce! We connect you directly with local farmers and artisans, offering a wide range of seasonal fruits, vegetables, and specialty items delivered right to your door. Explore our user-friendly platform to find high-quality, sustainably grown products and enjoy farm-to-table freshness without leaving home. Whether you're looking for everyday staples or unique, artisanal goods, we make it easy to support local agriculture and eat well. Join our community and experience the best of farm-fresh convenience today!
                </p>
                <Link to ="/products" className="inline-block">
                  <div className={`${styles.button} mt-5`}>
                    <span className="text-[#fff] font-[Poppings] text-[18px]">
                        Shop Now
                    </span>

                  </div>
                </Link>
            </div>
        </div>
    )
 }

export default Hero