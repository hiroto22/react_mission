import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Header } from "../components/organisms/header"
import { Login } from "../components/organisms/login"
import { useGetStorageToken } from "../hooks/useGetStorageToken"



export const LoginPage = () => {
    const navigate = useNavigate()
    const token = useGetStorageToken()
    return(
        <div>
         {token=="Bearer null"||token=="Bearer undefined"?
           <div>
            <Header />
            <Login />
           </div>
           :<Navigate to="/" /> }
        </div>
    )
}