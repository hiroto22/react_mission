import { Input } from "../atoms/input"

type Props ={
    onChange:React.ChangeEventHandler<HTMLInputElement>
}

export const EditProfileInput =(props:Props) =>{
    return(
        <Input value="" type="text" placeholder="新しい登録名" onChange={props.onChange} />
    )
}