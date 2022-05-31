import { useEffect, useState } from "react"



export const useGetStorageToken = () => {
    const [strage,setStrage] = useState<string|null>()
    useEffect(()=>{
        setStrage(sessionStorage.getItem("token"))
    },[strage])

    return "Bearer "+strage
 
}