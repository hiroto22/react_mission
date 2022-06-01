import axios from "axios"


const URL = "https://api-for-missions-and-railways.herokuapp.com/users"


export const useEditProfile = () =>{
    const editProfile = async(token:string,name:string) =>{
        await axios.put(URL,{name:name},{
            headers:{
                Authorization:token
            }
        }

            )
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    return editProfile
}