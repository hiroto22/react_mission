import { Navigate } from "react-router-dom"
import { BookRegistration } from "../components/organisms/bookRegistration"
import { Header } from "../components/organisms/header"
import { useGetStorageToken } from "../hooks/useGetStorageToken"




export const BookRegistrationPage = () =>{
    const token = useGetStorageToken()

    return(
        <div>
        {token=="Bearer null"?<Navigate to="/login" />
       :<div>
            <Header />
            <BookRegistration />
        </div>
}
</div>
    )
}