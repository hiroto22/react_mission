import { Card, CardContent, Grid } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import { useDetail } from "../../hooks/useDetail"
import { useGetStorageToken } from "../../hooks/useGetStorageToken"
import { DetailState } from "../../state/detailState"
import { RegisterButton } from "../atoms/registerButton"





export const Detail = () =>{
    const param = useParams<string>()
    const token = useGetStorageToken()
    const id:string = param.id ?? "";
    const detail = useDetail(token,id)
    const [detailValue,setDetailValue] = useRecoilState(DetailState)
    const navigate = useNavigate()
    console.log(token)

    const onClickEditButton = () =>{
        setDetailValue(detail)
        navigate(`/edit/${id}`)
    }
    return(
        <div>
        <a href="/">書籍レビューへ</a>
          <Grid sx={{justifyContent:"center"}} container spacing={2}>
                <Card sx={{minWidth:360,minHeight:400,margin:"100px", backgroundColor:"#E7F2FA"}}>
                    <CardContent>
                        <h1>{detail?.title}</h1>
                        <p>{detail?.reviewer}</p>
                        <p>{detail?.detail}</p>
                        <p>{detail?.review}</p>
                        <p>{detail?.url}</p>
                        {detail?.isMine?<RegisterButton item="編集" onClick={onClickEditButton} />:<p> </p>}
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )
}

