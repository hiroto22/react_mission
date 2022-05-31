import axios from "axios";

const URL = "https://api-for-missions-and-railways.herokuapp.com/users"


export const signupFunc = (name:string,email:string,password:string) =>{
    axios.post(URL,{
        name:name,
        email:email,
        password:password
 })
 .then((res)=>{
    sessionStorage.setItem("token",res.data.token)
 })
 .catch((error)=>{
     console.log(error)
     alert(error)
    
    })
 };