import { ChangeEventHandler, useState } from "react";
import { useEditProfile } from "../../hooks/useEditProfile";
import { useGetName } from "../../hooks/useGetName";
import { useGetStorageToken } from "../../hooks/useGetStorageToken";
import { RegisterButton } from "../atoms/registerButton";
import { EditProfileInput } from "../molecules/editProfileInput";



export const EditProfile = () =>{
    const [newName,setNewName] = useState<string>("")
    const token = useGetStorageToken()
    const name = useGetName(token)
    const editProfile = useEditProfile()

    const onChange:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setNewName(e.target.value);
     }

     const onClickRegister = () => {
        editProfile(token,newName)
        window.location.reload()
    }


    return(
        <div>
            <p>現在の登録名:{name}</p>
            <EditProfileInput onChange={onChange} />
            <RegisterButton item="変更" onClick={onClickRegister} />
        </div>
    )
}