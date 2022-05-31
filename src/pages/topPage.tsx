import { Navigate, useLocation } from "react-router-dom"
import { BookList } from "../components/organisms/bookList"
import { Header } from "../components/organisms/header"
import { useGetStorageToken } from "../hooks/useGetStorageToken"


export const TopPage = () => {
    const token = useGetStorageToken()
    return(
        <div>
             <Header />
            {token=="Bearer null"?<Navigate to="/login" />:<BookList />}
        </div>
    )      
}


