import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Header } from "../components/organisms/header"
import {  Signup } from "../components/organisms/signup"
import { useGetStorageToken } from "../hooks/useGetStorageToken"


export const SignUpPage = () => {
    const token = useGetStorageToken()
    console.log(token)
    const navigate = useNavigate()


    return(
        <div>
            {token=="Bearer null"||token=="Bearer undefined"?
            <div>
                <Header />
                <Signup />
            </div>
            :<Navigate to="/" />}
        </div>
    )
}