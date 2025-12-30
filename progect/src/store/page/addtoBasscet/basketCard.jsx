import React, { useContext } from "react";
import "../styles/basket.css"
import { locaalContex } from "../contex/contex"; 



const Basket=()=>{
    let getContex=useContext(locaalContex)
    let {basscetCarad,setBasscetCard}=getContex
   
    let getDataFromLocalStroge=JSON.parse(localStorage.getItem("bascetItem"))
    

let hendleDeletData=(id)=>{
let filterData=getDataFromLocalStroge.filter(res=>{
    return res.id!==id

})
console.log(filterData)
localStorage.setItem("bascetItem",JSON.stringify(filterData))
setLocall()
}
let setLocall=()=>{
     let getData=JSON.parse(localStorage.getItem("bascetItem"))
     setBasscetCard(getData)
    
}
if(getDataFromLocalStroge.length>0){
    return(
        <>
        
        <div className="poroducts-main-in-Basscet">
          
          <p className="title-prod"></p>
        {getDataFromLocalStroge.map(e=>(
           <div className="product-in-Basscet">
           <img className="image-product" src={e.image} alt="" />
           <p  className="title-product">{e.title}</p>
           <p className="product-price">$    {e.price}</p>
          <button onClick={()=>{hendleDeletData(e.id)}} className="show-product"  >پاک کردن</button>
    
            </div>
            
         ))}
         
      
        </div>
        </>
    )
}
else{
    return(
        <>
        <h3 className="tipe-none">هیچ چیز در سبد خرید نیست</h3>
        </>
    )
}
    


}
export default Basket