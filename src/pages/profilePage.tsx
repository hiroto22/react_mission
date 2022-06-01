import { Card, CardContent, Grid } from "@mui/material"
import { Navigate } from "react-router-dom"
import { EditProfile } from "../components/organisms/editProfile"
import { Header } from "../components/organisms/header"
import { useGetStorageToken } from "../hooks/useGetStorageToken"




export const ProfilePage = () => {
    const token = useGetStorageToken()

    return(
        <div>
        {token=="Bearer null"?<Navigate to="/login" />
       :<div>
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
}
</div>
    )
}


