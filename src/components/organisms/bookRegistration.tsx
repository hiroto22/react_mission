import { Card, CardContent, Grid } from "@mui/material"
import { ChangeEventHandler, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useBookRegistration } from "../../hooks/useBookRegistration"
import { useGetStorageToken } from "../../hooks/useGetStorageToken"
import { RegisterButton } from "../atoms/registerButton"
import { InputDetail } from "../molecules/inputDetail"
import { InputReview } from "../molecules/inputReview"
import { InputTitle } from "../molecules/inputTitle"
import { InputUrl } from "../molecules/inputUrl"




export const BookRegistration = () => {
    const[title,setTitle] = useState("")
    const[url,setUrl] = useState("")
    const[detail,setDetail] = useState("")
    const[review,setReview] = useState("")
    const token = useGetStorageToken()
    const bookRegistration = useBookRegistration()
    const navigate = useNavigate()


     const onChangeTitle:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setTitle(e.target.value);
     }
     const onChangeUrl:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setUrl(e.target.value);
     }
     const onChangeDetail:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setDetail(e.target.value);
     }
     const onChangeReview:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setReview(e.target.value);
     }
     const onClickRegister = () =>{
         bookRegistration(title,url,detail,review,token)
         navigate("/")
     }

    return(
        <Grid container sx={{justifyContent:"center"}}   marginTop={8}>
        <Card sx={{width:800,minHeight:400}}>
            <CardContent>
                    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center" >
                            <h1>書籍レビュー</h1>
                            <InputTitle value="" onChange={onChangeTitle} />                       
                            <InputUrl value="" onChange={onChangeUrl} />
                            <InputDetail value="" onChange={onChangeDetail}/>
                            <InputReview value="" onChange={onChangeReview}/>
                            <Grid item>
                                <RegisterButton item="登録" onClick={onClickRegister}/>
                            </Grid>
                    </Grid>
                </CardContent>
        </Card>
    </Grid>

    )
}