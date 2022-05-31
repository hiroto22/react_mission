import axios from "axios";
import { useEffect, useState } from "react";


const URL = "https://api-for-missions-and-railways.herokuapp.com/users"


export const useGetName = (token:string) =>{
    const [name,setName] = useState()
    useEffect(()=>{
        axios.get(URL,{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            setName(res.data.name)
        })
        .catch((err)=>{console.log(err)})
    
    },[token])
    
    return name

}