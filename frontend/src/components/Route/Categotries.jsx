import React from "react"

const Categories =() =>{
    return (
        <>
          <div className={"${styles.section} hidden sm:block"}>
            <div className={"branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md"}>4
                {
                    brandingData && brandingData.map((i,index) => (
                        <div className="flex items-start" key={index}>
                            {i.icon}
                            <div className="px-3">
                                <h3 className="font-bold text-sm md:text-base">
                                    {i.title}
                                </h3>
                                <p className="text-xs md:text-sm">{i.description}</p>
                            </div>
                        </div>
                    )) 
                }
            </div>
          </div>
        </>
    )
}