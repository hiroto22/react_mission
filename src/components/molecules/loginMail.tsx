import { Input } from "../atoms/input"
import { Item } from "../atoms/item"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const LoginMail = (props:Props) => {
   
    return(
        <div>
            <Item item="メールアドレス" />
            <Input value="" type="email" placeholder="techtrain@gmail.com" onChange={props.onChange} />
        </div>
    )
}