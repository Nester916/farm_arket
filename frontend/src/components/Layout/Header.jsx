import react, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { productData} from "../../staticdata";
import {AioutlineSearch} from "react-icons/ai";



const Header = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [searchdata,setSearchData] = useState(null);

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
        </div>
      </div>
    );
export default header
