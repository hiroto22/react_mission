import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { isAuthenticatedState } from "../state/authState"
import { IsLoginState } from "../state/isLoginState"
import { useGetStorageToken } from "./useGetStorageToken"



export const useAuth = () => {
    const token = useGetStorageToken()
    const  [isAuthenticated,setisAuthenticated]  = useRecoilState(IsLoginState)
    useEffect(()=>{
        
         token=="Bearer null"?setisAuthenticated(true):setisAuthenticated(false)
    
    },[token])

    return isAuthenticated
}