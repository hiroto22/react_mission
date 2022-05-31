import axios from "axios";


const URL = "https://api-for-missions-and-railways.herokuapp.com/books"



export const BookRegistrationFunc = (title:string,url:string,detail:string,review:string,token:string) =>{
    axios.post(URL,{
        title:title,
        url:url,
        detail:detail,
        review:review
 },
 {
     headers:{
         Authorization:token
        }
 }
 )
 .then((res)=>{
     console.log(res)     
     })
 .catch((err)=>{console.log(err)})

 };
