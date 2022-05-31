import { ChangeEventHandler, useState } from "react";
import { useGetName } from "../../hooks/useGetName";
import { useGetStorageToken } from "../../hooks/useGetStorageToken";
import { RegisterButton } from "../atoms/registerButton";
import { EditProfileFunc } from "../func/api/editProfileFunc";
import { EditProfileInput } from "../molecules/editProfileInput";



export const EditProfile = () =>{
    const [newName,setNewName] = useState<string>("")
    const token = useGetStorageToken()
    const name = useGetName(token);

    const onChange:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setNewName(e.target.value);
     }

     const onClick = () => {
        EditProfileFunc(token,newName)
        window.location.reload()
        console.log(newName)
    }


    return(
        <div>
            <p>現在の登録名:{name}</p>
            <EditProfileInput onChange={onChange} />
            <RegisterButton item="編集" onClick={onClick} />
        </div>
    )
}