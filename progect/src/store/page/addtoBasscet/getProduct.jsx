import axios, { Axios } from "axios";
import react, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/basket.css"
import { locaalContex } from "../contex/contex"; 
let Getproduct=()=>{
  
    const {id}=useParams()
    
     let[product,setProduct]=useState([])
     let getContex=useContext(locaalContex)
     let {basscetCarad,setBasscetCard}=getContex
     useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{
        setProduct(res.data)
        })          
       let getLocal=JSON.parse(localStorage.getItem("bascetItem"))
       if(getLocal){
        setBasscetCard(getLocal)
       }
     },[])
    
    
    let addtoLocall=()=>{
          setBasscetCard([...basscetCarad,product]);
          localStorage.setItem("bascetItem",JSON.stringify(basscetCarad))
           
        
      
     
      
      
        
      
 
    }
     
    
     return(
    
        <>
      
          <div className="product-box">
          <div className="capthion">
          <div className="title">
          <p>عنوان</p>
            <p> {product.title}   </p>       
             
             </div>
             <hr/>
          <div className="title price">
          <p>قیمت</p>
          <p> {product.price}   </p>       
            
            
            </div>
              <hr />
          <div className="title description">
          <p>توضیحات</p>
          <p> {product.description}   </p>       
            
            </div>
           
        </div>
        <div className="image-main">
              <img  className="image-get" src={product.image} alt="" />
          </div>
          </div>
         <hr />
  <button onClick={addtoLocall}  className="add-to-basscet-card" >افزودن به سبد خرید</button>
          </>
               
     )
   
}
export default Getproduct