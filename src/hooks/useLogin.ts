import axios from "axios";
import { useNavigate } from "react-router-dom";


const URL = "https://api-for-missions-and-railways.herokuapp.com/signin"


export const useLogin = () =>{
    const navigate =useNavigate()
    const onClickLogin = async(email:string,password:string) => {
        await axios.post(URL,{
             email:email,
             password:password
      },
      )
      .then((res)=>{
          sessionStorage.setItem("token",res.data.token)
          console.log(res)
          })
      .catch((err)=>{
          console.log(err)
          alert(`${err} 
         ログインできませんでした。もう一度お試し下さい。`)
        })

      navigate("/")
       };


    return(
        onClickLogin
    )

};