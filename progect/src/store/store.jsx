import react, { useContext,useState } from "react"
import Home from "./page/home/home"
import { Route, Routes, useNavigate } from "react-router-dom"
import Getproduct from "./page/addtoBasscet/getProduct"
import Heder from "./page/Heder/heder"
import Menu from "./page/Heder/menu"
import Basket from "./page/addtoBasscet/basketCard"
import { locaalContex } from "./page/contex/contex"
import Product from "./page/home/product"
import Panel from "./page/admin panel/panel"
import { UserCOntex } from "./page/contex/contex"
import AddUser from "./page/admin panel/addUser"



let Store=()=>{
    
    let bascetContex=useContext(locaalContex)
    let userContex=useContext(UserCOntex)
    let [basscetCarad,setBasscetCard]=useState([])
     



    return(
        <>
      
        <locaalContex.Provider value={{
            basscetCarad:basscetCarad,
            setBasscetCard:setBasscetCard
        }}>
        <Menu/>
        <Routes>
            <Route path="/addUser" element={<AddUser/>}/>
            <Route path="/addUser/:userid"element={<AddUser/>}/>
            <Route path="/adnimPanel" element={<Panel/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/home/:id" element={<Getproduct/>} />
            <Route path="/prouduct" element={<Product/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="*" element={<Home/>}/>

        </Routes>
        </locaalContex.Provider>
       
        </>
    )
}
export default Store