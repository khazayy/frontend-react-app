import react, { useContext, useEffect, useState , } from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Heder from "../Heder/heder";
import { Contex, locaalContex } from "../contex/contex";
 const Product=()=>{

let navigate=useNavigate()

let {product,setProduct}=useContext(Contex)
useEffect(()=>{},[

])

  let jewelery=product.filter(e=>{
   return e.category=="jewelery"
  })


let electroncs=product.filter(res=>{
   return res.category=="electronics"
})
let mensColoction=product.filter(res=>{
  return res.category=="men's clothing"
})
let womensColoction=product.filter(res=>{
  return res.category=="women's clothing"
})

    return(
        <>
   <Heder />
       <div className="poroducts-main">
      
         <p className="title-prod"></p>
       {jewelery.slice(0,6).map(e=>(
          <div className="product">
          <img className="image-product" src={e.image} alt="" />
          <p  className="title-product">{e.title}</p>
          <p className="product-price">$    {e.price}</p>
         <button onClick={()=>{navigate(`/home/${e.id}`)}} className="show-product"  >مشاهده محصول</button>

           </div>
           
        ))}
        
     
       </div>
       
       <div className="imag-main">
         <img className="img-title-2" src="/imagss/laptopStore.jpeg" alt="" />
         <img className="img-title-2" src="/imagss/modol.png" alt="" />
        </div>

       <div className="poroducts-main">
         <p className="title-prod"></p>
       {electroncs.map(e=>(
          <div className="product">
          <img className="image-product" src={e.image} alt="" />
          <p className="title-product">{e.title}</p>
          <p className="product-price">$    {e.price}</p>
          <button onClick={()=>navigate(`/home/${e.id}`)} className="show-product">مشاهده محصول</button>

           </div>
           
        ))}
      
      
      
       </div>
       <div className="poroducts-main">
         <p className="title-prod"></p>
       {womensColoction.map(e=>(
          <div className="product">
          <img className="image-product" src={e.image} alt="" />
          <p className="title-product">{e.title}</p>
          <p className="product-price">$    {e.price}</p>
          <button onClick={()=>navigate(`/home/${e.id}`)} className="show-product">مشاهده محصول</button>

           </div>
           
        ))}
      
      
      
       </div>
       <div className="poroducts-main">
         <p className="title-prod"></p>
       {mensColoction.map(e=>(
          <div className="product">
          <img className="image-product" src={e.image} alt="" />
          <p className="title-product">{e.title}</p>
          <p className="product-price">$    {e.price}</p>
          <button onClick={()=>navigate(`/home/${e.id}`)} className="show-product">مشاهده محصول</button>

           </div>
           
        ))}
      
      
      
       </div>
        </>
    )

 }
 export default Product