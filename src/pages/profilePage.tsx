import { Card, CardContent, Grid } from "@mui/material"
import styled from "styled-components"
import { EditProfile } from "../components/organisms/editProfile"
import { Header } from "../components/organisms/header"




export const ProfilePage = () => {
    return(
        <div>
        <Header />
        <Grid container justifyContent="center" padding={5} marginTop={8}>
            <Card sx={{width:800,minHeight:400}}>
                <CardContent>
                        <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
                            <Grid item>
                                <h1>ユーザー情報編集</h1>
                            </Grid>
                            <Grid item>
                                <EditProfile />
                            </Grid>
                        </Grid>
                    </CardContent>
            </Card>
        </Grid>
    </div>
    )
}


