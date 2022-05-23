import { Input } from "../atoms/input"
import { LoginItem } from "../atoms/loginItem"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const LoginMail = (props:Props) => {
   
    return(
        <div>
            <LoginItem item="メールアドレス" />
            <Input placeholder="techtrain@gmail.com" onChange={props.onChange} />
        </div>
    )
}