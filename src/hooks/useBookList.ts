


import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookListState } from "../state/bookListState";


const URL = "https://api-for-missions-and-railways.herokuapp.com/books"


export const  useBookList =  (token:string,offsetNum:number) =>{
    const [book,setBookList] = useRecoilState(bookListState);
    const bookList = useRecoilValue(bookListState);


    useEffect(()=>{
        axios.get(URL,{
            headers:{
                Authorization:token
            },
            params:{
                offset:offsetNum
            }
        })
        .then((res)=>{
            console.log(res.data)
            setBookList(res.data)
        })
        .catch((err)=>{console.log(err)})
            
    },[offsetNum,token])
    return bookList

}