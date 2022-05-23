import { Input } from "../atoms/input"
import { LoginItem } from "../atoms/loginItem"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}


export const LoginPassword = (props:Props) => {
    return(
        <div>
            <LoginItem item="パスワード" />
            <Input placeholder="半角英数字" onChange={props.onChange}/>
        </div>
    )
}