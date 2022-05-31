import { Input } from "../atoms/input"
import { Item } from "../atoms/item"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}


export const LoginPassword = (props:Props) => {
    return(
        <div>
            <Item item="パスワード" />
            <Input value="" type="password" placeholder="半角英数字" onChange={props.onChange}/>
        </div>
    )
}