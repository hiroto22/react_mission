import axios from "axios"
import { url } from "inspector"
import { title } from "process"
import { useNavigate } from "react-router-dom"
import { StringLiteralLike } from "typescript"
import { Detail } from "../components/organisms/detail"

const URL = "https://api-for-missions-and-railways.herokuapp.com/books/"

export const useEditReview = () =>{
    const navigate = useNavigate()
    const EditReview =async(id:string,title:string|undefined,url:string|undefined,detail:string|undefined,review:string|undefined,token:string)=>{
        await axios.put(URL+id,{
            title:title,
            url:url,
            detail:detail,
            review:review
        },{
        headers:{
            Authorization:token
        }
    }
        )
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})

        navigate("/")
    }

    const DeleteReview = async(id:string,token:string) =>{
       await axios.delete(URL+id,{
           headers:{ Authorization:token}
       })
       .then((res)=>{console.log(res)})
       .catch((err)=>{console.log(err)})

       navigate("/")
    }

    return {EditReview,DeleteReview}
}