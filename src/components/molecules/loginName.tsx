import { Input } from "../atoms/input"
import { LoginItem } from "../atoms/loginItem"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}


export const LoginName = (props:Props) => {
    return(
        <div>
            <LoginItem item="名前" />
            <Input placeholder="鈴木一郎" onChange={props.onChange}/>
        </div>
    )
}