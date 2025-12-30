import axios from "axios";
import react, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import "../styles/adminPanel.css"
import { useNavigate } from "react-router-dom";

let Panel=()=>{
  let Navigate=useNavigate()
  let [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/users/").then(res=>{
      
      setUsers(res.data)
    })
  },[])
  let deletUser=(id)=>{

let conf=window.confirm(`ایا کار بر شماره ${id} پاک شود`)
if(conf){
  axios.delete(`https://fakestoreapi.com/users/${id}`).then((e)=>{
    alert("کار بر با موفقیت حذف شد")

  })
}

  }
return(
  
    <>
<button onClick={()=>Navigate('/addUser')} className="add-user-btn">+</button>
    <div classname="users-Panel">
        <table className="users-Tabel">
         <tr>
            <th> وضعیت</th>
            <th>ادرس ایمیل</th>
            <th>نام کاربری</th>
            <th>نام</th>
            <th>id</th>
         </tr>
         {users.map(e=>(
      
             <tr>
           <td>
           <button onClick={()=>{deletUser(e.id)}}  className="delet-user tabelbtn"><MdDelete /></button> 
            <button onClick={()=>Navigate(`/addUser/${e.id}`)} className="edite-user tabelbtn"><MdEdit /></button>
           </td>
           <td>{e.email}</td>
           <td>{e.username}</td>
           <td>{e.name.lastname}</td>
           <td>{e.id}</td>
         </tr>
          
         ))}
         

        </table>
    </div>
    </>
)
}
export default Panel