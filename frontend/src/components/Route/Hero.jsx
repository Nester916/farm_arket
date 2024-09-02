import React from "react";

 const Hero = () =>{
    return (
        <div className={"relative min-h-[70vh] 800px:min-h-[80vh] w- full bg-no-repeat ${styles.normalFlex}:"}
        style ={{
            backgroundImage:"url{please generate a link here naimur}",
        }}
        >
            <div className={"${styles.section} w-[90%] 800px:w-[60%]"}>
                <h1 className={"text-[35px] leading-[1.2] 800px:[60px] text-[#3d3a3a] font-[600] capitalize"}>
                    Best Collection for <br /> Agriculture 
                </h1>
                <p className="pt-5 text-[16px] font-[Poppings] font-[400] text-[#000000ba]">
                    Give Some description Naimur
                </p>
                <link to ="/products" className="inline-block">
                  <div className={"${styles.button} mt-5"}>
                    <span className="text-[#fff] font-[Poppings] text-[18px]">
                        Shop Now
                    </span>

                  </div>
                </link>
            </div>
        </div>
    )
 }

export default Hero