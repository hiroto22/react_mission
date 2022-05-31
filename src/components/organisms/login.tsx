import { Card, CardContent, Grid } from "@mui/material";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { RegisterButton } from "../atoms/registerButton"
import { LoginMail } from "../molecules/loginMail"
import { LoginPassword } from "../molecules/loginPassword"

const URL = "https://api-for-missions-and-railways.herokuapp.com/signin"


export const Login = () => {
    const [inputMail, setInputMail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const onChangeMail:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setInputMail(e.target.value);
     }
     const onChangePassword:ChangeEventHandler<HTMLInputElement> = (e) =>{
         setInputPassword(e.target.value)
     }

     const onClickLogin = useLogin()
     
    console.log(sessionStorage)

    return(
        <Grid container justifyContent="center" padding={5}>
            <Card sx={{width:800,minHeight:400}}>
                <CardContent>
                        <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
                            <Grid item justifyContent="center"  >
                                <h1>ログイン</h1>
                            </Grid>
                            <Grid item justifyContent="center"  >
                                <p>新規登録の方は<a href="http://localhost:3000/signup">こちら</a>へ</p>
                            </Grid>
                            <Grid item>
                                <LoginMail onChange={onChangeMail}/>
                            </Grid>
                            <Grid item>
                                <LoginPassword onChange={onChangePassword}/>
                            </Grid>
                            <Grid item >
                                <RegisterButton onClick={()=>onClickLogin(inputMail,inputPassword)} item={"ログイン"}/>
                            </Grid>
                        </Grid>
                    </CardContent>
            </Card>
        </Grid>
    )
}