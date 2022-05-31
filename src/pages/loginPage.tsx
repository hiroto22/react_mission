import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/organisms/header"
import { Login } from "../components/organisms/login"
import { useGetStorageToken } from "../hooks/useGetStorageToken"



export const LoginPage = () => {
    return(
        <div>
            <Header />
            <Login />
        </div>
    )
}