import axios from "axios";
import { useEffect, useState } from "react";


type Detail ={
    id:string,
    title:string,
    url:string,
    detail:string,
    review:string,
    reviewer:string,
    isMine:boolean
}


export const  useDetail =  (token:string,id:string) =>{
    const URL = "https://api-for-missions-and-railways.herokuapp.com/books/"
    const [detail,setDetail] = useState<Detail>();


    useEffect(()=>{
         axios.get(URL+id,{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            console.log(res.data)
            setDetail(res.data)
            console.log(detail)
        })
        .catch((err)=>{console.log(err)})
    },[token])

    return detail

}