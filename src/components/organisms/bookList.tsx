import { Card, CardContent, Grid } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import styled from "styled-components"
import { bookListState } from "../../state/bookListState"
import { ToAmazonButton } from "../atoms/toAmazonButton"

type BookList ={
    id:string,
    title:string,
    url:string,
    detail:string,
    review:string,
    reviewer:string
}

type Token = () => {
    token:string
}


const URL = "https://api-for-missions-and-railways.herokuapp.com/books"

export const BookList = () => {
   const [token,setToken] = useState<Token>()
   const [book,setBook] = useRecoilState(bookListState)
   const bookList = useRecoilValue(bookListState)
   console.log(localStorage)
   const SetToken = (localStorage:any) => {
       setToken(localStorage?.getItem("token"))
    }

   useEffect(()=>{
       axios.get(URL,{
        Authorization:token
       })
       .then((res)=>{
           setBook(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
   },[])

  

    return(
     <Grid container justifyContent="center">
       {bookList?.map((books:BookList)=>(
          <Card sx={{width:500,height:300,margin:1}}>
            <CardContent>
                <h2>{books.title}</h2>
                <p>{books.review}</p>
                <SContributor>投稿者:{books.reviewer}</SContributor>
                <ToAmazonButton url={books.url} />
            </CardContent>
          </Card> 
       ))}
     </Grid>
    )
}

const SContributor = styled.p`
    color:#009900;
`