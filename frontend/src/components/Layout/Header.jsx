import react, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { productData} from "../../staticdata";
import {AioutlineSearch} from "react-icons/ai";
import {ToIosArrowforward} from "react-icons?io";
import {BiMenuAltLeft} from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";

const Header = ({activeHeading}) => {
    const [searchTerm,setSearchTerm] = useState("");
    const [searchdata,setSearchData] = useState(null);
    const [active,setActive] = useState(false);
    const [dropDown,setDropDown] = useState(false);


    const handleSearchChange = (e) =>{
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts =
        allProducts &&
        allProducts.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        );
      setSearchData(filteredProducts);
    };

    window.addEventListener("scroll",()=> {
        if (window.screenY>70){
            setActive(true);
        } else{
            setActive(false)
        }
    })
    return (
      <div className={"${styles.section}"}>
        <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
            <div>
                <link to="/">
                    <img src="please fill this naimur" alt=""/>
                </link>
            </div>
            {/*search box*/}
            <div className='w-[50%] relative'>
                <input type="text" placeholder="Search Product..." value={searchdata} onChange={handleSearchChange}
                className='h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md
                '/>
                <AioutlineSearch size ={30} className ="absolute right-2 top-1.5 cursor-pointer"/>
                {
                    searchdata && searchdata.length!== 0 ?(
                        <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                            {searchdata && searchdata,map((i,index) =>{
                                const d =i.name;

                                const Product_name =d.replace(/\s+/g,"-");
                                return (
                                    <link to ={"/product/${Product_name}"}>
                                        <div className='w-full flex itmes-start-py-3'>
                                            <img src ={i.image_Url[0].url} alt="" className='w-[40px] h-[40px] mr-[10px]'/>
                                            <h1>{i.name}</h1> 
                                        </div>
                                    </link>
                                );
                            })};
                        </div> 
                ) :null}
            </div>
            
            <div classname={"${styles.button}"}>
                <link to="/seller">
                <h1 className='text-[#fff] flex items-center'>
                    Become Seller <ToIosArrowforward className="ml-1"/>
                </h1>
                </link>
            </div>
        </div>
        <div className={"${active === true ? 'shadow-sm fixed top-0 left-0 z-10' : null} transition hidden 800px:flex items-center justify-between bg-{#3321c8} h-[70px]"}>
        </div>
        <div className={"${styles.section} relative ${style.normalFlex} justify-between"}>
            {/* categories */}
            <div>
                <div className='relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block'>
                    <BiMenuAltLeft size = {30} className="absolute top-3 left-2"/>
                    <button
                    className={"h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sanstext-lg font-[500] select-none rounded-t-md"}>
                        All Categories 
                    </button>
                    <IoIosArrowdown
                    size = {20}
                    className = "absolute right-2 top-4 cursor-pointer"
                    onClick={() => setDropDown(!dropDown)}/>
                    {
                        dropDown ? (
                            <dropDown
                            categoriesData = {categoriesData}
                            setDropDown = {setDropDown}
                            />
                        ) : null
                    }
                    </div>
                </div>
                {/* {navigates} */}    
                <div classname ={"${styles.normalFlex}"}>
                    <Navbar active ={activeHeading}/>    
                </div>    
                   <div>
                      <div className={'${styles.normalFlex}'}>
                        <div className='relative cursor-pointer mr-[15px]'>
                            <AioutlineHeart
                            size = {30}
                            color = "rgb(255 255 255/83%)"
                            />
                            <span className='absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center '>

                            </span>
                    </div>          

            </div>

        </div>
      </div>
    );
};
export default header
