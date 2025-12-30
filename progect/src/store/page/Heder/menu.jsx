import react from "react";
import "../styles/homeStyle.css"
import { SlBasket } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
import { Link, Links, useNavigate } from "react-router-dom";
let Menu=()=>{
  let navigate=useNavigate()
    return(
        <>
        <div className="heder">
        
        <ul>
        <img className="logo-in-heder" src="/logo.jpeg" alt="" />

        <li className="li-in-heder"><button className="a-in-heder basketIcon" onClick={()=>navigate("/adnimPanel") } > admin <FaUsers /></button></li>
        <li className="li-in-heder basketIcon"><button className="a-in-heder basketIcon" onClick={()=>navigate("/basket") } > basket<SlBasket/></button></li>
          <li className="li-in-heder"><button className="a-in-heder" onClick={()=>{navigate("/home")}} >HOME</button></li>

          
        </ul>
      </div>
        </>
    )
}
export default Menu