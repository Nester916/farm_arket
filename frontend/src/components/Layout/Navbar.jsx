import React from "react"

const Navbar =({active}) => {
    return (
        <div className="{${styles.normalFlex}">
            {
                navItems && navItems.map((i,index) => (
                    <div className="flex">
                        <link to = {i.url}
                        className={"${active === index +1 ? 'text-[#17dd1f]' :'text-[#fff]' } font-[500] px-6 cursor-pointer}"}>
                        {i.title}
                        </link>
                    </div>
                ))
            }
        </div>
    )
}
        
    