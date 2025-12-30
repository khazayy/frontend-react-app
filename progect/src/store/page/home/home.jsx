import react, { useContext , useEffect, useState ,} from "react";
import "../styles/homeStyle.css"
import Product from "./product";
import Heder from "../Heder/heder";
import { Route, Routes } from "react-router-dom";
import { Contex, locaalContex } from "../contex/contex";
import axios from "axios";

const Home=()=>{
   
    let[product,setProduct]=useState([])
    let contex=useContext(Contex)
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products").then(res=>{

         setProduct(res.data)
      })
    },[])
    return(
        <>
            
           <Contex.Provider value={{
            product:product,
            setProduct:setProduct
           }}>
           <Product/>
           </Contex.Provider>
       
           
        </>
        
    )


}
export default Home