import { Card, CardContent, Grid } from "@mui/material"
import axios, { AxiosRequestConfig } from "axios"
import { Suspense, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import styled from "styled-components"
import { useBookList } from "../../hooks/useBookList"
import { useGetStorageToken } from "../../hooks/useGetStorageToken"
import { bookListState } from "../../state/bookListState"
import { OffsetNumState } from "../../state/offsetNumState"
import { BackButton } from "../atoms/backButton"
import { NextButton } from "../atoms/nextButton"
import { ToAmazonButton } from "../atoms/toAmazonButton"
import { BackButtonFunc } from "../func/button/backButtonFunc"

type BookList ={
    id:string,
    title:string,
    url:string,
    detail:string,
    review:string,
    reviewer:string
}


export const BookList = () => {   
   const offsetNum= useRecoilValue(OffsetNumState)
   const [number,setOffsetNum] = useRecoilState(OffsetNumState)
   const token = useGetStorageToken();
   
   const bookList = useBookList(token,offsetNum);
   console.log(token)

   const onClickNextButton =()=>{
     setOffsetNum(offsetNum+10)
     console.log(offsetNum)
   }

   const onClickBackButton = () =>{
    offsetNum<=0?setOffsetNum(0):setOffsetNum(offsetNum-10)
     console.log(offsetNum)
   }

    return(
    <div>
     <Grid container justifyContent="center" sx={{marginTop:"90px"}}>
     <Suspense fallback={<div>loading</div>}>
       {bookList?.map((books:BookList)=>(
          <Card key={books.id} sx={{width:500,height:300,margin:1,backgroundColor:"#E7F2FA"}}>
            <CardContent>
                <h2>
                  <a href={`/detail/${books.id}`}>{books.title}</a>
                </h2>
                <p>{books.review}</p>
                <SContributor>投稿者:{books.reviewer}</SContributor>
                <ToAmazonButton url={books.url} />
            </CardContent>
          </Card> 
       ))}
      </Suspense>
     </Grid>
     <SDiv>
      <BackButton onClick={onClickBackButton} />
      {offsetNum>=1?<p>{offsetNum/10+1}ページ</p>:<p>1ページ</p>}
      <NextButton onClick={onClickNextButton} />
     </SDiv>
    </div>
    )
}

const SContributor = styled.p`
    color:#009900;
`
const SDiv = styled.div`
    display:flex ;
    text-align:center ;
    justify-content:center ;
`