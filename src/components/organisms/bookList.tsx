import { Card, CardContent, Grid } from "@mui/material"
import axios, { AxiosRequestConfig } from "axios"
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

type Token ={
  Authorization:string
}

const URL = "https://api-for-missions-and-railways.herokuapp.com/books"

export const BookList = () => {
  //  const [token,setToken] = useState<Token>();
   const [book,setBook] = useRecoilState(bookListState);
   const bookList = useRecoilValue(bookListState);
   
   const strage = localStorage.getItem("token")
   const token = "Bearer "+strage
  // const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM0NzgzMTUsImlhdCI6IjIwMjItMDUtMjRUMTE6MzE6NTUuNTk2MjIwMDJaIiwic3ViIjoiNTQ1NDY1NTczNTQiLCJ1c2VyX2lkIjoiMzkzMjg0ZGMtNzk1Ni00MjlhLWJmZWEtMWEzNjhlNGIxOGY1In0.TVDOa36PiwVmNsiDISz-VdPgc7yrjYIq-qHzHcrzDEs"

   console.log(token)


   useEffect(()=>{
       axios.get(URL,{
         headers:{
           Authorization:token,
          },
         params:{
           offset:20
         }
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