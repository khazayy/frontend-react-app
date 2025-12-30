import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

let AddUser=()=>{
let [user,setUsers]=useState({id:0,name:{firstname:'',lastname:''},username:"",password:'',email:"",phone:"",
address:{city:"",street:'',number:0,zipcode:'',geolocation:{lat:"",long:""}},
__v:0



})
let navigate=useNavigate()
let param=useParams()
let {userid}=param

useEffect(()=>{
    if(userid){
        axios.get(`https://fakestoreapi.com/users/${userid}`).then(res=>{
            setUsers(res.data)
            console.log(res.data)
        })
    }
    else{

    }
   
},[])
let setData=()=>{
if(userid){
    axios.put(`https://fakestoreapi.com/users/${userid}`,user).then(res=>console.log(res))
    navigate("/adnimPanel")
    alert("کاربر با موفقیت ویرایش شد")
}
else{
    axios.post(`https://fakestoreapi.com/users`,user).then(res=>console.log(res))
    navigate("/adnimPanel")
    alert("کار بر با موفقیت اضافه شد")
}

}
    return(
        <>
        <img src="/imagss/laptopStore.jpeg" alt="" />
        <div className="form">
            
             <input onChange={(e)=>{
                setUsers({...user,name:{lastname:e.target.value}})
             }}  value={user.name.lastname}  className="" type="text" name="" id="" placeholder="نام خود را وارد کنید" />
             <p   className="eror">نام شما حداقل باید......</p>
             
             <input onChange={(e)=>{
                setUsers({...user,name:{firstname:e.target.value}})
             }}  value={user.name.firstname}  className="" type="text" name="" id="" placeholder="نام خود را وارد کنید" />
             <p   className="eror">نام شما حداقل باید......</p>
             
             <input
              onChange={(e)=>{
                setUsers({...user,username:e.target.value})
             }} 
              value={user.username}  className="" type="rext" name="" id="" placeholder="نام کاربری را وارد کنید" />
             <p className="eror">نام شما حداقل باید......</p>
            
             <input 
              onChange={(e)=>{
                setUsers({...user,email:e.target.value})
             }} 
             value={user.email} className="" type="email" name="" id="" placeholder="ایمیل خود را وراد کنید" />
             <p>  </p>
             
             <input 
              onChange={(e)=>{
                setUsers({...user,password:e.target.value})
             }} 
             value={user.password} className="" type="password" name="" id="" placeholder="رمز عبور خود را وارد کنید" />
             <p className="eror">نام شما حداقل باید......</p>
             
             <input onChange={(e)=>{
                setUsers({...user,phone:e.target.value})
             }} value={user.phone} className="" type="text" name="" id="" maxLength={11} placeholder="شماره موبایل خود را وارد کنید" />
             
             <button onClick={setData} className="send-Data">ارسال</button>
        </div>
        </>
    )
}
export default AddUser