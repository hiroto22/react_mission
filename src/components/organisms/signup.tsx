import { Card, CardContent, Grid } from "@mui/material"
import axios from "axios"
import { ChangeEventHandler, useState } from "react"
import { RegisterButton } from "../atoms/registerButton"
import { LoginMail } from "../molecules/loginMail"
import { LoginName } from "../molecules/loginName"
import { LoginPassword } from "../molecules/loginPassword"

const URL = "https://api-for-missions-and-railways.herokuapp.com/users"


export const Signup = () => {
    const [inputName, setInputName] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    const onChangeName:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setInputName(e.target.value)
    }
    const onChangeMail:ChangeEventHandler<HTMLInputElement> = (e) =>{
       setInputMail(e.target.value);
    }
    const onChangePassword:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setInputPassword(e.target.value)
    }
    

    const onClick = () =>{
       axios.post(URL,{
           name:inputName,
           email:inputMail,
           password:inputPassword
    })
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
    };

    return(
        <Grid container justifyContent="center" padding={5}>
            <Card sx={{width:800,minHeight:400}}>
                <CardContent>
                    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
                        <Grid item justifyContent="center"  >
                            <h1>新規登録</h1>
                        </Grid>
                        <Grid item justifyContent="center"  >
                            <p>登録済みの方は<a href="http://localhost:3000/login">ログイン</a>へ</p>
                        </Grid>
                        <Grid item justifyContent="center"  >
                            <LoginName onChange={onChangeName}/>
                        </Grid>
                        <Grid item>
                            <LoginMail onChange={onChangeMail}/>
                        </Grid>
                        <Grid item>
                            <LoginPassword onChange={onChangePassword}/>
                        </Grid>
                        <Grid item >
                            <RegisterButton onClick={onClick} item={"新規登録"}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}