import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/organisms/header"
import {  Signup } from "../components/organisms/signup"
import { useGetStorageToken } from "../hooks/useGetStorageToken"


export const SignUpPage = () => {
    const token = useGetStorageToken()
    console.log(token)
    // const navigate = useNavigate()

    // useEffect(()=>{
    //     token?navigate("/"):console.log(token)
    // },[])

    return(
        <div>
            <Header />
            <Signup />
        </div>
    )
}