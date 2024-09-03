import React, { useState } from "react";
import {Link} from "react-router-dom";
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar,
  } from "react-icons/ai";
import styles from "../../../styles/styles";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductCard =({data}) => {
    const [click,setClick] = useState(false);
    const [open,setOpen] = useState(false);
    const d = data.name;
    const product_name = d.replace(/\s+/g, "-");

    return (
        <>
        <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
            <div className="flex justify-end">

            </div>
            <link to={"./product/${product_name}"}>
               <img src={data.image_Url[0].url} alt=''
                classname="w-full h-[170px] object-contain"></img>
            </link>
            <link to="/">
              <h5 classname={"${styles.shop_name}"}> {data.shop.name}</h5>
            </link>
            <link to={"/product/${product_name}"}>
                  <h4 className="pb-3 font-[500]">
                    {data.name.length >40 ? data.name.slice(0,40)+"..." : data.name}
                  </h4>
                  <div className="flex">
                    <AiFillStar 
                    className="mr-2 cursor-pointer"
                    size={20}
                    color="#f6BA00"
                    />
                    <AiFillStar 
                    className="mr-2 cursor-pointer"
                    size={20}
                    color="#f6BA00"
                    />
                    <AiFillStar 
                    className="mr-2 cursor-pointer"
                    color="#f6BA00"
                    size={20}
                    />
                    <AiFillStar 
                    className="mr-2 cursor-pointer"
                    color="#f6BA00"
                    size={20}
                    />
                    <AiOutlineStar
                    size={20} 
                    className="mr-2 cursor-pointer"
                    color="#f6BA00"
                    />
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <div className="flex">
                        <h5 className={"${styles.productDiscountPrice"}>
                            {data.price ===0
                            ? data.price : data.discount_price}
                            $
                        </h5>
                        <h4 className={"${styles.price}"}>
                                {data.price ? data.price +"$" : null}
                        </h4>
                    </div>
                    <span className="font-[400] text-[17px] text-[#68d284]">
                        {data.total_sell} sold
                    </span>
                  </div>
            </link>
                  {/*side options*/}
                  <div>
                    {click ?(
                        <AiOutlineHeart
                        size={22}
                        className="cursor-pointer absolute right-2 top-5"
                        onclick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                        />
                    ) : (
                        <AiOutlineEye
                            size={22}
                            className="cursor-pointer absolute right-2 top-14"
                            onclick={() => setOpen(!open)}
                            color="#333"
                            title="Quick View" />
                        )}
                        <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        onClick={() => addToCartHandler(data._id)}
                        color="#444"
                        title="Add to cart" />
                        {
                            open ?(
                                <ProductDetailsCard open={open} setOpen={setOpen} data={data}/>
                            ) : null
                        }
                  </div>

        </div>
        </>
    )
}

export default ProductCard