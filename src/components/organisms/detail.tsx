import { Box, Card, CardContent, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { margin } from "@mui/system"
import { useNavigate, useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import styled from "styled-components"
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

    const createData = (itemName:string,value:string|undefined) =>{
        return {itemName,value}
    }

    const rows = [
        createData("タイトル",detail?.title),
        createData("投稿者",detail?.reviewer),
        createData("あらすじ",detail?.detail),
        createData("レビュー",detail?.review),
        createData("URL",detail?.url)
    ]

    return(
        <div>
        {detail?
        <div>
        <a href="/">書籍レビューへ</a>
          <Grid sx={{justifyContent:"center"}} container spacing={2}>
                <Card sx={{minWidth:360,minHeight:400,margin:"100px", backgroundColor:"#E7F2FA"}}>
                    <CardContent>
                        <TableContainer component={Card}>
                            <Table>
                               <TableHead>
                                   <TableRow>
                                       <TableRow>
                                           <TableCell>詳細</TableCell>
                                           <TableCell align="right"></TableCell>
                                       </TableRow>
                                   </TableRow>
                               </TableHead>
                               <TableBody>
                                   {rows.map((row)=>(
                                       <TableRow 
                                       key={row.itemName}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                           <TableCell component="th" scope="row">{row.itemName}</TableCell>
                                           <TableCell align="right">{row.value}</TableCell>
                                       </TableRow>
                                   ))}
                               </TableBody>
                            </Table>
                        </TableContainer> 
                        {detail?.isMine?<RegisterButton item="編集" onClick={onClickEditButton} />:<p> </p>}
                    </CardContent>
                </Card>
            </Grid>
            </div>
            :<Box sx={{textAlign:"center",verticalAlign:"middle",marginTop:"200px"}}><CircularProgress /></Box>}
        </div>

    )
}

