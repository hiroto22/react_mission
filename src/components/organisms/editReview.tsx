import { Card, CardContent, Grid } from "@mui/material"
import { ChangeEventHandler, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { useDetail } from "../../hooks/useDetail"
import { useEditReview } from "../../hooks/useEditReview"
import { useGetStorageToken } from "../../hooks/useGetStorageToken"
import { DetailState } from "../../state/detailState"
import { RegisterButton } from "../atoms/registerButton"
import { BookRegistrationFunc } from "../func/api/bookRegistrationFunc"
import { InputDetail } from "../molecules/inputDetail"
import { InputReview } from "../molecules/inputReview"
import { InputTitle } from "../molecules/inputTitle"
import { InputUrl } from "../molecules/inputUrl"




export const EditReview = () =>{
    const token = useGetStorageToken()
    const param = useParams<string>()
    const id:string = param.id ?? "";
    const [value,setValue] = useRecoilState(DetailState)
    const datas = useRecoilValue(DetailState)
    // const[title,setTitle] = useState(value?.title)
    // const[url,setUrl] = useState(value?.url)
    // const[detail,setDetail] = useState(value?.detail)
    // const[review,setReview] = useState(value?.review)
    console.log(value)

    

    const {EditReview,DeleteReview} = useEditReview()

    const onChangeTitle:ChangeEventHandler<HTMLInputElement> = (e) =>{
        const data ={
            id:id,
            title:e.target.value,
            url:datas?.url,
            detail:datas?.detail,
            review:datas?.review
        }
        setValue(data)
     }
     const onChangeUrl:ChangeEventHandler<HTMLInputElement> = (e) =>{
        const data ={
            id:id,
            title:datas?.title,
            url:e.target.value,
            detail:datas?.detail,
            review:datas?.review
        }
        setValue(data)
     }
     const onChangeDetail:ChangeEventHandler<HTMLInputElement> = (e) =>{
        const data ={
            id:id,
            title:datas?.title,
            url:datas?.url,
            detail:e.target.value,
            review:datas?.review
        }
        setValue(data)
     }
     const onChangeReview:ChangeEventHandler<HTMLInputElement> = (e) =>{
        const data ={
            id:id,
            title:datas?.title,
            url:datas?.url,
            detail:datas?.detail,
            review:e.target.value
        }
        setValue(data);
     }
     const onClickEdit = () =>{
        EditReview(id,datas?.title,datas?.url,datas?.detail,datas?.review,token)
     }

     const onClickDelete = async() =>{
         DeleteReview(id,token)
     }

    return(
        <Grid container justifyContent="center" padding={5} marginTop={8}>
        <Card sx={{width:800,minHeight:400}}>
            <CardContent>
                    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center" >
                            <h1>編集</h1>
                            <InputTitle value={value?.title} onChange={onChangeTitle} />                       
                            <InputUrl value={value?.url} onChange={onChangeUrl} />
                            <InputDetail value={value?.detail} onChange={onChangeDetail}/>
                            <InputReview value={value?.review} onChange={onChangeReview}/>
                            <Grid item>
                                <RegisterButton item="編集" onClick={onClickEdit}/>
                                <RegisterButton item="削除" onClick={onClickDelete}/>

                            </Grid>
                    </Grid>
                </CardContent>
        </Card>
    </Grid>

    )
}