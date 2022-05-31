import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const URL = "https://api-for-missions-and-railways.herokuapp.com/users"

export const useSingnup = () =>{
    const navigate = useNavigate()
    const [isCreate,setIsCreate] = useState<boolean>(false) 

    const singnUp = async(name:string,email:string,password:string) =>{
        await axios.post(URL,{
            name:name,
            email:email,
            password:password
     })
     .then((res)=>{
        sessionStorage.setItem("token",res.data.token)
        setIsCreate(true)
     })
     .catch((error)=>{
         console.log(error)
         alert(`${error} 
         登録できませんでした。もう一度お試し下さい。`)
        })
    isCreate?navigate("/"):navigate("/signup")

    }
    
    return singnUp
}