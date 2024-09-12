import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import back from"./back.png";

 const Hero = () =>{
    return (
        <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w- full bg-no-repeat ${styles.normalFlex}`}
        style ={{
            backgroundImage:`url(${back})`
        }}
        >
            <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                <h1 className={"text-[35px] leading-[1.2] 800px:[60px] text-[#000000] capitalize font-Caveat font-extrabold "}>
                 Welcome to Far_market  <br />  – Your Trusted Online Agricultural Marketplace
                </h1>
                <p className="pt-5 text-[25px] text-[#ffff22] font-Caveat font-bold">
                At Far_market, we connect farmers, producers, and consumers, making fresh, organic products easily accessible. From farm-fresh vegetables to dairy and grains, we offer a seamless shopping experience tailored to your needs. By supporting local farmers and sustainable practices, we ensure quality at competitive prices. Enjoy fast delivery, secure payments, and the convenience of farm-to-table living with Far_market!
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