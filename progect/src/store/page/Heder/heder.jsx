import React, { useContext, useEffect, useState } from "react";
import "../styles/homeStyle.css"
import Menu from "./menu";
import { Contex } from "../contex/contex"; 
import axios from "axios";
const Heder=()=>{
 let {product,setProduct}=useContext(Contex)
let [Search,setSearch]=useState([])
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then(res=>{

  setSearch(res.data)
  console.log(res)
})
},[])
const handleSearch=(e)=>{
  console.log(e.target.value)
setProduct(Search.filter(res=>{
  return res.title.includes(e.target.value)
}))
}


    return(<>
  
  <div className="input-searh-main">
      <input onChange={handleSearch} className="search-input" placeholder="دنبال چی میگردی" type="text" />
     
      </div>
         
        <div className="abner-in-div">
          <img className="baner" src="/imagss/imageHeder.jpeg" alt="" />
         <a href=""> <button  className="teleport-in-product">مشاهده محصولات</button> </a> 
        </div>
    </>)
}
export default Heder